export interface TableActionProps {
    id: string;
    icon: string;
}

export const TableAction = ({ icon }: TableActionProps) => (
    <td className="flex flex-row w-full h-full justify-center items-center content-center">
        <i className="material-icons cursor-pointer text-base">{icon}</i>
    </td>
);
