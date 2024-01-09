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

    public function getFirePoints(){
        $data = FirePoint::all();

        foreach($data as $item){
            $item->xa = Commune::where('maxa', $item->maxa)->first()->xa;
            $item->huyen = Commune::where('maxa', $item->maxa)->first()->district->huyen;
        }

        return response()->json([
            'data' => $data,
        ]);
    }
}
