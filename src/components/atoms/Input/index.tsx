export const Input = (
    props: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
) => (
    <input
        type="text"
        className="px-4 py-2 rounded-md focus:outline-none 
                w-full focus:ring-2 focus:ring-secondary text-base text-primary"
        {...props}
    />
);
