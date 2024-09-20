<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

Route::prefix('auth')->controller(Controllers\AuthController::class)->group(function () {
    Route::get('/login', 'login')->name('login');
    Route::post('/login', 'loginPost');
    Route::post('/logout', 'logout')->name('logout');
});

Route::middleware(['auth'])->group(function() {
    Route::prefix('dashboard')->controller(Controllers\DashboardController::class)->group(function() {
        Route::get('/', 'index')->name('dashboard');
    });
});

Route::get('/profile-settings', function() {
    return inertia('ProfileSetting');
});
