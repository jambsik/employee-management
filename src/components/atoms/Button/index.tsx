export const Button = ({
    children,
    ...props
}: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) => (
    <button
        type="button"
        className="flex-shrink-0 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
        {...props}
    >
        {children}
    </button>
);
