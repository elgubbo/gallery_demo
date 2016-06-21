<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $table = 'galleries';

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
    public function images()
    {
        return $this->belongsToMany('App\Images', 'gallery_image', 'gallery_id', 'image_id');
    }
}
