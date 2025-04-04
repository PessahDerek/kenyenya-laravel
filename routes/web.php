<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::group([], function () {
    Route::get('/', function () {
        return Inertia::render('index');
    })->name('home');

    Route::get('/about', function () {
        return Inertia::render('about');
    });
    Route::get('/governance', function () {
        return Inertia::render('governance');
    });
    Route::get("/tenders", function () {
        return Inertia::render('tenders');
    });
});

Route::prefix('/admin')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/about', function () {
        return Inertia::render('admin/adminAbout');
    })->name('admin-about');
    Route::get('/tenders', function () {
        return Inertia::render('admin/adminTenders');
    })->name('admin-tenders');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
