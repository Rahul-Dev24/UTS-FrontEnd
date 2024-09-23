import axios from "axios";

const url = "https://uts-dev.onrender.com/api/auth/v1";

export async function getStation() {
  try {
    const response = await axios?.get(`${url}/getStation`);
    // console.log(response.data);
    if (response?.data) return response?.data;
  } catch (error) {
    throw new Error(error);
  }
}
