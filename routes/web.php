<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\dataCotizerController;

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

Auth::routes(['verify' => true]);

Route::group(['middleware' => ['auth']], function(){
    Route::resource('user', UserController::class);
});

Route::resource('/cotizer-data', dataCotizerController::class)->only(['store', 'index', 'show', 'update','destroy']);

// Route::group(["prefix" => "/"], function() {
//     Route::get('{any}', function () {
//         return view('home');
//     })->where('any', '.*');
// });

Route::get('{any}', function () {
    return view('home');
})->where('any', '.*');