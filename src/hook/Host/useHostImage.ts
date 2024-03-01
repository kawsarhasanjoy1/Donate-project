/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const IMAGE_KEY = "d56b883b3df167c3f5c921f82fd62f59";

const useHostImage = async (image: any) => {
  const IMAGE_URL = `https://api.imgbb.com/1/upload?key=${IMAGE_KEY}`;
  const formData = new FormData();
  formData.append("image", image);
  const response = await axios.post(IMAGE_URL, formData);
  return response.data.data;
};

export default useHostImage;
