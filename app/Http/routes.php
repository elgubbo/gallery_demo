<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {

    Route::get('/', 'AngularController@serveApp');

    Route::get('/unsupported-browser', 'AngularController@unsupported');

});

//public API routes
$api->group(['middleware' => ['api']], function ($api) {

    // Authentication Routes...
    $api->post('auth/login', 'Auth\AuthController@login');
    $api->post('auth/register', 'Auth\AuthController@register');
    // Password Reset Routes...
    $api->post('auth/password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
    $api->get('auth/password/verify', 'Auth\PasswordResetController@verify');
    $api->post('auth/password/reset', 'Auth\PasswordResetController@reset');


});

//protected API routes with JWT (must be logged in)
//these routes will refresh the token, so the user can be logged in up to two weeks (see config/jwt.php)
$api->group(['middleware' => ['api', 'api.auth', 'jwt.refresh']], function ($api) {
    $api->get('auth/profile', 'Auth\AuthController@profile');
    //Image routes
    $api->post('images', 'ImageController@create');
    $api->put('images/{id}', 'ImageController@update');
    $api->post('images/{id}', 'ImageController@update');
    $api->get('images', 'ImageController@listImages');
    $api->get('images/{id}', 'ImageController@getImageById');
    $api->get('images/{id}/file', 'ImageController@getImageFile');
    $api->delete('images/{id}', 'ImageController@deleteImage');

    //Tag routes
    $api->get('tags', 'TagController@listTags');

});
