import { useQuery } from "@tanstack/react-query";
import { fetchMyTree } from "../api/tree";

interface MyTreeResponse {
  userId: number;
  nickName: string;
  starCount: number;
  giftBoxCount: number;
  templateId: number;
  shareToken: string;
}

export const useMyTree = () => {
  return useQuery({
    queryKey: ["myTree"],
    queryFn: fetchMyTree,
  });
};
