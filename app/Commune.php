<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Commune extends Model
{
    public $timestamps = false;
    protected $table = 'commune';

    public function district()
    {
        return $this->belongsTo('App\District' , 'mahuyen', 'mahuyen');
    }

    public function weather()
    {
        return $this->hasMany('App\Weather' , 'maxa', 'id');
    }

    public function receiveEmail()
    {
        return $this->hasMany('App\receiveEmail' , 'maxa', 'id');
    }
}
