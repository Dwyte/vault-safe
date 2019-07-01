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

export const updateVault = async (data) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "x-auth-token": token
    }
  };

  return await http.put(endpoint, data, config);
};

export const deleteVault = async () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "x-auth-token": token
    }
  };

  return await http.delete(endpoint, config);
};
