import React from "react";
import { StoryFn, Meta,  } from "@storybook/react";
import { env_log } from "fenextjs-functions/cjs/env_log";

import { Table, TableProps } from "./index";
import {GridGallery} from '../GridGallery';
import {Img} from '../Img';
import {Link} from '../Link';

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
    files?:{
        id:string
        url:string
    }[]
}

const TableIndex: StoryFn<TableProps<TestItemTable>> = (args) =>{
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
                return <Link href={`#${data.id}`}>{data.id}</Link>;
            },
            className:"id",
            columnOptions: {
                showHidden: true,
            },
        },
        {
            id: "name",
            thText:"Name",
            th: <>Name</>,
            parse: (data: TestItemTable) => {
                return <Link href={`#${data.id}`}>{data.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                // orderBy:true,
                
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                // orderBy:true,
                
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                // orderBy:true,
                
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                // orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                // orderBy:true,
                
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                // orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            // columnOptions:{
            //     orderBy:true,
            //     
            // }
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
        PaginationItemPageProps:{
            nItems:50
        }
    },
    loader: false,
    // onOrderBy:(a)=>{
    //     env_log(a,{
    //         name:"Order By"
    //     })
    // },
} as TableProps<TestItemTable>

export const OneItem = TableIndex.bind({});
OneItem.args = {
    name:"Usuarios",
    header: [
        {
            id: "id",
            th: "ID",
            parse: (data: TestItemTable) => {
                return <Link href={`#${data.id}`}>{data.id}</Link>;
            },
        },
        {
            id: "name",
            th: "Name",
            parse: (data: TestItemTable) => {
                return <Link href={`#${data.id}`}>{data.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
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
        PaginationItemPageProps:{
            nItems:1,
        },
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
                return <Link href={`#${data.id}`}>{data.id}</Link>;
            },
        },
        {
            id: "name",
            th: "Name",
            parse: (data: TestItemTable) => {
                return <Link href={`#${data.id}`}>{data.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
    ],
    items: [],
    pagination: {
        PaginationItemPageProps:{
            nItems:0,
        },
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
                return <Link href={`#${data.id}`}>{data.id}</Link>;
            },
        },
        {
            id: "name",
            th: "Name",
            parse: (data: TestItemTable) => {
                return <Link href={`#${data.id}`}>{data.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "id",
            th: "newTabel",
            columnOptions:{
                orderBy:true,
                
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
        PaginationItemPageProps:{
            nItems:200,
        },
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
                return <Link href={`#${data.id}`}>{data.id}</Link>;
            },
        },
        {
            id: "name",
            th: "Name",
            parse: (data: TestItemTable) => {
                return <Link href={`#${data.id}`}>{data.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            },
            defaultShowHidden:"hidden"
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "org",
            th: "Organizacion",
            parse: ({ org }: TestItemTable) => {
                return <Link href={`#${org.id}`}>{org.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
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
        PaginationItemPageProps:{
            nItems:100,
        },
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





export const WithCollapse = TableIndex.bind({});
WithCollapse.args = {
    name:"Usuarios",
    
    header: [
        {
            id: "id",
            th: "ID",
            parse: (data: TestItemTable) => {
                return <Link href={`#${data.id}`}>{data.id}</Link>;
            },
            className:"id",
            columnOptions: {
                showHidden: true,
            },
        },
        {
            id: "name",
            thText:"Name",
            th: <>Name</>,
            parse: (data: TestItemTable) => {
                return <Link href={`#${data.id}`}>{data.name}</Link>;
            },
            columnOptions:{
                orderBy:true,
                
            }
        },
        {
            id: "date",
            th: "Date",
            parse: (data: TestItemTable) => data.date.toDateString(),
            columnOptions:{
                // orderBy:true,
                
            }
        },
        {
            id: "dni",
            th: "Documento",
            columnOptions:{
                // orderBy:true,
                
            }
        },
        {
            id: "amount",
            th: "Monto",
            columnOptions:{
                // orderBy:true,
                
            }
        },
        {
            id: "quanty",
            th: "Cantidad",
            columnOptions:{
                // orderBy:true,
                
            }
        },
        {
            id: "files",
            th: "Archivos",
            parse:(user)=>{
                return <>
                    
                    <GridGallery
                        items={user.files?.map?.((file,i)=><Img key={i} src={file.url}/>) ?? []}
                    />
                </>
            },
            isCollapse:true,
            collapseProps:{
                header:"Ver Archivos",
            }
        },
    ],
    items: new Array(5).fill(1).map((e, i) => {
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
            files: new Array(5).fill(1).map((e, i) => {
                return {
                    id:`${e}-${i}`,
                    url:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
                }
            })
        };
        return r;
    }),
    pagination: {
        PaginationItemPageProps:{
            nItems:20,
        },
        // nItemsPage:20
    },
    loader: false,
    // onOrderBy:(a)=>{
    //     env_log(a,{
    //         name:"Order By"
    //     })
    // },
} as TableProps<TestItemTable>