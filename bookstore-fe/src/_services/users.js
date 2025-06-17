import API from "../_api";

export const getUsers = async () => {
  const { data } = await API.get("/users");
  return data.data;
};

export const createUser = async (data) => {
  try
  {
    const response = await API.post("/users", data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const showUser = async (id) => {
  try {
    const { data } = await API.get(`/users/${id}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching User:", error);
    throw error;
  }
}

export const updateUser = async (id, data) => {
  try {
    const response = await API.post(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating User:", error);
    throw error;
  }
}

export const deleteUser = async (id) => {
  try {
    await API.delete(`/users/${id}`);
  } catch (error) {
    console.error("Error deleting User:", error);
    throw error;
  }
}