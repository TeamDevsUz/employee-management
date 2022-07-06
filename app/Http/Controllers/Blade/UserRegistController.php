<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserRegistration;
use Illuminate\Support\Facades\Hash;
class UserRegistController extends Controller
{
    //
    
    public function user_registration(Request $request)
    {
        $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'phone_num' => ['required'],
            'password' =>['required', 'min:6', 'confirmed']
        ]);

        UserRegistration::create([
            'first_name' => $request->name,
            'last_name' => $request->name,
            'email' => $request->email,
            'phone_num' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    }
    
}
