<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AddNewPostController extends Controller
{
    //
    public function index(){
        return view('addNewPost');
    }
}
