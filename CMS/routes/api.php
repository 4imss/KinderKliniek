<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// API routes
Route::get('/poli', [App\Http\Controllers\ClinicController::class, 'api'])->name('placeholder');
Route::get('/sub', [App\Http\Controllers\SubController::class, 'api'])->name('placeholder');
Route::get('/smoelenboek', [App\Http\Controllers\FacebookController::class, 'api'])->name('placeholder');
Route::get('/wegwijzer', [App\Http\Controllers\MapController::class, 'api'])->name('placeholder');


Route::middleware(['auth'])->group(function () {

});
