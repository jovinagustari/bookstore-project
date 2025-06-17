<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index() {
        $users = User::all();

        // Check if the users collection is empty
        if ($users->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No users found',
                'data' => []
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'users retrieved successfully',
            'data' => $users
        ], 200);
    }

    public function store(Request $request) {
        // Validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:1000',
            'password' => 'required|string|max:1000'
        ]);

        // Check validator errors
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        // Insert data User
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password
        ]);

        // Response
        return response()->json([
            'success' => true,
            'message' => 'User created successfully',
            'data' => $user
        ], 201);
    }

    public function show(string $id) {
        $user = User::find($id);

        // Check if User exists
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found',
                'data' => []
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Successfully retrieved User by ID',
            'data' => $user
        ], 200);
    }

    public function update(Request $request, string $id) {
        // Mencari data User
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found',
                'data' => []
            ], 404);
        }

        // Validator
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|max:1000',
            'password' => 'sometimes|required|string|max:1000'
        ]);

        // Check validator errors
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        // Siapkan data untuk diupdate
        $data = [];
        if ($request->has('name')) {
            $data['name'] = $request->input('name');
        }
        if ($request->has('email')) {
            $data['email'] = $request->input('email');
        }
        if ($request->has('password')) {
            $data['password'] = $request->input('password');
        }

        // Update User
        $user->update($data);

        return response()->json([
            'success' => true,
            'message' => 'User updated successfully',
            'data' => $user
        ], 200);
    }

    public function destroy(string $id) {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found',
                'data' => null
            ], 404);
        }

        $user->delete();

        return response()->json([
            'success' => true,
            'message' => 'User deleted successfully',
            'data' => null
        ], 200);
    }
}
