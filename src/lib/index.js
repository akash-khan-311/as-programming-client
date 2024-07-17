import { getRole } from "@/api/auth";
import axios from "axios";

export const imageUpload = async (image) => {
  try {
    const imageFormData = new FormData();
    imageFormData.append("image", image);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=0aceccbcbe08ac8e122b2dac2b11d537`,
      imageFormData
    );
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const getTotalPrice = (cartItems) => {
  if (!cartItems || cartItems.length === 0) return 0;

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price; // Assuming item.price is the price of each item
  });
  return totalPrice;
};

export const getRoleFromDb = async (email) => {
  const role = await getRole(email);
  return role;
};
