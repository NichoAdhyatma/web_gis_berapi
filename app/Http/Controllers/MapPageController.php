<?php

namespace App\Http\Controllers;

use App\Models\Gunung;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MapPageController extends Controller
{
    public function index()
    {
        $gunung = Gunung::all();

        return Inertia::render('Peta/Index', [
            'gunung' => $gunung
        ]);
    }
}
