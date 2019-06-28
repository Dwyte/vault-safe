import http from "./httpServices";

const endpoint = "/api/vaults";

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
