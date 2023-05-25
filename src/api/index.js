import axios from "axios";

const instance = axios.create();

const getMenus = () => {
  return instance.get("/api/menus.json");
};

export { getMenus };
