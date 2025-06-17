-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Jun 2025 pada 06.07
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `cover_image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `books`
--

INSERT INTO `books` (`id`, `title`, `year`, `cover_image`, `description`, `price`, `stock`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'The Hobbit', 1937, 'path/to/hobbit_cover.jpg', 'A fantasy novel about the adventures of a hobbit named Bilbo Baggins.', 100000, 50, 5, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(2, '1984', 1949, 'path/to/1984_cover.jpg', 'A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.', 120000, 30, 2, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(3, 'To Kill a Mockingbird', 1960, 'path/to/mockingbird_cover.jpg', 'A novel that deals with serious issues like racial inequality and moral growth through the eyes of a child.', 150000, 20, 11, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(4, 'The Great Gatsby', 1925, 'path/to/gatsby_cover.jpg', 'A critique of the American Dream, set in the Jazz Age, focusing on themes of wealth, love, and social change.', 130000, 25, 7, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(5, 'Jane Eyre', 1847, 'path/to/jane_eyre_cover.jpg', 'A novel that follows the life of an orphaned girl named Jane Eyre as she overcomes hardships to find love and independence.', 120000, 30, 4, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(6, 'The Martian', 2011, 'path/to/martian_cover.jpg', 'A science fiction novel about an astronaut stranded on Mars and his struggle to survive.', 110000, 40, 1, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(7, 'Fahrenheit 451', 1953, 'path/to/fahrenheit_cover.jpg', 'A dystopian novel that presents a future where books are banned and \"firemen\" burn any that are found.', 160000, 10, 2, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(8, 'Pride and Prejudice', 1813, 'path/to/pride_prejudice_cover.jpg', 'A romantic novel that critiques the British landed gentry at the end of the 18th century.', 170000, 35, 4, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(9, 'The Alchemist', 1988, 'path/to/alchemist_cover.jpg', 'A philosophical novel that follows a shepherd named Santiago on his journey to discover his personal legend.', 180000, 45, 3, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(10, 'A Brief History of Time', 1988, 'path/to/brief_history_cover.jpg', 'A popular-science book that explains complex concepts of cosmology in an accessible way.', 190000, 20, 13, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(11, 'Harry Potter and the Sorcerer\'s Stone', 1997, 'path/to/harry_potter_cover.jpg', 'A young boy discovers he is a wizard on his 11th birthday and attends a magical school.', 250000, 100, 5, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(12, 'Harry Potter and the Chamber of Secrets', 1998, 'path/to/harry_potter_chamber_cover.jpg', 'The second book in the Harry Potter series, where Harry returns to Hogwarts and faces new challenges.', 260000, 90, 5, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(13, 'The Lord of the Rings: The Fellowship of the Ring', 1954, 'path/to/lotr_fellowship_cover.jpg', 'The first part of J.R.R. Tolkien\'s epic fantasy trilogy, following Frodo Baggins on his quest to destroy the One Ring.', 220000, 50, 5, '2025-06-16 20:59:19', '2025-06-16 20:59:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Science Fiction', 'Explores futuristic concepts, advanced technology, space exploration, and often includes elements of time travel.', '2025-06-16 20:59:18', '2025-06-16 20:59:18'),
(2, 'Dystopian', 'Set in a society characterized by oppression, totalitarianism, or environmental disaster, often exploring themes of survival and resistance.', '2025-06-16 20:59:18', '2025-06-16 20:59:18'),
(3, 'Adventure', 'Focuses on exciting journeys and exploration, often featuring a hero who faces challenges and discovers new worlds.', '2025-06-16 20:59:18', '2025-06-16 20:59:18'),
(4, 'Romance', 'Centers on love and emotional connections between characters, often with heartfelt or dramatic moments.', '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(5, 'Fantasy', 'Set in imaginative worlds with magic, mythical beings, and extraordinary adventures beyond reality.', '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(6, 'Horror', 'Aims to evoke fear, dread, and suspense through supernatural elements, psychological tension, or gruesome imagery.', '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(7, 'Classic', 'Timeless literature that has stood the test of time, often exploring universal themes and human experiences.', '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(8, 'Biography', 'A detailed account of a person\'s life, often highlighting their achievements, struggles, and impact on society.', '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(9, 'Self-Help', 'Provides guidance and strategies for personal development, mental well-being, and achieving life goals.', '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(10, 'History', 'Explores past events, societies, and cultures, often providing insights into human behavior and societal evolution.', '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(11, 'Coming-of-Age', 'Focuses on the growth and development of a protagonist, often dealing with themes of identity, relationships, and self-discovery.', '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(12, 'Philosophy', 'Explores fundamental questions about existence, knowledge, values, and the nature of reality.', '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(13, 'Science', 'Explains scientific concepts, discoveries, and advancements, often making complex topics accessible to the general public.', '2025-06-16 20:59:19', '2025-06-16 20:59:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_06_17_031813_create_personal_access_tokens_table', 1),
(5, '2025_06_17_033100_create_categories_table', 2),
(6, '2025_06_17_033221_create_books_table', 3),
(7, '2025_06_17_033426_create_orders_table', 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_number` varchar(255) NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `book_id` bigint(20) UNSIGNED NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `order_number`, `customer_id`, `book_id`, `total_amount`, `created_at`, `updated_at`) VALUES
(1, 'ORD001', 2, 1, 179000.00, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(2, 'ORD002', 2, 2, 210000.00, '2025-06-16 20:59:19', '2025-06-16 20:59:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('customer','admin') NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin 1', 'admin@example.com', NULL, '$2y$12$TTZdDHFAG1.pH0Hnt6WNOe0hggu9w77sOmiMfP623Sm.UtRmOn//y', 'admin', NULL, '2025-06-16 20:59:19', '2025-06-16 20:59:19'),
(2, 'Customer 1', 'customer@example.com', NULL, '$2y$12$myRt1OEpiTNUFVhkjvTgYuiz.uNl.dn9MMQi9/hrZsBlYm46vQ1q.', 'customer', NULL, '2025-06-16 20:59:19', '2025-06-16 20:59:19');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_category_id_foreign` (`category_id`);

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indeks untuk tabel `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_customer_id_foreign` (`customer_id`),
  ADD KEY `orders_book_id_foreign` (`book_id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
