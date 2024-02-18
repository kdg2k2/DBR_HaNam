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

Route::get('/', 'WebController@getBando');
Route::get('/export', 'WebController@getExport');
Route::get('/bando', 'WebController@getBando');
Route::get('/lienhe', 'WebController@getLienhe');

Route::get("/getWeather", "WeatherController@getIndex");
Route::get("/updateDaily", "WeatherController@updateDaily");
Route::get("/sendEmail", "WeatherController@sendEmail");
Route::get("/updateDBR", "WeatherController@updateDBR");
Route::get("/getFirePoints", "WeatherController@getFirePoints");

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