export interface TableActionProps<Model> {
    id: string;
    icon: string;
    item: Model;
    onClick?: (item: Model) => void;
}

export const TableAction = <Model,>({
    icon,
    item,
    onClick,
}: TableActionProps<Model>) => (
    <td
        className="flex flex-row w-full h-full justify-center items-center content-center"
        onClick={() => onClick?.(item)}
    >
        <i className="material-icons cursor-pointer text-base">{icon}</i>
    </td>
);
