import API from "../_api";

export const getCategories = async () => {
  const { data } = await API.get("/categories");
  return data.data;
};

export const createCategory = async (data) => {
  try
  {
    const response = await API.post("/categories", data);
    return response.data;
  } catch (error) {
    console.error("Error creating genre:", error);
    throw error;
  }
};

export const showCategory = async (id) => {
  try {
    const { data } = await API.get(`/categories/${id}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
}

export const updateCategory = async (id, data) => {
  try {
    const response = await API.post(`/categories/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
}

export const deleteCategory = async (id) => {
  try {
    await API.delete(`/categories/${id}`);
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
}