<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    public $timestamps = false;
    protected $table = 'district';

    public function commune()
    {
        return $this->hasMany('App\Commune' , 'mahuyen', 'mahuyen');
    }
}
