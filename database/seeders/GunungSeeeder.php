<?php

namespace Database\Seeders;

use App\Models\Gunung;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GunungSeeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Gunung::create([
            'name' => "Gunung Bromo",
            'lokasi' => "Kabupaten Probolinggo, Jawa Timur, Indonesia.",
            'deskripsi' => 'Gunung Bromo atau dalam bahasa Tengger dieja "Brama", juga disebut Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia. Gunung ini memiliki ketinggian 2.329 meter di atas permukaan laut dan berada dalam empat wilayah kabupaten, yakni Kabupaten Probolinggo, Kabupaten Pasuruan, Kabupaten Lumajang, dan Kabupaten Malang. ',
            'position' => '{ "lat": -7.942, "lng": 112.95 }',
            'ketinggian' => '2329',
            'status' => true,
        ]);
    }
}
