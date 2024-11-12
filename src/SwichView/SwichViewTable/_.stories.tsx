import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { SwichViewTable, SwichViewTableProps } from "./index";
import { Table } from "../../Table";

export default {
    title: "SwichView/Table",
    component: SwichViewTable,
} as Meta;
interface TestItemTable {
    id: string;
    name: string;
    date: Date;
    dni: string;
    amount: number;
    quanty: number;
    org: {
        id: string;
        name: string;
    };
}
const Profile: StoryFn<PropsWithChildren<SwichViewTableProps>> = (args) => (
    <>
        <SwichViewTable {...args} />
        <Table<TestItemTable>
            name="Usuarios"
            header={[
                {
                    id: "id",
                    th: "ID",
                    parse: (data: TestItemTable) => {
                        return <a href={`#${data.id}`}>{data.id}</a>;
                    },
                },
                {
                    id: "name",
                    th: "Name",
                    parse: (data: TestItemTable) => {
                        return <a href={`#${data.id}`}>{data.name}</a>;
                    },
                    columnOptions: {
                        orderBy: true,
                        showHidden: true,
                    },
                },
                {
                    id: "date",
                    th: "Date",
                    parse: (data: TestItemTable) => data.date.toDateString(),
                    columnOptions: {
                        orderBy: true,
                        showHidden: true,
                    },
                },
                {
                    id: "dni",
                    th: "Documento",
                    columnOptions: {
                        orderBy: true,
                        showHidden: true,
                    },
                },
                {
                    id: "amount",
                    th: "Monto",
                    columnOptions: {
                        orderBy: true,
                        showHidden: true,
                    },
                },
                {
                    id: "quanty",
                    th: "Cantidad",
                    columnOptions: {
                        orderBy: true,
                        showHidden: true,
                    },
                },
                {
                    id: "org",
                    th: "Organizacion",
                    parse: ({ org }: TestItemTable) => {
                        return <a href={`#${org?.id}`}>{org?.name}</a>;
                    },
                    columnOptions: {
                        orderBy: true,
                        showHidden: true,
                    },
                    defaultShowHidden: "hidden",
                },
                {
                    id: "org",
                    th: "Organizacion",
                    parse: ({ org }: TestItemTable) => {
                        return <a href={`#${org?.id}`}>{org?.name}</a>;
                    },
                    columnOptions: {
                        orderBy: true,
                        showHidden: true,
                    },
                },
                {
                    id: "org",
                    th: "Organizacion",
                    parse: ({ org }: TestItemTable) => {
                        return <a href={`#${org?.id}`}>{org?.name}</a>;
                    },
                    columnOptions: {
                        orderBy: true,
                        showHidden: true,
                    },
                },
            ]}
            items={new Array(50).fill(1).map((e, i) => {
                const n = e * i + 1;
                const r: TestItemTable = {
                    id: `${n}`,
                    name: `Name ${n}`,
                    date: new Date(100000000 * n),
                    dni: `000${n}`,
                    amount: 1000 * n,
                    quanty: 10 * n,
                    org: {
                        id: `${n}`,
                        name: `Organizacion ${n}`,
                    },
                };
                return r;
            })}
        />
    </>
);

export const Index = Profile.bind({});
Index.args = {} as SwichViewTableProps;
