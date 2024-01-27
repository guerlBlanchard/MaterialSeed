import { ReactNode, useCallback, useMemo, useState } from "react";
import { UserContext, UserInfo } from "./UserContext";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function UserProvider({ children }: Props) {
  const initialState: UserInfo = {
    data: '',
  };
  const [user, setUser] = useState(initialState);

  const setUserInfos = useCallback((userInfos: UserInfo): void => {
    setUser(userInfos);
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUserInfos,
    }),
    [user, setUserInfos]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}