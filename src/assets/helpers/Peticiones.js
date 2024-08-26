import axios from "axios";
import { urlAPI } from "./constants";

export const getData = async () => {
    try {
      const {data} = await axios.get(urlAPI);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const postData = async (obj) => {
    try {
      const result = await axios.post(urlAPI, obj);
      console.log(result);
      return result.status     
    } catch (error) {
      console.log(error);
    }
  };

  