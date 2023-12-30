<?php

namespace App\Http\Controllers;

use App\dbr;
use Illuminate\Http\Request;

class getRegion extends Controller
{
    public function getDistrict($matinh)
    {
        $data = dbr::select('mahuyen', 'huyen')->where('matinh', $matinh)->distinct()->get();
        $res = "<option disabled selected value=''>[Chọn Huyện]</option>";
        foreach ($data as $dt)
        {
            $res .= "<option value='".$dt->mahuyen."'>".$dt->mahuyen . " - " .$dt->huyen."</option>";
        }
        echo $res;
    }

    public function getCommune($mahuyen)
    {
        $data = dbr::select('maxa', 'xa')->where('mahuyen', $mahuyen)->distinct()->get();
        $res = "<option disabled selected value=''>[Chọn Xã]</option>";
        foreach ($data as $dt)
        {
            $res .= "<option value='".$dt->maxa."'>".$dt->maxa . " - " .$dt->xa."</option>";
        }
        echo $res;
    }
}
