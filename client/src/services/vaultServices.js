import http from "./httpServices";

const endpoint = "http://localhost:4200/api/vaults";

export const postVault = async vault => {
  return await http.post(endpoint, vault);
};

export const validateUserHash = async userHash => {
  return await http.get(`${endpoint}/${userHash}`);
};

export const getVault = async auth => {
  return await http.get(`${endpoint}/get/${auth}`);
};

export const updateVault = async (auth, data) => {
  return await http.put(`${endpoint}/${auth}`, data);
}

export const deleteVault = async (auth) => {
  return await http.delete(`${endpoint}/${auth}`);
}