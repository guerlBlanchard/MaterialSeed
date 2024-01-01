import { AlertColor } from "@mui/material";
import { createContext } from "react";

export interface SnackValue {
  message: string;
  open: boolean;
  severity: AlertColor;
}

export interface SnackBarState {
  snack: SnackValue;
  setSnackInfos: (snackValue: SnackValue) => void;
}

export const SnackBarContext = createContext<SnackBarState>({} as SnackBarState);