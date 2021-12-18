<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('home');
})->middleware('auth');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

// routes for /sub
Route::get('/sub', [App\Http\Controllers\SubController::class, 'index'])->name('sub');
Route::post('/sub', [App\Http\Controllers\SubController::class, 'store'])->name('sub');
Route::get('/sub/create', [App\Http\Controllers\SubController::class, 'create'])->name('sub');
Route::get('/sub/{sub}', [App\Http\Controllers\SubController::class, 'show'])->name('sub');
Route::get('/sub/{sub}/edit', [App\Http\Controllers\SubController::class, 'edit'])->name('sub');
Route::patch('/sub/{sub}', [App\Http\Controllers\SubController::class, 'update'])->name('sub');
Route::delete('/sub/{sub}', [App\Http\Controllers\SubController::class, 'destroy'])->name('sub');


// routes for /poli
Route::get('/poli', [App\Http\Controllers\ClinicController::class, 'index'])->name('clinic');
Route::post('/poli', [App\Http\Controllers\ClinicController::class, 'store'])->name('clinic');
Route::get('/poli/create', [App\Http\Controllers\ClinicController::class, 'create'])->name('clinic');
Route::get('/poli/{clinic}', [App\Http\Controllers\ClinicController::class, 'show'])->name('clinic');
Route::get('/poli/{clinic}/edit', [App\Http\Controllers\ClinicController::class, 'edit'])->name('clinic');
Route::patch('/poli/{clinic}', [App\Http\Controllers\ClinicController::class, 'update'])->name('clinic');
Route::delete('/poli/{clinic}', [App\Http\Controllers\ClinicController::class, 'destroy'])->name('clinic');

// routes for /smoelenboek
Route::get('/smoelenboek', [App\Http\Controllers\FacebookController::class, 'index'])->name('facebook');
Route::post('/smoelenboek', [App\Http\Controllers\FacebookController::class, 'store'])->name('facebook');
Route::get('/smoelenboek/create', [App\Http\Controllers\FacebookController::class, 'create'])->name('facebook');
Route::get('/smoelenboek/{facebook}', [App\Http\Controllers\FacebookController::class, 'show'])->name('facebook');
Route::get('/smoelenboek/{facebook}/edit', [App\Http\Controllers\FacebookController::class, 'edit'])->name('facebook');
Route::patch('/smoelenboek/{facebook}', [App\Http\Controllers\FacebookController::class, 'update'])->name('facebook');
Route::delete('/smoelenboek/{facebook}', [App\Http\Controllers\FacebookController::class, 'destroy'])->name('facebook');

// routes for /wegwijzer
Route::get('/wegwijzer', [App\Http\Controllers\MapController::class, 'index'])->name('map');
Route::post('/wegwijzer', [App\Http\Controllers\MapController::class, 'store'])->name('map');
Route::get('/wegwijzer/create', [App\Http\Controllers\MapController::class, 'create'])->name('map');
Route::get('/wegwijzer/{map}', [App\Http\Controllers\MapController::class, 'show'])->name('map');
Route::get('/wegwijzer/{map}/edit', [App\Http\Controllers\MapController::class, 'edit'])->name('map');
Route::patch('/wegwijzer/{map}', [App\Http\Controllers\MapController::class, 'update'])->name('map');
Route::delete('/wegwijzer/{map}', [App\Http\Controllers\MapController::class, 'destroy'])->name('map');



Route::get('/informatie', [App\Http\Controllers\InformatieController::class, 'index'])->name('information');
Route::get('/games', [App\Http\Controllers\GamesController::class, 'index'])->name('games');
Route::get('/muziekids', [App\Http\Controllers\MuziekidsController::class, 'index'])->name('muziekids');

