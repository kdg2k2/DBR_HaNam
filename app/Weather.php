<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Weather extends Model
{
    public $timestamps = false;
    protected $table = 'weather';

    public function commune()
    {
        return $this->belongsTo('App\Commune' , 'maxa', 'maxa');
    }
}
