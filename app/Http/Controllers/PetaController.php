<?php

namespace App\Http\Controllers;

use App\Models\Gunung;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PetaController extends Controller
{

    public function index()
    {
        return Inertia::render('Peta/Index', [
            'gunung' => Gunung::paginate(10),
            'wilayah' => DB::table('wilayah-jatim')->get(),
        ]);
    }

    public function seeder()
    {
        Artisan::call('db:seed');
        return redirect()->route('peta.index')->with('message', "Database Seeder Called !");
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'lokasi' => 'required|string|max:255',
            'ketinggian' => 'required',
            'position' => 'required',
            'deskripsi' => 'required',
            'status' => 'required|bool',
            'photo' => 'nullable',
            'krb' => 'nullable',
        ]);

        if ($request->file('photo')) {
            $path = $request->file('photo')->storeAs('/assets/images', $request->name . $request->file('photo')->getClientOriginalName(), 'public');

            $validatedData['photo'] = $path;
        } else {
            $validatedData['photo'] = "default.png";
        }

        if ($request->file('krb')) {
            $path = $request->file('krb')->storeAs('/assets/images', $request->name . $request->file('krb')->getClientOriginalName(), 'public');

            $validatedData['krb'] = $path;
        } else {
            $validatedData['krb'] = "default.png";
        }

        Gunung::create($validatedData);

        return session()->flash("message", "Data Berhasil Ditambahkan !");
    }

    public function showImage($id)
    {
        $image = Gunung::find($id);
        return Inertia::render('Peta/ImagePreview', [
            'image' => $image->krb
        ]);
    }

    public function update(Request $request, string $id)
    {
        $gunung = Gunung::find($id);
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'lokasi' => 'required|string|max:255',
            'ketinggian' => 'required',
            'position' => 'required',
            'deskripsi' => 'required',
            'status' => 'required|bool',
            'photo' => 'nullable',
            'krb' => 'nullable',
        ]);

        if ($request->file('photo')) {
            $path = $request->file('photo')->storeAs('/assets/images', $id . $request->file('photo')->getClientOriginalName(), 'public');
            if (!is_null($gunung->photo) && $gunung->photo != 'default.png' && $path != $gunung->photo) {
                Storage::disk('public')->delete($gunung->photo);
            }

            $validatedData['photo'] = $path;
        } else {
            $validatedData['photo'] = $gunung->photo;
        }

        if ($request->file('krb')) {
            $path = $request->file('krb')->storeAs('/assets/images', $id . $request->file('krb')->getClientOriginalName(), 'public');
            if (!is_null($gunung->krb) && $gunung->krb != 'default.png' && $path != $gunung->krb) {
                Storage::disk('public')->delete($gunung->krb);
            }

            $validatedData['krb'] = $path;
        } else {
            $validatedData['krb'] = $gunung->krb;
        }

        $gunung->update($validatedData);

        return session()->flash('message', 'Data Berhasil Diubah');
    }


    public function destroy(string $id)
    {
        $gunung = Gunung::find($id);

        if (!is_null($gunung->krb) && $gunung->krb != 'default.png') {
            Storage::disk('public')->delete($gunung->krb);
        }

        if (!is_null($gunung->photo) && $gunung->photo != 'default.png') {
            Storage::disk('public')->delete($gunung->photo);
        }

        Gunung::destroy($id);

        return session()->flash('message', 'Data Berhasil Dihapus');
    }
}
