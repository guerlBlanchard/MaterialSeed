import { CustomRouteObject } from "../types/routes";
import Homepage from "../views/Homepage/Homepage";

export const level1Routes: CustomRouteObject[] = [
    {
        title: 'homepage',
        path: '/',
        element: <Homepage />
    }
]