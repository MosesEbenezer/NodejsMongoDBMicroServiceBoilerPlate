import "babel-polyfill";
import fetch from "node-fetch";
import axios from "axios";

class BaseController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  /** handle response errors */
  static _responseError = (res, res_code, res_des, error, code) => {
    res.status(code).json({
      success: false,
      response_code: `${res_code}`,
      response_description: `${res_des}`,
      error: error,
    });
  };

  /** handle successful response */
  static _responseSuccess = (res, res_code, res_des, data, code) => {
    res.status(code).json({
      success: true,
      response_code: `${res_code}`,
      response_description: `${res_des}`,
      data,
    });
  };

  /** get data from rates api */
  static _fetchData = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error();
    }
  };

  static _postData = async (url, dataToPost) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .post(url, dataToPost, axiosConfig)
      .then((response) => {
        console.log("response from Post Data function", response.data);
        response = response.data;
        return response;
      })
      .catch((e) => {
        console.log("An error occured inside postData functions ", e);
      });
  };
}

export default BaseController;
