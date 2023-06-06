export enum Route {
    'Home' = '/',
}

export const getLabeledRoutes = () =>
    Object.keys(Route).map((r) => ({
        route: Route[r as keyof typeof Route],
        label: r,
    }));
