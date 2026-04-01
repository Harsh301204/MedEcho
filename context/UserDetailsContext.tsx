import { UserDetail } from "@/app/provider";
import { createContext } from "react";

export type UserContextType = {
  userDetail: UserDetail | null;
  setUserDetail: React.Dispatch<React.SetStateAction<UserDetail | null>>;
};

export const UserDetailsContext = createContext<UserContextType | null>(null)