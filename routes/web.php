<?php

use App\Http\Controllers\PetaController;
use App\Http\Controllers\ProfileController;
use App\Models\Gunung;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('welcome');

Route::get("/seed", [PetaController::class, 'seeder'])->name('seeder');

Route::get("/image-preview/{id}", [PetaController::class, 'showImage'])->name('image');

Route::get('/peta-berapi', function () {
    $gunung = Gunung::all();

    return Inertia::render('Peta/Main', [
        'gunung' => $gunung
    ]);
})->name('peta');

Route::resource('/peta', PetaController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
