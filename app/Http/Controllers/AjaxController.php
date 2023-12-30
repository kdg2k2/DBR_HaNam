<?php

namespace App\Http\Controllers;

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
}
