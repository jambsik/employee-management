import { TableRows } from './TableRows';
import { TableActionProps } from './TableAction';

export interface TableColumn {
    id: string;
    label: string;
    action?: TableActionProps;
}

export interface TableProps<Model> {
    columns: TableColumn[];
    items?: Model[];
    actions?: { label: string; items: TableActionProps[] };
}

export const Table = <Model,>(props: TableProps<Model>) => {
    const { columns, actions } = props;
    const columnClasses =
        'px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';
    return (
        <>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        {columns?.map((column: TableColumn) => (
                            <th
                                id={column?.id}
                                key={column.id}
                                className={columnClasses}
                            >
                                {column.label}
                            </th>
                        ))}
                        {actions && (
                            <th className={columnClasses}>{actions?.label}</th>
                        )}
                    </tr>
                </thead>
                <TableRows<Model> {...props} />
            </table>
        </>
    );
};
