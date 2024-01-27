import { createContext } from "react";

export interface UserInfo {
  data: string;
};

export interface UserState {
  user: UserInfo;
  setUserInfos: (userInfo: UserInfo) => void;
};

export const UserContext = createContext<UserState>(
  {} as UserState
);