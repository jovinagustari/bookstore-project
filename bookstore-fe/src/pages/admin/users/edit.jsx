import { useEffect, useState } from "react";
import { showCategory, updateCategory } from "../../../_services/categories";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    _method: "PUT"
  });

  useEffect(() => {
    const fetchData = async () => {
      const [bookData] = await Promise.all([
        showCategory(id)
      ]);
 
      setFormData({
        name: bookData.name || "",
        description: bookData.description || "",
        _method: "PUT"
      });
    };
    setIsLoading(false);

    fetchData();
  }, [id]);


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

      await updateCategory(id, payload);
      navigate("/admin/categories");
    } catch (error) {
      console.error("Error updating category:", error);
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
                  Category name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Book name"
                  required
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
