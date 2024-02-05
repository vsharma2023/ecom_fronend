import axios from "axios";
import { SERVER_URL } from "../utils/const";

export const fetchUsers = async (offset, limit) => {
  try {
    const response = await axios.get(
      `${SERVER_URL}/users?offset=${offset}&limit=${limit}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error retrieving user info", error);
  }
};
