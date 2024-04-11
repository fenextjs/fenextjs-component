import React from "react";
import { Story, Meta,  } from "@storybook/react";
import { env_log } from "fenextjs-functions/cjs/env_log";

import { Table, TableProps } from "./index";

export default {
    title: "Table/Table",
    component: Table,
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

const TableIndex: Story<TableProps<TestItemTable>> = (args) =>{
    return  (
       <>
       {/* <div style={{height:"60dvh"}}></div> */}
        <Table {...args}>Test Children</Table>
       </>
    );
}

export const Index = TableIndex.bind({});
Index.args = {
    name:"Usuarios",
    header: [
        {
            id: "id",
            th: "ID",
            parse: (data: TestItemTable) => {
                return <a href={`#${data.id}`}>{data.id}</a>;
            },
            className:"id"
        },
        {
            id: "name",
            th: "Name",
            parse: (data: TestItemTable) => {
                return <a href={`#${data.id}`}>{data.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
    ],
    items: new Array(50).fill(1).map((e, i) => {
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
    }),
    pagination: {
        nItems: 20,
    },
    loader: false,
    onOrderBy:(a)=>{
        env_log(a,{
            name:"Order By"
        })
    },
} as TableProps<TestItemTable>

export const OneItem = TableIndex.bind({});
OneItem.args = {
    name:"Usuarios",
    header: [
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
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
    ],
    items: new Array(1).fill(1).map((e, i) => {
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
    }),
    pagination: {
        nItems: 1,
        showNPage:false
    },
    loader: false,
    onOrderBy:(a)=>{
        env_log(a,{
            name:"Order By"
        })
    },
} as TableProps<TestItemTable>

export const NotItem = TableIndex.bind({});
NotItem.args = {
    name:"Usuarios",
    header: [
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
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
    ],
    items: [],
    pagination: {
        nItems: 1,
        showNPage:false
    },
    loader: false,
    onOrderBy:(a)=>{
        env_log(a,{
            name:"Order By"
        })
    },
} as TableProps<TestItemTable>



export const TableInTable = TableIndex.bind({});
TableInTable.args = {
    name:"Usuarios",
    header: [
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
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "id",
            th: "newTabel",
            columnOptions:{
                orderBy:true,
                showHidden:true
            },
            colNewTr:true,
            parse: () => {
                return <>
                    <Table
                        header={[
                            {
                                id:"id",
                                th:"ID"
                            },
                            {
                                id:"name",
                                th:"Name"
                            }
                        ]}
                        useCheckbox={false}
                        name="sub-table"
                        items={[
                            {
                                id:"id",
                                name:"name"
                            },
                            {
                                id:"id",
                                name:"name"
                            },
                            {
                                id:"id",
                                name:"name"
                            },
                            {
                                id:"id",
                                name:"name"
                            },
                        ]}
                    />
                </>
            },
        },

        {
            id: "id",
            th: "newTabel",
            columnOptions:{
                orderBy:true,
                showHidden:true
            },
            colNewTr:true,
            parse: () => {
                return <>
                    <Table
                        header={[
                            {
                                id:"id",
                                th:"ID"
                            },
                            {
                                id:"name",
                                th:"Name"
                            }
                        ]}
                        name="sub-table"
                        items={[
                            {
                                id:"id",
                                name:"name"
                            },
                            {
                                id:"id",
                                name:"name"
                            },
                            {
                                id:"id",
                                name:"name"
                            },
                            {
                                id:"id",
                                name:"name"
                            },
                        ]}
                    />
                </>
            },
        },
    ],
    items: new Array(50).fill(1).map((e, i) => {
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
    }),
    pagination: {
        nItems: 200,
    },
    loader: false,
    onOrderBy:(a)=>{
        env_log(a,{
            name:"Order By"
        })
    },
    showPagination:false
} as TableProps<TestItemTable>



export const Actions = TableIndex.bind({});
Actions.args = {
    name:"Usuarios",
    header: [
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
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <a href={`#${org?.id}`}>{org?.name}</a>;
            },
            columnOptions:{
                orderBy:true,
                showHidden:true
            }
        },
    ],
    items: new Array(50).fill(1).map((e, i) => {
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
    }),
    pagination: {
        nItems: 100,
        showNPage:true
    },
    loader: false,
    onOrderBy:(a)=>{
        env_log(a,{
            name:"Order By"
        })
    },
    actionsCheckbox:{
        actions:[
            (data)=>{
                return <>
                    <div onClick={()=>{
                        env_log(data,{
                            name:"data eliminar"
                        })
                    }}>
                    Eliminar
                    </div>
                </>
            }
        ]
    }
} as TableProps<TestItemTable>