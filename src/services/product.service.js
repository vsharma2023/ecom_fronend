
import axios from "axios";
import {SERVER_URL} from '../utils/const'
//import * as url from '../utils/const'
//if i import the total const.js file and then want to use any one variable then will i do it by filname.server_url?


export const fetchProducts=async (offset,limit)=> {
  try {
    const response = await axios.get(`${SERVER_URL}/product?offset=${offset}&limit=${limit}`);
    // const response = await axios.get(`${url.SERVER_URL}/product?offset=${offset}&limit=${limit}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('error fetching products:', error);
  }
}