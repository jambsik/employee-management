import { Fragment } from 'react';
import { TableColumn, TableProps } from '.';
import { TableAction } from './TableAction';

export const TableRows = <Model,>({
    columns,
    actions,
    items,
}: TableProps<Model>) => (
    <tbody className="bg-white divide-y divide-gray-200">
        {items?.map((item: Model, index: number) => {
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
                    {actions &&
                        actions.items?.map((props) => {
                            const tableProps = {
                                ...props,
                                item,
                            };
                            return (
                                <Fragment key={props.id}>
                                    <TableAction<Model> {...tableProps} />
                                </Fragment>
                            );
                        })}
                </tr>
            );
        })}
    </tbody>
);
