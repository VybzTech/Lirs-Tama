/* eslint-disable no-undef */
import axios from "axios";

const API_BASE_URL = "http://localhost/API"; //peopleList/read.php";
// const API_BASE_URL = "http://localhost:4000";

export const pullInfo = async () => {
  //   try {
  //   const response = await axios.post(`${API_BASE_URL}/data`, info);
  // const response = await axios.get(`${API_BASE_URL}/data`);
  const response = await axios.get(`${API_BASE_URL}/tcc/readPeople.php`);

  if (!response) {
    throw error;
  } else {
    return response.data;
  }
};

export const companyInfo = async () => {
  //   try {     info
  //   const response = await axios.post(`${API_BASE_URL}/data`, info);
  const response = await axios.get(`${API_BASE_URL}/tcc/companies.php`);
  // , info;
  if (!response) {
    throw error;
  } else {
    // console.log(response)
    return response?.data;
  }
};

export const getFiles = async () => {
  //   try {
  //   const response = await axios.post(`${API_BASE_URL}/data`, info);
  // const response = await axios.get(`${API_BASE_URL}/data`);
  const response = await axios.get(`${API_BASE_URL}/tcc/readFiles.php`);

  if (!response) {
    throw error;
  } else {
    return response.data;
  }
};

export const addCompanyInfo = async (values) => {
  console.log("POST DATA VALUES", values);

  //   try {     info
  //   const response = await axios.post(`${API_BASE_URL}/data`, info);
  // const response = await axios.post(`${API_BASE_URL}/tcc/create.php`, values, {
  const response = await axios.post(
    "http://localhost/API/tcc/create.php",
    values,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173", // Enable CORS
      },
      // withCredentials: false,
    }
  );
  if (!response) {
    throw error;
  } else {
    console.log("Response:", response.data);
    // console.log(response)
    return response?.data;
  }
};

export const addFiles = async (values) => {
  console.log("POST FILES", values);

  const response = await axios.post(
    "http://localhost/API/tcc/createFiles.php",
    values,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "http://localhost:5173", // Enable CORS
      },
    }
  );
  if (!response) {
    throw error;
  } else {
    console.log("Response:", response.data);
    return response?.data;
  }
};
