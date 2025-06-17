import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showBook } from "../../../_services/books";
import { getCategories } from "../../../_services/categories";

export default function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const [bookData, categoriesData] = await Promise.all([
          showBook(id), 
          getCategories()
        ]);
        setBook(bookData),
        setCategories(categoriesData);
      } catch (error) {
        console.error("Gagal memuat data buku:", error);
      }
    };
    fetchBook();
  }, [id]);

  const getCategoryName = (id) => {
    const category = categories.find((category) => category.id === id);
    return category ? category.name : "Unknown category";
  }

  if (!book) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-300 mt-10">
        Memuat detail buku...
      </div>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-screen-xl mx-auto px-4 2xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={book.cover_image}
            alt={book.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{book.title}</h1>
            <p className="text-1xl font-bold text-gray-900 dark:text-white">Genre : {getCategoryName(book.category_id)}</p>
            <p className="text-1xl font-bold text-gray-900 dark:text-white">Publication Year : {book.year}</p>
            <p className="text-1xl font-bold text-gray-900 dark:text-white">Stock : {book.stock}</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">{book.description}</p>
            <p className="text-indigo-700 dark:text-indigo-400 text-2xl font-semibold">
              {book.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
            <button className="mt-4 inline-flex items-center rounded-lg bg-indigo-700 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}