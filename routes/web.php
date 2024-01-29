<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/', 'WebController@getHome');
Route::get('/export', 'WebController@getExport');
Route::get('/bando', 'WebController@getBando');
Route::get('/lienhe', 'WebController@getLienhe');

Route::get("/getWeather", "WeatherController@getIndex");
Route::get("/updateDaily", "WeatherController@updateDaily");
Route::get("/sendEmail", "WeatherController@sendEmail");
Route::get("/updateDBR", "WeatherController@updateDBR");

Route::get("/district/{matinh}", "getRegion@getDistrict");
Route::get("/commune/{mahuyen}", "getRegion@getCommune");

//ajax
Route::group(['prefix' => 'ajax'], function () {
    Route::get('/getWeather/{maxa}', 'AjaxController@getWeatherCommune');
    Route::get('/getFirePoints', 'AjaxController@getFirePoints');
    Route::get('/getHistoryFirePoints', 'AjaxController@getHistoryFirePoints');

    Route::get('/exportWeather', 'AjaxController@exportWeather');
    Route::get('/exportFirePoint', 'AjaxController@exportFirePoint');
});

//admin
Route::group(['prefix' => 'admin'], function(){
    Route::get('/me/edit', 'UserController@editUser');

    Route::group(['prefix' => 'shp'], function(){
        Route::get('/', 'ShapefileController@getDanhSach');
        Route::get('/create', 'ShapefileController@getUpload');
        Route::get('/bando/{id}', 'ShapefileController@getBando');
        Route::post('/store', 'ShapefileController@postUpload');
        Route::get('/use/{id}', 'ShapefileController@getSuDung');
        Route::get('/download/{id}', 'ShapefileController@getDownload');
        Route::post('/destroy/{id}', 'ShapefileController@getXoa');
    });

});