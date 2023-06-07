export enum Route {
    Home = '/',
    Employee = 'employee',
}

export enum NeestedRoute {
    CreateEmployee = '/employee/create',
}

export const getLabeledRoutes = () =>
    Object.keys(Route).map((r) => ({
        route: Route[r as keyof typeof Route],
        label: r,
    }));
