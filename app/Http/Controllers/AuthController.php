<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login() {
        return Inertia::render("Auth/Login");
    }

    public function loginPost(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (auth()->attempt($request->only('email', 'password'))) {
            return redirect()->route('dashboard');
        }

        return redirect()->back()->with('error', 'Invalid email or password');
    }

    public function logout() {
        auth()->logout();
        
        return redirect()->route('login');
    }
}
