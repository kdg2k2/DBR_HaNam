<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hotspot extends Model
{
    public $timestamps = false;
    protected $table = 'hotspot';

    public function commune()
    {
        return $this->belongsTo('App\Commune' , 'maxa', 'maxa');
    }
}
