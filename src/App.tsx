import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import SnackBarProvider from './context/snackbar/SnackBarProvider';
import UserProvider from './context/user/UserProvider';
import { ThemeProvider } from '@mui/material';
import { MuiTheme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <UserProvider>
        <SnackBarProvider>
          <RouterProvider router={router}/>
        </SnackBarProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
