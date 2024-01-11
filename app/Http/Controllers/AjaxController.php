<?php

namespace App\Http\Controllers;

use App\Commune;
use App\FirePoint;
use App\Weather;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class AjaxController extends Controller
{
    public function getWeatherCommune(Request $request)
    {
        $maxa = $request->maxa;
        $data = Weather::where('maxa', $maxa)->get();
        return $data;
    }

    public function getFirePoints()
    {
        $now = now()->format('Y-m-d');
        $ago_date = date('Y-m-d', strtotime('+1 days ago'));
        
        $data = FirePoint::whereBetween('acq_date', [$now, $ago_date])->get();
        foreach ($data as $item) {
            $item->xa = Commune::where('maxa', $item->maxa)->first()->xa;
            $item->huyen = Commune::where('maxa', $item->maxa)->first()->district->huyen;
        }
        return $data;
    }

    public function getHistoryFirePoints(Request $request)
    {
        $start = $request->startDate;
        $end = $request->endDate;
        $data = FirePoint::whereBetween('acq_date', [$start, $end])->get();
        foreach ($data as $item) {
            $item->xa = Commune::where('maxa', $item->maxa)->first()->xa;
            $item->huyen = Commune::where('maxa', $item->maxa)->first()->district->huyen;
        }
        return $data;
    }

    public function exportWeather(Request $request)
    {
        $data = Weather::whereBetween('thoigian', [$request->timeStart, $request->timeEnd])->get();
        if(count($data)>0)
        {
            $fileName = 'Weather_HaNam_from_' . $request->timeStart . "_to_" . $request->timeEnd . '.xlsx';
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
            $writer->save("weather_xlsx/".$fileName);
            return "weather_xlsx/".$fileName;
        }else{
            return 0;
        }
    }

    public function exportFirePoint(Request $request)
    {
        $data = FirePoint::whereBetween('acq_date', [$request->timeStart, $request->timeEnd])->get();
        if(count($data)>0)
        {
            $fileName = 'FirePoint_HaNam_from_' . $request->timeStart . "_to_" . $request->timeEnd . '.xlsx';
            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            $sheet->setCellValue('A1', 'HUYEN');
            $sheet->setCellValue('B1', 'XA');
            $sheet->setCellValue('C1', 'THỜI GIAN');
            $sheet->setCellValue('D1', 'TIEUKHU');
            $sheet->setCellValue('E1', 'KHOANH');
            $sheet->setCellValue('F1', 'LO');
            $sheet->setCellValue('G1', 'LATITUDE');
            $sheet->setCellValue('H1', 'LONGITUDE');
            $sheet->setCellValue('I1', 'ĐỘ SÁNG');
            $sheet->setCellValue('J1', 'SCAN');
            $sheet->setCellValue('K1', 'TRACK');
            $sheet->setCellValue('L1', 'VỆ TINH');
            $sheet->setCellValue('M1', 'ĐỘ TIN CẬY');
            $sheet->setCellValue('N1', 'DAYNIGHT');
            for ($i = 0; $i < count($data); $i++) {
                $huyen = $data[$i]->commune->district->huyen;
                $xa = $data[$i]->commune->xa;
                $tg = $data[$i]->acq_time ." ". $data[$i]->acq_date;
                $tk = $data[$i]->tk;
                $khoanh = $data[$i]->khoanh;
                $lo = $data[$i]->lo;
                $lat = $data[$i]->latitude;
                $lon = $data[$i]->longitude;
                $dosang = $data[$i]->brightness;
                $scan = $data[$i]->scan;
                $track = $data[$i]->track;
                $vetinh = $data[$i]->satellite;
                $dotincay = $data[$i]->confidence;
                $daynight = $data[$i]->daynight;
                $sheet->setCellValue('A' . ($i + 2), $huyen);
                $sheet->setCellValue('B' . ($i + 2), $xa);
                $sheet->setCellValue('C' . ($i + 2), $tg);
                $sheet->setCellValue('D' . ($i + 2), $tk);
                $sheet->setCellValue('E' . ($i + 2), $khoanh);
                $sheet->setCellValue('F' . ($i + 2), $lo);
                $sheet->setCellValue('G' . ($i + 2), $lat);
                $sheet->setCellValue('H' . ($i + 2), $lon);
                $sheet->setCellValue('I' . ($i + 2), $dosang);
                $sheet->setCellValue('J' . ($i + 2), $scan);
                $sheet->setCellValue('K' . ($i + 2), $track);
                $sheet->setCellValue('L' . ($i + 2), $vetinh);
                $sheet->setCellValue('M' . ($i + 2), $dotincay);
                $sheet->setCellValue('N' . ($i + 2), $daynight);
            }
            $writer = new Xlsx($spreadsheet);
            $writer->save("fire_point_xlsx/".$fileName);
            return "fire_point_xlsx/".$fileName;
        }else{
            return 0;
        }
    }
}
