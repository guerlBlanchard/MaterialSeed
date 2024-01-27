import { createBrowserRouter } from "react-router-dom";
import { CustomRouteObject } from "../types/routes";
import Homepage from "../views/Homepage/Homepage";

export const routes: CustomRouteObject[] = [
    {
        title: 'homepage',
        path: '/',
        element: <Homepage />
    }
];

const router = createBrowserRouter(routes);

export default router;