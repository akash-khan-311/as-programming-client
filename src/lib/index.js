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
