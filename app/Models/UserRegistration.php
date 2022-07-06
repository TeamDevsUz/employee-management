<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRegistration extends Model
{
    use HasFactory;
    
    public $table = 'users_registration';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone_num',
        'password'
    ];
}
