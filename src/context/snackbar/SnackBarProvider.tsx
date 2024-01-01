import React, { ReactNode, useMemo, useState } from "react";
import { AlertColor } from "@mui/material";
import { SnackBarContext, SnackValue } from "./SnackBarContext";

interface SnackBarProviderProps {
  children: ReactNode | ReactNode[];
}

export default function SnackBarProvider({ children }: SnackBarProviderProps) {
  const initialState = {
    message: '',
    open: false,
    severity: 'success' as AlertColor,
  };
  const [snack, setSnack] = useState(initialState);

  const setSnackInfos = (infos: SnackValue): void => {
    setSnack(infos);
    if (infos.open) {
      setTimeout(() => {
        const closedSnack = {
          ...infos,
          open: false,
        };
        setSnackInfos(closedSnack);
      }, 8000);
    }
  };

  const value = useMemo(() => ({
    snack, setSnackInfos,
  }), [snack]);

  return (
    <SnackBarContext.Provider value={value}>
      { children }
    </SnackBarContext.Provider>
  );
}