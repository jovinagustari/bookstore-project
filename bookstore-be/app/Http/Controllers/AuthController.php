<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request) {
        // 1. Setup validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:8',
        ]);

        // 2. Cek validator error
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // 3. Create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        // 4. Cek keberhasilan
        if ($user) {
            return response()->json([
                'success' => true,
                'message' => 'User created successfully',
                'user' => $user,
            ], 201);
        }

        // 5. Cek gagal
        return response()->json([
            'success' => false,
            'message' => 'User creation failed',
        ], 409); // Conflict
    }

    public function login(Request $request) {
        // 1. Setup validator
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // 2. Cek validator error
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // 3. Cek kredensial dari request
        $credentials = $request->only('email', 'password');

        // 4. Cek isFailed
        if (!$token = auth()->guard('api')->attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Email or password is incorrect',
            ], 401); // Unauthorized
        }

        // 5. Cek isSuccess
        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'user' => auth()->guard('api')->user(),
            'token' => $token,
        ], 200); // OK
    }

    public function logout() {
        // try
        try {
            // 1. Invalidate token
            JWTAuth::invalidate(JWTAuth::getToken());

            // 2. Cek isSuccess
            return response()->json([
                'success' => true,
                'message' => 'Logout successful',
            ], 200); // OK

        // catch
        } catch (JWTException $e) {
            // 1. Cek isFailed
            return response()->json([
                'success' => false,
                'message' => 'Logout failed',
            ], 500); // Internal Server Error
        }
    }
}
