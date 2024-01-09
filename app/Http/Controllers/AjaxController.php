<?php

namespace App\Http\Controllers;

use App\Commune;
use App\FirePoint;
use App\Weather;
use Illuminate\Http\Request;

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
}
