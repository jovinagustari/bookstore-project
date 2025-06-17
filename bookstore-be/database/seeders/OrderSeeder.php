<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Order::create([
            'order_number' => 'ORD001',
            'customer_id' => 2,
            'book_id' => 1,
            'total_amount' => 179000.00,
        ]);
        Order::create([
            'order_number' => 'ORD002',
            'customer_id' => 2,
            'book_id' => 2,
            'total_amount' => 210000.00,
        ]);
    }
}
