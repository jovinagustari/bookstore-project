import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../_services/orders";
import { getBooks } from "../../../_services/books";

export default function UserCreate() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    order_number: "",
    customer_id: 0,
    book_id: 0,
    total_amount: 0
  });

  const navigate = useNavigate();

  useEffect(() => {
      const fetchBooks = async () => {
        const [booksData] = await Promise.all([
          getBooks(),
        ]);
  
        setBooks(booksData);
      }
      fetchBooks();
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      for (const key in formData) {
        payload.append(key, formData[key]);
      }

      await createOrder(payload);
      navigate("/admin/orders");
    } catch (error) {
      console.error("Error adding order:", error);
    }
  }
  
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add New Order
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  for="total_amount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Order Number
                </label>
                <input
                  type="text"
                  name="order_number"
                  id="order_number"
                  value={formData.order_number}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="e.g. J.K. Rowling"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  for="customer_id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Birth Year
                </label>
                <input
                  type="text"
                  name="customer_id"
                  id="customer_id"
                  value={formData.birth_year}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="e.g. 1920"
                  required
                />
              </div>

              <div>
                <label
                  for="book_id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Book ID
                </label>
                <select
                  id="book_id"
                  name="book_id"
                  value={formData.book_id}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                >
                  <option value="">--- Select Book ID ---</option>
                  {books.map((book) => (
                    <option key={book.id} value={book.id}>{book.title}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  for="total_amount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Total Amount
                </label>
                <input
                  type="number"
                  name="total_amount"
                  id="total_amount"
                  value={formData.total_amount}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="e.g. 300000"
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Add Order
              </button>
              <button
                type="reset"
                className="text-gray-600 inline-flex items-center hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-900"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
