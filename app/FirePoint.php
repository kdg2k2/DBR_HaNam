<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FirePoint extends Model
{
    public $timestamps = false;
    protected $table = 'firepoint';

    public function commune()
    {
        return $this->belongsTo('App\Commune' , 'maxa', 'maxa');
    }
}
