import { CustomRouteObject } from "../types/routes";
import Homepage from "../views/Homepage/Homepage";

export const loggedRoutes: CustomRouteObject[] = [
  {
    title: 'homepage',
    path: '/',
    element: <Homepage />
  }
]