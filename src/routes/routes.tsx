import { createBrowserRouter } from "react-router-dom";
import { CustomRouteObject } from "../types/routes";
import { loggedRoutes } from "./LoggedRoutes";

export const routes: CustomRouteObject[] = [
  {
    title: '',
    path: '/login',
    element: (
      <></>
    )
  },
  {
    title: 'all',
    path: '/*',
    element: (<></>),
    children: loggedRoutes,
  },

];

const router = createBrowserRouter(routes);

export default router;