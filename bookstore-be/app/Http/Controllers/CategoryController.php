<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index() {
        $categories = Category::all();

        // Check if the categories collection is empty
        if ($categories->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No categories found',
                'data' => []
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Categories retrieved successfully',
            'data' => $categories
        ], 200);
    }

    public function store(Request $request) {
        // Validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000'
        ]);

        // Check validator errors
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        // Insert data category
        $category = Category::create([
            'name' => $request->name,
            'description' => $request->description
        ]);

        // Response
        return response()->json([
            'success' => true,
            'message' => 'Category created successfully',
            'data' => $category
        ], 201);
    }

    public function show(string $id) {
        $category = Category::find($id);

        // Check if category exists
        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Category not found',
                'data' => []
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Successfully retrieved category by ID',
            'data' => $category
        ], 200);
    }

    public function update(Request $request, string $id) {
        // Mencari data category
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Category not found',
                'data' => []
            ], 404);
        }

        // Validator
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string|max:1000'
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
        if ($request->has('description')) {
            $data['description'] = $request->input('description');
        }

        // Update category
        $category->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Category updated successfully',
            'data' => $category
        ], 200);
    }

    public function destroy(string $id) {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Category not found',
                'data' => null
            ], 404);
        }

        $category->delete();

        return response()->json([
            'success' => true,
            'message' => 'Category deleted successfully',
            'data' => null
        ], 200);
    }
}
