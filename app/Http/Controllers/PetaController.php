<?php

namespace App\Http\Controllers;

use App\Models\Gunung;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
        $gunung = Gunung::find($id);
        $validatedData = $request->validate([
            "photo" => "required",
        ]);

        if ($request->file('photo')) {
            $path = $request->file('photo')->storeAs('/assets/images', $request->file('photo')->getClientOriginalName(), 'public');
            if (!is_null($gunung->photo)) {
                Storage::disk('public')->delete($gunung->photo);
            }
            $validatedData['photo'] = $path;
        }

        $gunung->update($validatedData);

        return redirect()->route('peta.index')->with('message', 'Gambar berhasil ditambahkan');
    }


    public function destroy(string $id)
    {
        //
    }
}
