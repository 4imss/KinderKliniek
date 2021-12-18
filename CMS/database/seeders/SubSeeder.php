<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subs')->insert([
            'subTitle' => 'Astma',
            'subDescription' => 'Astma is een chronische ontsteking van de luchtwegen.',
        ]);
    }
}
