<?php

namespace App\Http\Controllers;

use App\Commune;
use App\dbr;
use App\FirePoint;
use App\Weather;
use DateTime;
use DateTimeZone;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Webklex\PHPIMAP\ClientManager;

class WeatherController extends Controller
{
    public function getIndex()
    {
        $listCommune = Commune::all();
        // Key WetherAPI: b04050645bc048e9a9b143125242901
        $api = 'b04050645bc048e9a9b143125242901';
        $url = 'http://api.weatherapi.com/v1/history.json?key=' . $api . '&q=';

        foreach ($listCommune as $list) {
            $data['maxa'] = $list->maxa;
            $data['mahuyen'] = $list->mahuyen;

            $time_now = date('Y-m-d');

            // Lượng mưa từ 0h->13h hôm nay
            $url_now = $url . trim($list->vd) . "," . trim($list->kd) . "&dt=" . $time_now;
            $data_weather = $this->execute($url_now);
            $sum_luongmua_0h_13h = 0;
            for ($i = 0; $i < 14; $i++) {
                if (isset($data_weather->forecast->forecastday[0]->hour[$i]->precip_mm)) {
                    $sum_luongmua_0h_13h += $data_weather->forecast->forecastday[0]->hour[$i]->precip_mm;
                }
            }

            // Lượng mưa từ 13h hôm qua đến 0h hôm nay
            $sum_luongmua_13h_0h_ago = 0;
            $date_ago = date('Y-m-d', strtotime(' -1 day'));
            $url_ago = $url . trim($list->vd) . "," . trim($list->kd) . "&dt=" . $date_ago;
            $data_weather_ago = $this->execute($url_ago);
            for ($i = 14; $i < 25; $i++) {
                if (isset($data_weather_ago->forecast->forecastday[0]->hour[$i]->precip_mm)) {
                    $sum_luongmua_13h_0h_ago += $data_weather_ago->forecast->forecastday[0]->hour[$i]->precip_mm;
                }
            }

            // tổng lượng mưa 13h hqua đến 13h hôm nay
            $data['luongmua'] = $sum_luongmua_13h_0h_ago + $sum_luongmua_0h_13h;
            $data['thoigian'] = "'" . $time_now . "'";
            $data['nhietdo'] = $data_weather->forecast->forecastday[0]->hour[13]->temp_c;
            $data['doam'] = $data_weather->forecast->forecastday[0]->hour[13]->humidity;
            $data['tocdogio'] = $data_weather->forecast->forecastday[0]->hour[13]->wind_kph;
            $data['huonggio'] = $data_weather->forecast->forecastday[0]->hour[13]->wind_degree;
            $data['csp'] = 0;
            $data['capncc'] = 1;

            // độ ẩm bão hoà
            // $E = 6.1 * pow(10, ((7.6 * $data['nhietdo']) / (242 + $data['nhietdo'])));
            // $d = (100 - $data['doam']) / 100 * $E;
            // $data['d'] = $d;
            $data['d'] = $this->get_D(round($data['nhietdo']));

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

    public function get_D($val)
    {
        $bang_tra_d = [
            87 => 0.0004,
            86 => 0.0004,
            85 => 0.0005,
            84 => 0.0006,
            83 => 0.0007,
            82 => 0.0009,
            81 => 0.001,
            80 => 0.0012,
            79 => 0.0014,
            78 => 0.0016,
            77 => 0.0019,
            76 => 0.0022,
            75 => 0.0026,
            74 => 0.003,
            73 => 0.0034,
            72 => 0.004,
            71 => 0.0046,
            70 => 0.0053,
            69 => 0.006,
            68 => 0.0069,
            67 => 0.0079,
            66 => 0.009,
            65 => 0.0103,
            64 => 0.0117,
            63 => 0.0133,
            62 => 0.0151,
            61 => 0.0171,
            60 => 0.0193,
            59 => 0.0218,
            58 => 0.0246,
            57 => 0.0277,
            56 => 0.0312,
            55 => 0.0351,
            54 => 0.0442,
            53 => 0.0442,
            52 => 0.0494,
            51 => 0.0553,
            50 => 0.0617,
            49 => 0.0689,
            48 => 0.0767,
            47 => 0.0853,
            46 => 0.095,
            45 => 0.106,
            44 => 0.117,
            43 => 0.13,
            42 => 0.144,
            41 => 0.159,
            40 => 0.176,
            39 => 0.194,
            38 => 0.214,
            37 => 0.236,
            36 => 0.26,
            35 => 0.286,
            34 => 0.314,
            33 => 0.345,
            32 => 0.378,
            31 => 0.414,
            30 => 0.453,
            29 => 0.496,
            28 => 0.542,
            27 => 0.592,
            26 => 0.646,
            25 => 0.705,
            24 => 0.768,
            23 => 0.863,
            22 => 0.909,
            21 => 0.989,
            20 => 1.07,
            19 => 1.17,
            18 => 1.26,
            17 => 1.37,
            16 => 1.48,
            15 => 1.61,
            14 => 1.74,
            13 => 1.88,
            12 => 2.03,
            11 => 2.19,
            10 => 2.36,
            9 => 2.54,
            8 => 2.74,
            7 => 2.95,
            6 => 3.17,
            5 => 3.41,
            4 => 3.66,
            3 => 3.93,
            2 => 4.22,
            1 => 4.52,
            0 => 4.85,
            1 => 5.19,
            2 => 5.56,
            3 => 5.95,
            4 => 6.36,
            5 => 6.79,
            6 => 7.26,
            7 => 7.75,
            8 => 8.27,
            9 => 8.82,
            10 => 9.4,
            11 => 10,
            12 => 10.7,
            13 => 11.3,
            14 => 12.1,
            15 => 12.8,
            16 => 13.6,
            17 => 14.5,
            18 => 15.4,
            19 => 16.3,
            20 => 17.3,
            21 => 18.3,
            22 => 19.4,
            23 => 20.6,
            24 => 21.8,
            25 => 23,
            26 => 24.4,
            27 => 25.8,
            28 => 27.2,
            29 => 28.7,
            30 => 30.3,
            31 => 32,
            32 => 33.8,
            33 => 35.6,
            34 => 37.5,
            35 => 39.6,
            36 => 41.7,
            37 => 43.9,
            38 => 46.2,
            39 => 48.6,
            40 => 51.5,
            41 => 53.7,
            42 => 56.4,
            43 => 59.3,
            44 => 62.2,
            45 => 65.3,
            46 => 68.5,
            47 => 71.9,
            48 => 75.4,
            49 => 79,
            50 => 82.8,
        ];

        if (isset($bang_tra_d[$val])) {
            return $bang_tra_d[$val];
        }

        return 0;
    }

    public function calculateWarningLevel($maxa)
    {
        $dateTime = "'" . now()->format('Y-m-d') . "'";
        $dayData = Weather::where('maxa', $maxa)->where('thoigian', $dateTime)->first();

        if (isset($dayData)) {
            $dayAgoData = Weather::where('maxa', $maxa)->where('id', '<', $dayData->id)->orderBy('id', 'desc')->first();
            if (isset($dayAgoData)) {
                $old_p = $dayAgoData->csp;
            } else {
                $old_p = 0;
            }

            //kiểm tra lượng mưa ngày để set chỉ số k
            $k = 1;
            if ($dayData->luongmua >= 5) {
                $k = 0;
            }

            // tính chỉ số p
            $now_p = $k * $dayData->nhietdo * $dayData->d;
            $p = $now_p + $old_p;

            if ($p >= 0 && $p <= 2500) {
                $level = 1;
            } else if ($p > 2500 && $p < 5000) {
                $level = 2;
            } else if ($p > 5000 && $p < 7500) {
                $level = 3;
            } else if ($p > 7500 && $p < 10000) {
                $level = 4;
            } else {
                $level = 5;
            }

            // nếu lượng mưa => thì reset p và cấp cháy
            if ($dayData->luongmua >= 5) {
                $dayData->csp = 0;
                $dayData->capncc = 1;
            } else {
                $dayData->csp = $p;
                $dayData->capncc = $level;
            }

            $dayData->save();
        }
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

        $publicPath = public_path();
        $filePath = $publicPath . '/dayly_weather/' . $fileName;
        $writer = new Xlsx($spreadsheet);
        $writer->save($filePath);

        $subject = "Số liệu KT các mức cảnh báo cấp độ cháy rừng " . now()->format('d-m-Y');
        Mail::send('mail.capchay', [], function ($mess) use ($subject, $fileName) {
            $mess->to('kdg2k2@gmail.com');
            $mess->from('clonemail2k2@gmail.com', 'Hệ thống cảnh báo cháy rừng tỉnh Hà Nam');
            $mess->subject($subject);
            $mess->attach('public/dayly_weather/' . $fileName);
        });

        return "Send Email Success";
    }

    public function updateDBR()
    {
        $time_now = now()->format('Y-m-d');
        $data = Weather::select('maxa', 'capncc')->where('thoigian', $time_now)->get();

        for ($i = 0; $i < count($data); $i++) {
            dbr::where('maxa', $data[$i]->maxa)->update(['capchay' => $data[$i]->capncc]);
            set_time_limit(600);
        }

        return "Update Success";
    }

    public function getFirePoints()
    {
        set_time_limit(600);
        $push_data = array();
        $cm = new ClientManager();
        $client = $cm->make([
            'host' => 'imap.googlemail.com',
            'port' => 993,
            'encryption' => 'ssl',
            'validate_cert' => true,
            'username' => 'clonemail2k2@gmail.com',
            'password' => 'xubpbiwdtrnokjtu',
            'protocol' => 'imap',
        ]);
        try {
            $client->connect();
            $Folder = $client->getFolder("INBOX");
            $Message = $Folder->query()->from('noreply@nasa.gov')->UNSEEN()->get();
            foreach ($Message as $msg) {
                $msg->setFlag(['Seen']);
                $attachments = $msg->getAttachments();
                foreach ($attachments as $attachment) {
                    if ($attachment->getExtension() == 'txt') {
                        $content = $attachment->getAttributes()['content'];
                        $data_str = trim($content);
                        $data_array = str_getcsv($data_str, "\n");
                        for ($i = 1; $i < count($data_array); $i++) {
                            $hotSpot = str_getcsv($data_array[$i], ",");
                            array_push($push_data, $hotSpot);
                        }
                    }
                }
            }

            $tableName = "hanam_dbr";
            for ($i = 0; $i < count($push_data); $i++) {
                set_time_limit(600);
                $lat = $push_data[$i][0];
                $lon = $push_data[$i][1];

                $dt_convert = $this->convertDateTime($push_data[$i][5] . " " . $push_data[$i][6]);
                $acq_date = explode(" ", $dt_convert)[0];
                $acq_time = explode(" ", $dt_convert)[1];

                $data = DB::select("select gid,maxa,xa,huyen,tk,khoanh,lo,ldlr,maldlr,churung from " . $tableName . " where ST_Intersects(" . $tableName . ".geom, 'SRID=4326;POINT(" . $lon . " " . $lat . ")'::geography)");
                if (count($data) > 0) {
                    $checkExsit = FirePoint::where('latitude', $lat)->where('longitude', $lon)->where('acq_date', $acq_date)->where('acq_time', $acq_time)->get();
                    if (count($checkExsit) == 0) {
                        $new = new FirePoint();
                        $new->maxa = $data[0]->maxa;
                        $new->tk = $data[0]->tk;
                        $new->khoanh = $data[0]->khoanh;
                        $new->lo = $data[0]->lo;
                        $new->ldlr = $data[0]->ldlr;
                        $new->maldlr = $data[0]->maldlr;
                        $new->churung = $data[0]->churung;
                        $new->longitude = $push_data[$i][1];
                        $new->latitude = $push_data[$i][0];
                        $new->brightness = $push_data[$i][2];
                        $new->scan = $push_data[$i][3];
                        $new->track = $push_data[$i][4];
                        $new->acq_date = $acq_date;
                        $new->acq_time = $acq_time;
                        $new->satellite = $push_data[$i][7];
                        $new->confidence = $push_data[$i][8];
                        $new->version = $push_data[$i][9];
                        $new->bright_t31 = $push_data[$i][10];
                        $new->daynight = $push_data[$i][11];
                        $new->save();


                        /* Send Email */
                        $subject = "Cảnh báo phát hiện điểm nguy cơ cháy";
                        Mail::send('mail.firepoint', ['lat' => $push_data[$i][0], 'lon' => $push_data[$i][1], 'lo' => $data[0]->lo, 'khoanh' => $data[0]->khoanh, 'tk' => $data[0]->tk, 'churung' => $data[0]->churung, 'xa' => $data[0]->xa, 'huyen' => $data[0]->huyen], function ($mess) use ($subject) {
                            $mess->to('kdg2k2@gmail.com');
                            $mess->from('clonemail2k2@gmail.com', 'Hệ thống dự báo cháy rừng tỉnh Hà Nam');
                            $mess->subject($subject);
                        });
                    }
                }
            }

            return "Success";
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function convertDateTime($date, $format = 'Y-m-d H:i')
    {
        $tz1 = 'UTC';
        $tz2 = 'Asia/Ho_Chi_Minh';

        $d = new DateTime($date, new DateTimeZone($tz1));
        $d->setTimeZone(new DateTimeZone($tz2));

        return $d->format($format);
    }
}
