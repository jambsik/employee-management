export interface TableColumn {
    id: string;
    label: string;
}

export interface TableProps<Model> {
    columns: TableColumn[];
    items?: Model[];
}

export const Table = <Model,>({ columns, items }: TableProps<Model>) => {
    const rowsBlock = items?.map((item: Model, index: number) => {
        return (
            <tr key={`table_${index}`}>
                {columns?.map((column: TableColumn) => {
                    const columnValue = (item as Record<string, unknown>)[
                        column.id
                    ];
                    return (
                        <td
                            key={`table_col_row_${columnValue}`}
                            className="px-6 py-4 whitespace-nowrap"
                        >
                            <span className="text-sm text-gray-900">
                                {`${columnValue}`}
                            </span>
                        </td>
                    );
                })}
            </tr>
        );
    });

    return (
        <>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        {columns?.map((column: TableColumn) => (
                            <th
                                id={column?.id}
                                key={column.id}
                                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {rowsBlock}
                </tbody>
            </table>
        </>
    );
};
