import axios from "axios";
import axiosThrottle from "axios-request-throttle";
import { AnyAaaaRecord } from "dns";

export const ApiClient = axios.create({
    baseURL: "http://skunkworks.ignitesol.com:8000",
   // timeout: 1000,
  });

  

export default ApiClient;
