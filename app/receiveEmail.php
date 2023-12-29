<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class receiveEmail extends Model
{
    public $timestamps = false;
    protected $table = 'receive_email';

    public function commune()
    {
        return $this->belongsTo('App\Commune' , 'maxa', 'maxa');
    }
}
