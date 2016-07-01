<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function images()
    {
        return $this->belongsToMany('App\Image', 'image_tag', 'tag_id', 'image_id');
    }
}
