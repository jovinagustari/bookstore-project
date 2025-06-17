import { useEffect, useState } from "react";
import { getCategories } from "../../../_services/categories";
import { showBook, updateBook } from "../../../_services/books";
import { useNavigate, useParams } from "react-router-dom";

export default function BookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);

  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    price: 0,
    stock: 0,
    category_id: 0,
    cover_image: null,
    description: "",
    _method: "PUT"
  });

  useEffect(() => {
    const fetchData = async () => {
      const [categoriesData, bookData] = await Promise.all([
        getCategories(),
        showBook(id)
      ]);
 
      setCategories(categoriesData);
      setFormData({
        title: bookData.title || "",
        year: bookData.year || "",
        price: bookData.price || 0,
        stock: bookData.stock || 0,
        category_id: bookData.category_id || 0,
        cover_image: bookData.cover_image || null,
        description: bookData.description || "",
        _method: "PUT"
      });
    };
    setIsLoading(false);

    fetchData();
  }, [id]);

  useEffect(() => {
    if (formData.cover_image) {
      if (typeof formData.cover_image === "string") {
        const fullUrl = `http://localhost:8000/storage/books/${formData.cover_image}`;
        setPreviewImage(fullUrl);
      } else {
        const blobUrl = URL.createObjectURL(formData.cover_image);
        setPreviewImage(blobUrl);
      }
    }
  }, [formData.cover_image]);



  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "cover_image") {
      const file = files[0];

      setFormData({
        ...formData,
        cover_image: file 
      });
      // If a file is selected, create a preview URL
      if (file) {
        setPreviewImage(URL.createObjectURL(file));
      }

    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();

      for (const key in formData) {
        if (key === "cover_image") {
          if (formData.cover_image instanceof File) {
            payload.append("cover_image", formData.cover_image);
          }
        } else {
          payload.append(key, formData[key]);
        }
      }

      await updateBook(id, payload);
      navigate("/admin/books");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  }

   if (isLoading) return <p className="text-white">Loading...</p>;

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Edit Book
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Book Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Book title"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="e.g. 160000"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="stock"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="e.g. 40"
                  required
                />
              </div>

              <div>
                <label
                  for="category_id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Genre
                </label>
                <select
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                >
                  <option value="">--- Select Category ---</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              <div className="w-full">
                <label
                  for="cover_image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Book Cover
                </label>
                <input
                  type="file"
                  name="cover_image"
                  id="cover_image"
                  accept="image/*"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />

                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="mt-2 max-h-48 rounded shadow-md border"
                  />
                )}
              </div>

              <div>
                <label
                  for="year"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Publication Year
                </label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="e.g. 1969"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Write book description here..."
                >
                </textarea>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
