import API from "../_api";

export const login = async (credentials) => {
  try {
    const { data } = await API.post("/login", credentials);
    // Simpan token ke localStorage
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.error("Login gagal:", error.response?.data || error.message);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const { data } = await API.post("/register", userData);
    return data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
