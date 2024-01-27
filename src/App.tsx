import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import SnackBarProvider from './context/snackbar/SnackBarProvider';
import UserProvider from './context/user/UserProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <SnackBarProvider>
          <RouterProvider router={router}/>
        </SnackBarProvider>
      </UserProvider>
    </div>
  );
}

export default App;
