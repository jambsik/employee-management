export interface NavigationProps {
    items: Array<{
        route: string;
        label: string;
    }>;
}

export const Navigation = ({ items }: NavigationProps) => (
    <nav id="navigation-component" className="text-white text-bold">
        <ul className="flex flex-row justify-end w-full text-xl">
            {items.map((item) => (
                <li key={item.label} className="hover:underline pr-5">
                    <a href="/">{item.label}</a>
                </li>
            ))}
        </ul>
    </nav>
);
