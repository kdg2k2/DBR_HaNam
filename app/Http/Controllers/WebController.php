<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function getHome(){
        return view('pages.home.home');
    }

    public function getExport(){
        return view('pages.export.export');
    }

    public function getBando(){
        return view('pages.bando.bando');
    }

    // public function getLienhe(){
    //     return view('pages.lienhe.lienhe');
    // }
}
