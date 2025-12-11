import { useMutation } from "@tanstack/react-query";
import { api } from "../api/api";

export const useKakaoLogin = () => {
  return useMutation({
    mutationFn: async (code: string) => {
      const res = await api.post("/auth/kakao", { code });
      return res.data;
    },
  });
};
