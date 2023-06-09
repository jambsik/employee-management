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
                    {columns?.map((column: TableColumn, index: number) => {
                        const columnValue = (item as Record<string, unknown>)[
                            column.id
                        ];
                        return (
                            <td
                                key={`table_col_row_${columnValue}_${index}`}
                                className="px-6 py-4 whitespace-nowrap"
                            >
                                <div
                                    className="max-w-[200px] text-sm text-gray-900 truncate overflow-hidden"
                                    title={`${columnValue}`}
                                >
                                    {`${columnValue}`}
                                </div>
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
