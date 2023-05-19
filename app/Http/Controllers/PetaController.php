<?php

namespace App\Http\Controllers;

use App\Models\Gunung;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PetaController extends Controller
{

    public function index()
    {
        return Inertia::render('Peta/Index', [
            'gunung' => Gunung::all()
        ]);
    }


    public function create()
    {
    }


    public function store(Request $request)
    {
        //
    }


    public function show(string $id)
    {
        //
    }


    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }


    public function destroy(string $id)
    {
        //
    }
}
