<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Carlos', 
            'lastname' => 'Changûendo', 
            'email' => 'admin@kapitalbank.com.co',
            'document_type' => 'CC',
            'document_number' => '1122334455',
            'phone' => '1234567899',
            'email_verified_at' => Carbon::today()->toDateString(),
            'password' => bcrypt('123456')
        ]);

        $user->assignRole('admin');
    }
}
