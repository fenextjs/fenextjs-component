import{r as d,R as t}from"./index-BBqxgoSh.js";import{P as _}from"./index-CVmAgRi2.js";import"./index-YD-hy5qW.js";import"./index-CHikfJJq.js";import{I as C}from"./index-CZ4AN7H4.js";import{D as ee}from"./index-zclCW42w.js";import{L as te}from"./index-D35yvkiQ.js";import"./index-Bl1n06N9.js";import{L as ae}from"./index-BvGAx8bm.js";import"./index-Cc2-Ys_d.js";import{T as ne}from"./index-DK0TXMcf.js";import{c as D}from"./index-ac8kB312.js";import{C as le}from"./index-DewEk3et.js";import{E as oe}from"./index-Bg1qUNzi.js";const re=({classNameContent:R="",classNameContentTable:H="",classNameTable:M="",classNameTHead:W="",classNameTBody:z="",classNameThr:B="",classNameTr:s="",classNameTh:S="",classNameTd:o="",classNameTdLabelCollapse:G="",classNameContentPagination:J="",classNameLoader:K="",name:v,items:m,header:y,error:E,nItems:q,pagination:u,showPagination:Q=!0,loader:k=!1,typeLoader:A="line",useCheckbox:h=!0,onOrderBy:p,restartPaginationInRenderTable:P=!0,onChecked:f,notResult:V=t.createElement("div",null,"There is not results"),actionsCheckbox:j,actionsCheckboxSelectAll:U="Select All",...X})=>{const{_t:c}=D.use_T({...X}),{setData:Y}=D.usePagination({name:u==null?void 0:u.paginationName});d.useEffect(()=>{P&&Y({npage:10,page:0})},[P]);const N=d.useMemo(()=>m.map(a=>({...a,__checkbox:!1})),[m]),[b,$]=d.useState(N),O=a=>{const l=m.map(n=>({...n,__checkbox:a}));$(l),f==null||f(l==null?void 0:l.filter(n=>n.__checkbox))},Z=a=>l=>{$(n=>{const e=n.map((r,i)=>({...r,...a==i?{__checkbox:l}:{}}));return f==null||f(e==null?void 0:e.filter(r=>r.__checkbox)),e})};d.useEffect(()=>{$(N)},[N]);const g=d.useMemo(()=>y.filter(a=>(a.colNewTr!==!0||(a==null?void 0:a.isCollapse))&&a.hidden!=!0),[y]),F=d.useMemo(()=>y.filter(a=>(a.colNewTr===!0||(a==null?void 0:a.isCollapse))&&a.hidden!=!0),[y]),w=d.useMemo(()=>E?t.createElement("tr",{className:`fenext-table-content-table-tr ${s}`},t.createElement("td",{className:`fenext-table-content-table-td fenext-table-error ${o}`,colSpan:999},t.createElement(oe,{error:E}))):k?A=="spinner"?t.createElement("tr",{className:`fenext-table-content-table-tr ${s}`},t.createElement("td",{className:`fenext-table-content-table-td ${o}`,colSpan:999},t.createElement("div",{className:`${K}`},t.createElement(te,null)))):new Array(10).fill(1).map((a,l)=>t.createElement("tr",{key:l*a,className:`fenext-table-content-table-tr ${s}`},h&&t.createElement("td",{key:`${l}-checkbox`,className:`fenext-table-content-table-td ${o}`},t.createElement(C,{value:!1,classNameLabel:"fenext-table-content-table-checkbox"})),g.map((n,e)=>t.createElement("td",{key:`${l}-${e}`,className:`fenext-table-content-table-td ${o}`,style:{"--fenext-table-head-th":`"${(n==null?void 0:n.thText)??(n==null?void 0:n.th)}"`},"data-col-id":n==null?void 0:n.id,"data-col-text":(n==null?void 0:n.thText)??(n==null?void 0:n.th)},t.createElement(ae,null))))):m.length==0?t.createElement("tr",{className:`fenext-table-content-table-tr ${s}`},t.createElement("td",{className:`fenext-table-content-table-td fenext-table-not-result ${o}`,colSpan:999},c(V))):m.map((a,l)=>{var n;return t.createElement(t.Fragment,null,t.createElement("tr",{key:l,className:`fenext-table-content-table-tr ${s}`},h&&t.createElement("td",{key:`${l}-checkbox`,className:`fenext-table-content-table-td ${o}`},t.createElement(C,{onChange:Z(l),value:((n=b[l])==null?void 0:n.__checkbox)??!1,classNameLabel:"fenext-table-content-table-checkbox"})),g.map((e,r)=>{var i,T,x;return t.createElement("td",{key:`${l}-${r}`,className:`
                                    fenext-table-content-table-td 
                                    fenext-table-content-table-td-${e.isCollapse?"is-label-collapse":""}
                                    ${o} 
                                    ${(e==null?void 0:e.className)??""}
                                `,style:{"--fenext-table-head-th":`"${(e==null?void 0:e.thText)??(e==null?void 0:e.th)}"`},"data-col-id":e==null?void 0:e.id,"data-col-text":(e==null?void 0:e.thText)??(e==null?void 0:e.th)},e.isCollapse?t.createElement(t.Fragment,null,t.createElement("label",{htmlFor:`table-${v}-${(i=e==null?void 0:e.id)==null?void 0:i.toString()}-${l}`,className:`fenext-table-content-table-td-label-collapse ${G}`},(T=e==null?void 0:e.collapseProps)==null?void 0:T.header)):t.createElement(t.Fragment,null,((x=e==null?void 0:e.parse)==null?void 0:x.call(e,a,l))??a[e.id]??""))})),F.map((e,r)=>{var i,T,x,I,L;return t.createElement(t.Fragment,null,t.createElement("tr",{key:`${l}_tr_${r}`,className:`
                                        fenext-table-content-table-tr
                                        fenext-table-content-table-tr-col-new-tr
                                        fenext-table-content-table-tr-${e.isCollapse?"is-collapse":""}
                                        ${s} 
                                        ${(e==null?void 0:e.className)??""}
                                    `},t.createElement("td",{key:`${l}-${r}`,className:`
                                            fenext-table-content-table-td 
                                            fenext-table-content-table-td-col-new-tr
                                            fenext-table-content-table-td-${e.isCollapse?"is-collapse":""}
                                            ${o}
                                        `,style:{"--fenext-table-head-th":`"${(e==null?void 0:e.thText)??(e==null?void 0:e.th)}"`},colSpan:100,"data-col-id":e==null?void 0:e.id,"data-col-text":(e==null?void 0:e.thText)??(e==null?void 0:e.th)},e.isCollapse?t.createElement(t.Fragment,null,t.createElement(le,{...e.collapseProps,header:"",id:`table-${v}-${(i=e==null?void 0:e.id)==null?void 0:i.toString()}-${l}`,name:`table-${v}-${(T=e==null?void 0:e.id)==null?void 0:T.toString()}-${l}`,className:`
                                                            ${((x=e.collapseProps)==null?void 0:x.className)??""}
                                                            fenext-table-content-table-td-collapse
                                                        `},((I=e==null?void 0:e.parse)==null?void 0:I.call(e,a,l))??a[e.id]??"")):t.createElement(t.Fragment,null,((L=e==null?void 0:e.parse)==null?void 0:L.call(e,a,l))??a[e.id]??""))))}))}),[m,y,g,k,s,o,h,b,A,V,F,E]);return t.createElement(t.Fragment,null,t.createElement("div",{className:`fenext-table ${R}`,style:{"--fenext-table-name":`"${v}"`}},h&&b.some(a=>a.__checkbox)&&j&&t.createElement("div",{className:"fenext-table-content-actions"},t.createElement(ne,{...j,actionAllCheckbox:{label:U,onChange:O,value:b.every(a=>(a==null?void 0:a.__checkbox)??!1)},data:b.filter(a=>a.__checkbox)})),t.createElement("div",{className:`fenext-table-content ${H}`},t.createElement("table",{className:`fenext-table-content-table ${M}`},t.createElement("thead",{className:`fenext-table-content-table-thead ${W}`},t.createElement("tr",{className:`fenext-table-content-table-thr ${B}`},h&&t.createElement("th",{className:`fenext-table-content-table-th ${S}`},t.createElement(C,{onChange:O,value:b.every(a=>(a==null?void 0:a.__checkbox)??!1),_t:c,classNameLabel:"fenext-table-content-table-checkbox"})),g.map((a,l)=>{var n;return t.createElement("th",{key:l,className:`fenext-table-content-table-th ${S} ${(a==null?void 0:a.className)??""}`,"data-col-id":a==null?void 0:a.id,"data-col-text":a==null?void 0:a.th},Object.values((a==null?void 0:a.columnOptions)??{}).some(e=>e==!0)?t.createElement(ee,{header:t.createElement(t.Fragment,null,c(a.th)),classNameBody:`
                                                      fenext-table-content-table-th-dropdown-body  
                                                    `},(n=a==null?void 0:a.columnOptions)!=null&&n.orderBy?t.createElement(t.Fragment,null,t.createElement("div",{onClick:()=>{p==null||p({id:a.id,order:"ASC"})},className:"fenext-table-content-table-th-popup-item fenext-table-content-table-th-order-by"},c("Order ASC")),t.createElement("div",{onClick:()=>{p==null||p({id:a.id,order:"DESC"})},className:"fenext-table-content-table-th-popup-item fenext-table-content-table-th-order-by"},c("Order DESC"))):t.createElement(t.Fragment,null)):t.createElement(t.Fragment,null,c(a.th)))}))),t.createElement("tbody",{className:`fenext-table-content-table-tbody ${z}`},w))),(q!=null||u)&&Q&&t.createElement("div",{className:`fenext-table-content-pagination ${J}`},t.createElement(_,{...u,PaginationItemPageProps:{nItems:q??10,...u},disabled:k,_t:c}))))};re.__docgenInfo={description:"",methods:[],displayName:"Table",props:{classNameContent:{required:!1,tsType:{name:"string"},description:"A CSS class name for the overall content container of the table.",defaultValue:{value:'""',computed:!1}},classNameContentTable:{required:!1,tsType:{name:"string"},description:"A CSS class name for the table element within the content container.",defaultValue:{value:'""',computed:!1}},classNameTable:{required:!1,tsType:{name:"string"},description:"A CSS class name for the table element itself.",defaultValue:{value:'""',computed:!1}},classNameTHead:{required:!1,tsType:{name:"string"},description:"A CSS class name for the table header element.",defaultValue:{value:'""',computed:!1}},classNameTBody:{required:!1,tsType:{name:"string"},description:"A CSS class name for the table body element.",defaultValue:{value:'""',computed:!1}},classNameThr:{required:!1,tsType:{name:"string"},description:"A CSS class name for the table row header element.",defaultValue:{value:'""',computed:!1}},classNameTr:{required:!1,tsType:{name:"string"},description:"A CSS class name for the table row element.",defaultValue:{value:'""',computed:!1}},classNameTh:{required:!1,tsType:{name:"string"},description:"A CSS class name for the table cell header element.",defaultValue:{value:'""',computed:!1}},classNameTd:{required:!1,tsType:{name:"string"},description:"A CSS class name for the table cell element.",defaultValue:{value:'""',computed:!1}},classNameTdLabelCollapse:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameContentPagination:{required:!1,tsType:{name:"string"},description:"A CSS class name for the content container of the pagination component.",defaultValue:{value:'""',computed:!1}},classNameLoader:{required:!1,tsType:{name:"string"},description:"A CSS class name for the loader element.",defaultValue:{value:'""',computed:!1}},name:{required:!0,tsType:{name:"string"},description:"Name the table."},items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"An array of data objects to display in the table."},nItems:{required:!1,tsType:{name:"number"},description:""},error:{required:!1,tsType:{name:"ErrorFenextjs"},description:""},header:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /**
     * The property key in the data object that corresponds to this header column.
     */
    id: keyof T;

    /**
     * The label to display in the header column.
     */
    th: ReactNode;
    /**
     * The name in the header column.
     */
    thText?: string;

    /**
     * A function that can be used to transform the data before displaying it in the table cell.
     * This function takes in the data object for the row and returns the transformed value.
     *
     * @param data The data object for the row.
     * @returns The transformed value to display in the table cell.
     */
    parse?: (data: T, i?: number) => any;
    /**
     * The columnOptions for table.
     */
    columnOptions?: {
        orderBy?: boolean;
        // showHidden?: boolean;
    };
    /**
     * The label to display in the header column.
     */
    defaultShowHidden?: "show" | "hidden";
    /**
     * The column width : 100% in new tr;
     */
    colNewTr?: boolean;

    isCollapse?: boolean;
    collapseProps?: Omit<CollapseProps, "children">;
    /**
     * The className of de column;
     */
    className?: string;
    hidden?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"T",required:!0},description:"The property key in the data object that corresponds to this header column."},{key:"th",value:{name:"ReactNode",required:!0},description:"The label to display in the header column."},{key:"thText",value:{name:"string",required:!1},description:"The name in the header column."},{key:"parse",value:{name:"signature",type:"function",raw:"(data: T, i?: number) => any",signature:{arguments:[{type:{name:"T"},name:"data"},{type:{name:"number"},name:"i"}],return:{name:"any"}},required:!1},description:`A function that can be used to transform the data before displaying it in the table cell.
This function takes in the data object for the row and returns the transformed value.

@param data The data object for the row.
@returns The transformed value to display in the table cell.`},{key:"columnOptions",value:{name:"signature",type:"object",raw:`{
    orderBy?: boolean;
    // showHidden?: boolean;
}`,signature:{properties:[{key:"orderBy",value:{name:"boolean",required:!1}}]},required:!1},description:"The columnOptions for table."},{key:"defaultShowHidden",value:{name:"union",raw:'"show" | "hidden"',elements:[{name:"literal",value:'"show"'},{name:"literal",value:'"hidden"'}],required:!1},description:"The label to display in the header column."},{key:"colNewTr",value:{name:"boolean",required:!1},description:"The column width : 100% in new tr;"},{key:"isCollapse",value:{name:"boolean",required:!1}},{key:"collapseProps",value:{name:"Omit",elements:[{name:"CollapseProps"},{name:"literal",value:'"children"'}],raw:'Omit<CollapseProps, "children">',required:!1}},{key:"className",value:{name:"string",required:!1},description:"The className of de column;"},{key:"hidden",value:{name:"boolean",required:!1}}]}}],raw:`{
    /**
     * The property key in the data object that corresponds to this header column.
     */
    id: keyof T;

    /**
     * The label to display in the header column.
     */
    th: ReactNode;
    /**
     * The name in the header column.
     */
    thText?: string;

    /**
     * A function that can be used to transform the data before displaying it in the table cell.
     * This function takes in the data object for the row and returns the transformed value.
     *
     * @param data The data object for the row.
     * @returns The transformed value to display in the table cell.
     */
    parse?: (data: T, i?: number) => any;
    /**
     * The columnOptions for table.
     */
    columnOptions?: {
        orderBy?: boolean;
        // showHidden?: boolean;
    };
    /**
     * The label to display in the header column.
     */
    defaultShowHidden?: "show" | "hidden";
    /**
     * The column width : 100% in new tr;
     */
    colNewTr?: boolean;

    isCollapse?: boolean;
    collapseProps?: Omit<CollapseProps, "children">;
    /**
     * The className of de column;
     */
    className?: string;
    hidden?: boolean;
}[]`},description:"The header configuration for the table."},pagination:{required:!1,tsType:{name:"Omit",elements:[{name:"PaginationProps"},{name:"literal",value:'"nItems"'}],raw:'Omit<PaginationProps, "nItems">'},description:"Optional pagination properties for the table."},loader:{required:!1,tsType:{name:"boolean"},description:"Whether to display a loader while the table data is being loaded.",defaultValue:{value:"false",computed:!1}},typeLoader:{required:!1,tsType:{name:"union",raw:'"spinner" | "line"',elements:[{name:"literal",value:'"spinner"'},{name:"literal",value:'"line"'}]},description:`typeLoader for show loader.
@default "line"`,defaultValue:{value:'"line"',computed:!1}},useCheckbox:{required:!1,tsType:{name:"boolean"},description:"If use checkbox in table.",defaultValue:{value:"true",computed:!1}},onChecked:{required:!1,tsType:{name:"signature",type:"function",raw:"(items: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"items"}],return:{name:"void"}}},description:"If on checked items."},onOrderBy:{required:!1,tsType:{name:"signature",type:"function",raw:'(order: { id: keyof T; order: "ASC" | "DESC" }) => void',signature:{arguments:[{type:{name:"signature",type:"object",raw:'{ id: keyof T; order: "ASC" | "DESC" }',signature:{properties:[{key:"id",value:{name:"T",required:!0}},{key:"order",value:{name:"union",raw:'"ASC" | "DESC"',elements:[{name:"literal",value:'"ASC"'},{name:"literal",value:'"DESC"'}],required:!0}}]}},name:"order"}],return:{name:"void"}}},description:"onOrderBy table."},notResult:{required:!1,tsType:{name:"ReactNode"},description:"notResult the table.",defaultValue:{value:"<div>There is not results</div>",computed:!1}},showPagination:{required:!1,tsType:{name:"boolean"},description:"If use checkbox in table.",defaultValue:{value:"true",computed:!1}},actionsCheckbox:{required:!1,tsType:{name:"Omit",elements:[{name:"TableActionCheckboxProps",elements:[{name:"T"}],raw:"TableActionCheckboxProps<T>"},{name:"union",raw:'"actionAllCheckbox" | "data"',elements:[{name:"literal",value:'"actionAllCheckbox"'},{name:"literal",value:'"data"'}]}],raw:`Omit<
    TableActionCheckboxProps<T>,
    "actionAllCheckbox" | "data"
>`},description:""},actionsCheckboxSelectAll:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'"Select All"',computed:!1}},restartPaginationInRenderTable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["_TProps"]};export{re as T};
