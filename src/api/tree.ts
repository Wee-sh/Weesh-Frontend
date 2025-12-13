import { api } from "../api/api";

export const fetchMyTree = async () => {
  const res = await api.get("/tree/me");
  return res.data;
};
