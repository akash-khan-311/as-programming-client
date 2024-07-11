import { getRole } from "@/api/auth";
import axios from "axios";

export const imageUpload = async (image) => {
  const imageFormData = new FormData();
  imageFormData.append("image", image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_BB_API_KEY}`,
    imageFormData
  );
  return data;
};

export const getRoleFromDb = async (email) => {
  const role = await getRole(email);
  return role;
};
