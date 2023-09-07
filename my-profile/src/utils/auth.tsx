// 封装setToken方法，将token存储到localStorage中

export const setToken = (token: string) => {
  return localStorage.setItem("token", token);
};

// 封装getToken方法，从localStorage中获取token

export const getToken = () => {
  return localStorage.getItem("token");
};

// 封装removeToken方法，从localStorage中删除token

export const removeToken = () => {
  return localStorage.removeItem("token");
};

// 封装setUsername方法，将username存储到localStorage中

export const setUsername = (username: string) => {
  return localStorage.setItem("username", username);
};

// 封装getUsername方法，从localStorage中获取username

export const getUsername = () => {
  return localStorage.getItem("username");
};

// 封装removeUsername方法，从localStorage中删除username

export const removeUsername = () => {
  return localStorage.removeItem("username");
};

// 封装setRole方法，将role存储到localStorage中

export const setRole = (role: string) => {
  return localStorage.setItem("role", role);
};

// 封装getRole方法，从localStorage中获取role

export const getRole = () => {
  return localStorage.getItem("role");
};

// 封装removeRole方法，从localStorage中删除role

export const removeRole = () => {
  return localStorage.removeItem("role");
};
