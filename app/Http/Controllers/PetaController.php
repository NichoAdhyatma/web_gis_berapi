<?php

namespace App\Http\Controllers;

use App\Models\Gunung;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PetaController extends Controller
{

    public function index()
    {
        return Inertia::render('Peta/Index', [
            'gunung' => Gunung::all(),
            'wilayah' => DB::table('wilayah-jatim')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'lokasi' => 'required|string|max:255',
            'ketinggian' => 'required',
            'position' => 'required',
            'deskripsi' => 'required',
            'status' => 'required|bool'
        ]);

        Gunung::create($validatedData);

        return redirect()->route("peta.index")->with("message", "Data Berhasil Ditambahkan !");
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
            $path = $request->file('photo')->storeAs('/assets/images', $gunung->id.$request->file('photo')->getClientOriginalName(), 'public');
            if (!is_null($gunung->photo) && $gunung->photo != 'default.png') {
                Storage::disk('public')->delete($gunung->photo);
            }
            $validatedData['photo'] = $path;
        }

        $gunung->update($validatedData);

        return redirect()->route('peta.index')->with('message', 'Gambar Berhasil Ditambahkan');
    }


    public function destroy(string $id)
    {
        Gunung::destroy($id);

        return redirect()->route('peta.index')->with('message', 'Data Berhasil Dihapus');
    }
}
