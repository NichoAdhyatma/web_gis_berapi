<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MapPageController extends Controller
{
    public function index() {
        return Inertia::render('Peta/Index');
    }
}
