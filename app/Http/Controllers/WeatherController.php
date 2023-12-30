<?php

namespace App\Http\Controllers;

use App\Commune;
use App\dbr;
use App\receiveEmail;
use App\Weather;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class WeatherController extends Controller
{
    public function getIndex()
    {
        $listCommune = Commune::all();

        foreach ($listCommune as $list) {
            $data['maxa'] = $list->maxa;
            $data['mahuyen'] = $list->mahuyen;

            $time_now = date('Y-m-d');
            /* Key WetherAPI: fb5e5739643b498babf72107232011 */
            $url_now = "http://api.weatherapi.com/v1/history.json?key=fb5e5739643b498babf72107232011&q=" . trim($list->vd) . "," . trim($list->kd) . "&dt=" . $time_now;
            $data_weather = $this->execute($url_now);
            $sum_luongmua_0h_13h = 0;
            for ($i = 0; $i < 14; $i++) {
                if (isset($data_weather->forecast->forecastday[0]->hour[$i]->precip_mm)) {
                    $sum_luongmua_0h_13h += $data_weather->forecast->forecastday[0]->hour[$i]->precip_mm;
                }
            }

            $sum_luongmua_13h_0h_ago = 0;
            $date_ago = date('Y-m-d', strtotime(' +1 day'));
            $url_ago = "http://api.weatherapi.com/v1/history.json?key=fb5e5739643b498babf72107232011&q=" . trim($list->vd) . "," . trim($list->kd) . "&dt=" . $date_ago;
            $data_weather_ago = $this->execute($url_ago);

            for ($i = 14; $i < 25; $i++) {
                if (isset($data_weather_ago->forecast->forecastday[0]->hour[$i]->precip_mm)) {
                    $sum_luongmua_13h_0h_ago += $data_weather_ago->forecast->forecastday[0]->hour[$i]->precip_mm;
                }
            }

            $data['luongmua'] = $sum_luongmua_13h_0h_ago + $sum_luongmua_0h_13h;
            $data['thoigian'] = "'" . $time_now . "'";
            $data['nhietdo'] = $data_weather->forecast->forecastday[0]->hour[13]->temp_c;
            $data['doam'] = $data_weather->forecast->forecastday[0]->hour[13]->humidity;
            $data['tocdogio'] = $data_weather->forecast->forecastday[0]->hour[13]->wind_kph;
            $data['huonggio'] = $data_weather->forecast->forecastday[0]->hour[13]->wind_degree;
            $E = 6.1 * pow(10, ((7.6 * $data['nhietdo']) / (242 + $data['nhietdo'])));
            $d = (100 - $data['doam']) / 100 * $E;
            $data['csp'] = 0;
            $data['capncc'] = 1;
            $data['d'] = $d;

            Weather::insert($data);
            set_time_limit(300);
        }

        $this->updateDaily();
    }

    public function updateDaily()
    {
        $listCommune = Commune::all();
        foreach ($listCommune as $list) {
            $maxa = $list->maxa;
            $this->calculateWarningLevel($maxa);
        }

        return "Update Sucess";
    }


    public function calculateWarningLevel($maxa)
    {
        $maxid = Weather::where('maxa', $maxa)->max('id');
        $getDKLM = Weather::where('maxa', $maxa)->where('luongmua', '>', 5)->orderBy('id', 'desc')->first();
        if (isset($getDKLM)) {
            $listData = Weather::where('maxa', $maxa)->where('id', '>', $getDKLM->id)->where('id', '<=', $maxid)->get();
        } else {
            $listData = Weather::where('maxa', $maxa)->where('id', '>', 0)->where('id', '<=', $maxid)->get();
        }
        $p = 0;

        foreach ($listData as $list) {
            $p += $list->nhietdo * $list->d;
        }
        if ($p >= 0 && $p <= 1000) {
            $level = 1;
        } else if ($p > 1000 && $p < 2500) {
            $level = 2;
        } else if ($p > 2500 && $p < 5000) {
            $level = 3;
        } else if ($p > 5000 && $p < 10000) {
            $level = 4;
        } else {
            $level = 5;
        }

        $dateTime = "'" . now()->format('Y-m-d') . "'";
        $infoUpdate = Weather::where('maxa', $maxa)->where('thoigian', $dateTime)->first();
        $dateTimeAgo = "'" . date('Y-m-d', strtotime(' +1 day')) . "'";
        $dateAgo = Weather::where('maxa', $maxa)->where('thoigian', $dateTimeAgo)->first();

        // Tinh ngay khong mua lien tiep
        if (isset($dateAgo)) {
            $dayRain3Xa = $dateAgo->dayrain3;

            if ($infoUpdate->luongmua > 0 && $infoUpdate->luongmua < 5) {
                $dayRain3Xa =  $dayRain3Xa + 1;
            } else {
                $dayRain3Xa = 0;
            }
        } else {
            $dayRain3Xa = 0;
        }

        if ($infoUpdate->luongmua >= 5 || $dayRain3Xa >= 3) {
            $infoUpdate->csp = 0;
            $infoUpdate->capncc = 1;
        } else {
            $infoUpdate->csp = $p;
            $infoUpdate->capncc = $level;
        }

        $infoUpdate->save();
    }


    private function execute($url)
    {
        $client = new \GuzzleHttp\Client(['verify' => false]);
        $request = $client->get($url);

        $response = $request->getBody();
        return json_decode($response->getContents());
    }


    public function sendEmail()
    {
        $time_now = now()->format('Y-m-d');
        $data = Weather::where('thoigian', $time_now)->get();
        $fileName = 'HaNam_' . $time_now . '.xlsx';

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'MAHUYEN');
        $sheet->setCellValue('B1', 'HUYEN');
        $sheet->setCellValue('C1', 'MAXA');
        $sheet->setCellValue('D1', 'XA');
        $sheet->setCellValue('E1', 'THOIGIAN');
        $sheet->setCellValue('F1', 'NHIETDO');
        $sheet->setCellValue('G1', 'DOAM');
        $sheet->setCellValue('H1', 'TOCDOGIO');
        $sheet->setCellValue('I1', 'HUONGGIO');
        $sheet->setCellValue('J1', 'LUONGMUA');
        $sheet->setCellValue('K1', 'CSP');
        $sheet->setCellValue('L1', 'CAPNCC');
        for ($i = 0; $i < count($data); $i++) {
            $mahuyen = $data[$i]->commune->district->mahuyen;
            $huyen = $data[$i]->commune->district->huyen;
            $maxa = $data[$i]->maxa;
            $xa = $data[$i]->commune->xa;
            $tg = $data[$i]->thoigian;
            $nd = $data[$i]->nhietdo;
            $da = $data[$i]->doam;
            $tdg = $data[$i]->tocdogio;
            $hg = $data[$i]->huonggio;
            $lm = $data[$i]->luongmua;
            $csp = $data[$i]->csp;
            $capncc = $data[$i]->capncc;
            $sheet->setCellValue('A' . ($i + 2), $mahuyen);
            $sheet->setCellValue('B' . ($i + 2), $huyen);
            $sheet->setCellValue('C' . ($i + 2), $maxa);
            $sheet->setCellValue('D' . ($i + 2), $xa);
            $sheet->setCellValue('E' . ($i + 2), $tg);
            $sheet->setCellValue('F' . ($i + 2), $nd);
            $sheet->setCellValue('G' . ($i + 2), $da);
            $sheet->setCellValue('H' . ($i + 2), $tdg);
            $sheet->setCellValue('I' . ($i + 2), $hg);
            $sheet->setCellValue('J' . ($i + 2), $lm);
            $sheet->setCellValue('K' . ($i + 2), $csp);
            $sheet->setCellValue('L' . ($i + 2), $capncc);
        }
        $writer = new Xlsx($spreadsheet);
        $writer->save($fileName);

        $getEmails = receiveEmail::where('firelevel', 1)->get();
        $subject = "Số liệu KT các mức cảnh báo cấp độ cháy rừng " . now()->format('d-m-Y');
        foreach ($getEmails as $item) {
            Mail::send('web.mail', [], function ($mess) use ($subject, $fileName, $item) {
                $mess->to(trim($item->email));
                $mess->from('giamsatrunghanam@ifee.edu.vn', 'Hệ thống giám sát rừng tỉnh Hà Nam');
                $mess->subject($subject);
                $mess->attach('public/' . $fileName);
            });
        }

        return "Send Email Sucess";
    }

    public function updateDBR()
    {
        $time_now = now()->format('Y-m-d');
        $data = Weather::select('maxa', 'capncc')->where('thoigian', $time_now)->get();

        for ($i = 0; $i < count($data); $i++) {
            dbr::where('maxa', $data[$i]->maxa)->update(['capchay' => $data[$i]->capncc]);
            set_time_limit(600);
        }

        $rtn = dbr::whereBetween('maldlr', [1, 13])->get();
        for ($i = 0; $i < count($rtn); $i++) {
            $capchay = $data->where('maxa', $rtn[$i]->maxa)->first()->capncc;
            if ($capchay > 1) {
                $level = $capchay - 1;
                dbr::where('gid', $rtn[$i]->gid)->update(['capchay' => $level]);
            } else {
                dbr::where('gid', $rtn[$i]->gid)->update(['capchay' => 1]);
            }
            set_time_limit(180);
        }

        $rungthong = dbr::where('sldlr', 'like', '%Thông%')->orWhere('sldlr', 'like', '%thông%')->orWhere('sldlr', 'like', '%thong%')->orWhere('sldlr', 'like', '%Thong%')->get();
        for ($i = 0; $i < count($rungthong); $i++) {
            $capchay_rthong = $data->where('maxa', $rungthong[$i]->maxa)->first()->capncc;
            if ($capchay_rthong < 5) {
                $level_up = $capchay_rthong + 1;
                dbr::where('gid', $rungthong[$i]->gid)->update(['capchay' => $level_up]);
            } else {
                dbr::where('gid', $rungthong[$i]->gid)->update(['capchay' => 5]);
            }
            set_time_limit(180);
        }

        dbr::where('maldlr', 92)->orWhereBetween('lapdia', [3, 5])->update(['capchay' => 1]);
        return "Update Success";
    }
}
