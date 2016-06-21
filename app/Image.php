<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function galleries()
    {
        return $this->belongsToMany('App\Gallery', 'gallery_image', 'image_id', 'gallery_id');
    }
}
