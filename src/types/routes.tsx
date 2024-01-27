import { ReactElement } from "react";

export interface CustomRouteObject {
    title: string,
    element: ReactElement,
    path: string,
    loader?: (param: any) => Promise<unknown>,
    roles?: string,
    icon?: any,
    children?: CustomRouteObject[]
}
