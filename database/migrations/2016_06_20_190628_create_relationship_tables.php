<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRelationshipTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gallery_image', function (Blueprint $table) {
            $table->integer('gallery_id');
            $table->integer('image_id');

            $table->foreign('gallery_id')->references('id')->on('galleries')->onDelete('cascade');
            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');

            $table->timestamps();
        });
        Schema::create('image_tag', function (Blueprint $table) {
            $table->integer('tag_id');
            $table->integer('image_id');

            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(Blueprint $table)
    {
        $table->dropForeign('gallery_image_gallery_id_foreign');
        $table->dropForeign('gallery_image_image_id_foreign');
        $table->dropForeign('image_tag_image_id_foreign');
        $table->dropForeign('image_tag_tag_id_foreign');
        Schema::drop('gallery_image');
        Schema::drop('image_tag');
    }
}
