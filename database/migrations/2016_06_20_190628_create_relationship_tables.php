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
            $table->engine = 'InnoDB';

            $table->integer('gallery_id')->unsigned();
            $table->integer('image_id')->unsigned();
            $table->timestamps();
        });
        Schema::table('gallery_image', function (Blueprint $table) {
            $table->foreign('gallery_id')->references('id')->on('galleries')->onDelete('cascade');
            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
        });
        Schema::create('image_tag', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->integer('tag_id')->unsigned();
            $table->integer('image_id')->unsigned();
            $table->timestamps();
        });
        Schema::table('image_tag', function (Blueprint $table) {
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('gallery_image', function ($table) {
            $table->dropForeign('gallery_image_gallery_id_foreign');
            $table->dropForeign('gallery_image_image_id_foreign');
        });
        Schema::table('image_tag', function ($table) {
            $table->dropForeign('image_tag_image_id_foreign');
            $table->dropForeign('image_tag_tag_id_foreign');
        });
        Schema::drop('gallery_image');
        Schema::drop('image_tag');
    }
}
