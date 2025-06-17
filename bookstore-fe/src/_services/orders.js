import API from "../_api";

export const getOrders = async () => {
  const { data } = await API.get("/orders");
  return data.data;
};

export const createOrder = async (data) => {
  try
  {
    const response = await API.post("/orders", data);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const showOrder = async (id) => {
  try {
    const { data } = await API.get(`/orders/${id}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
}

export const updateOrder = async (id, data) => {
  try {
    const response = await API.post(`/orders/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
}

export const deleteOrder = async (id) => {
  try {
    await API.delete(`/orders/${id}`);
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
}