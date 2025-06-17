<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Authentication routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

// Public routes for books, categories, and orders
Route::apiResource('/books', BookController::class)->only(['index', 'show']);
Route::apiResource('/categories', CategoryController::class)->only(['index', 'show']);



// Protected routes for creating, updating, and deleting resources
Route::middleware(['auth:api'])->group(function () {
    Route::apiResource('/orders', OrderController::class)->only(['store', 'update', 'show']);

    Route::middleware('role:admin')->group(function () {


        Route::apiResource('/orders', OrderController::class)->only(['index', 'destroy']);
    });
});
Route::apiResource('/books', BookController::class)->only(['store', 'update', 'destroy']);
Route::apiResource('/categories', CategoryController::class)->only(['store', 'update', 'destroy']);
