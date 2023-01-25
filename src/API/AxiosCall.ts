// import axios from "axios";

import axios from "./axios";

export const AxiosCall = async (
  url: string,
  method: "POST" | "GET" | "PUT" | "DELETE",
  data?: any,
  responseType?: any,
  linkTo?: any
) => {
  try {
    if (method === "POST" || "PUT") {
      const response = await axios({
        url: `${url}`,
        method,
        data: data || {},
        responseType: responseType || "json",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      return {
        success: true,
        data: response.data,
      };
    } else {
      const response = await axios({
        url: `${url}`,
        method,
        // headers: {
        //   Authorization: `${localStorage.getItem("token")}`,
        // },
        data: data || {},
      });
      return {
        success: true,
        data: response.data,
      };
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      localStorage.clear();
    } else {
      return {
        success: false,
        data: {},
      };
    }
  }
};
