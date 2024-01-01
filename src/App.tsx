import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import SnackBarProvider from './context/snackbar/SnackBarProvider';

function App() {
  return (
    <div className="App">
      <SnackBarProvider>
        <RouterProvider router={router}/>
      </SnackBarProvider>
    </div>
  );
}

export default App;
