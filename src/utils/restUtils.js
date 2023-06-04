import axios from "axios";
import * as authservice from "./authServices";

const getToken = () => {
  if (authservice.isLoggedIn()) {
    const { accessToken } = authservice.getUser();

    if (!accessToken) {
      return;
    }

    return {
      Authorization: `Bearer ${accessToken}`,
    };
  } else {
    return;
  }
};

export async function getData(url) {
  try {
    let responseData;
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}${url}`,
      {
        headers: getToken(),
        timeout: parseInt(process.env.REACT_APP_AXIOS_API_TIMEOUT),
      }
    );

    if (response.status === 200) {
      responseData = response.data;
    }
    return responseData;
  } catch (error) {
    console.log(`getData URL=${url}`, error);

    return error?.response?.data ? error?.response?.data : undefined;
  }
}

export async function postData(url, data, accessToken) {
  let responseData;
  let response = null;
  try {
    response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}${url}`,
      data,
      {
        headers: accessToken
          ? {
              Authorization: `Bearer ${accessToken}`,
            }
          : getToken(),
        timeout: parseInt(process.env.REACT_APP_AXIOS_API_TIMEOUT),
      }
    );

    if (response.status === 201 || response.status === 200) {
      responseData = response.data
        ? response.data
        : "request success without data";
    }
    return responseData;
  } catch (error) {
    let errorRes;
    if (error.response) {
      errorRes = error.response.data;
    }

    console.log(`postData URL=${url}`, error);

    return errorRes;
  }
}

export async function putData(url, data) {
  try {
    let responseData;
    const response = await axios.put(
      `${process.env.REACT_APP_BASE_URL}${url}`,
      data,
      {
        headers: getToken(),
        timeout: parseInt(process.env.REACT_APP_AXIOS_API_TIMEOUT),
      }
    );

    if (response.status === 200) {
      responseData = response.data ? response.data : response;
    }
    return responseData;
  } catch (error) {
    console.log(`putData URL=${url}`, error);

    return error?.response?.data ? error?.response?.data : undefined;
  }
}

export async function deleteData(url) {
  try {
    let responseData;

    const response = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}${url}`,
      {
        headers: getToken(),
        timeout: parseInt(process.env.REACT_APP_AXIOS_API_TIMEOUT),
      }
    );

    if (response.status === 204) {
      responseData = response;
    }

    return responseData;
  } catch (error) {
    console.log(`deleteData URL=${url}`, error);

    if (error.response) {
      return error.response;
    }

    return error?.response?.data ? error?.response?.data : undefined;
  }
}
