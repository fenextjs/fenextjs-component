import{r as P,R as e}from"./index-BBqxgoSh.js";import{I as S}from"./index-DYgVQJxj.js";import{T as d}from"./index-wQvC5aRk.js";import{B as C}from"./index-D8WbSO0i.js";import{T as g}from"./index-Bi6rBiWt.js";import{U as l}from"./index-D5_d9Yh2.js";import{C as I}from"./index-Be-jCVRy.js";import{u as b}from"./index-DzUbadkt.js";import{C as k}from"./index-UDiPf84S.js";import{c as V}from"./index-CZnEoGlV.js";import"./index-D35yvkiQ.js";import{L as U}from"./index-Bl1n06N9.js";import"./index-BvGAx8bm.js";import"./index-Cc2-Ys_d.js";import{E as L}from"./index-D8jwU641.js";import{L as O}from"./index-6IXve3BX.js";const _=({className:h="",btn:E="Choose File",icon:s=e.createElement(e.Fragment,null,e.createElement(l.SvgUpload2,null)),text:N="Drag and drop your file or template here.",title:i="Drag and drop here",defaultValue:T={fileData:"",text:""},onChange:v,iconLoader:x=e.createElement(U,null),onUploadFile:D,contentByStatus:m={},...o})=>{var c,p,f;const{_t:n}=V.use_T({...o}),a=P.useMemo(()=>({APPROVED:{title:"Approved!",tag:"Accepted",icon:e.createElement(I.SvgCheck,null)},REFUSED:{title:"Refused! go up again",tag:"Denied",icon:e.createElement(l.SvgUpload2,null)},PENDING:{title:"Pending",tag:"Pending",icon:e.createElement(l.SvgUpload2,null)},...m}),[m]),{data:t,setData:R,dataError:r,onSubmitData:F,loaderSubmit:u}=b.useData(T,{onChangeDataAfter:v,onSubmitData:D});return e.createElement(e.Fragment,null,e.createElement("div",{className:`fenext-input-file-status fenext-input-file-status-${(t==null?void 0:t.status)??"NONE"} ${h}`},!r&&!u&&(t!=null&&t.fileData)&&(t==null?void 0:t.fileData)!=""?e.createElement(e.Fragment,null,e.createElement("div",{className:"fenext-input-file-status-up "},e.createElement(d,{className:"fenext-input-file-status-title "},n(((c=a==null?void 0:a[(t==null?void 0:t.status)??"NONE"])==null?void 0:c.title)??i)),e.createElement("div",{className:"fenext-input-file-status-content-icon"},((p=a==null?void 0:a[(t==null?void 0:t.status)??"NONE"])==null?void 0:p.icon)??s),e.createElement("div",{className:"fenext-input-file-status-tag"},e.createElement(g,null,n((f=a==null?void 0:a[(t==null?void 0:t.status)??"NONE"])==null?void 0:f.tag))),e.createElement(O,{href:(t==null?void 0:t.url)??(t==null?void 0:t.base64)??(t==null?void 0:t.fileData),target:"_blank",className:"fenext-input-file-status-link "},t.text),!o.disabled&&e.createElement("div",{className:"fenext-input-file-status-remove ",onClick:()=>{R({fileData:"",text:""})}},e.createElement(k.SvgClose,null)))):e.createElement(e.Fragment,null,e.createElement(S,{onChange:y=>{F({data:y,onSaveData:({result:q})=>q})},parseProgress:()=>"",...o,_t:n},e.createElement("div",{className:"fenext-input-file-status-up "},e.createElement(d,{className:"fenext-input-file-status-title "},n(i)),e.createElement("div",{className:"fenext-input-file-status-content-icon"},u?x:s),e.createElement(C,{className:"fenext-input-file-status-btn "},n(E)),e.createElement(g,{className:"fenext-input-file-status-text "},n(N)),r&&e.createElement(L,{error:r}))))))};_.__docgenInfo={description:"",methods:[],displayName:"InputFileStatus",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"The Title for the component.",defaultValue:{value:'"Drag and drop here"',computed:!1}},text:{required:!1,tsType:{name:"ReactNode"},description:"The Text for the component.",defaultValue:{value:'"Drag and drop your file or template here."',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"The Icon for the component.",defaultValue:{value:`<>
    <SvgUpload2 />
</>`,computed:!1}},btn:{required:!1,tsType:{name:"ReactNode"},description:"The Buton for the component.",defaultValue:{value:'"Choose File"',computed:!1}},iconLoader:{required:!1,tsType:{name:"ReactNode"},description:"The Icon for the component.",defaultValue:{value:"<LoaderSpinner />",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"className for the component.",defaultValue:{value:'""',computed:!1}},onUploadFile:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FileProps) => Promise<FileProps>",signature:{arguments:[{type:{name:"FileProps"},name:"data"}],return:{name:"Promise",elements:[{name:"FileProps"}],raw:"Promise<FileProps>"}}},description:""},contentByStatus:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    [id in FileStatus]?: {
        /**
         * The Title for the component.
         */
        title?: ReactNode;
        /**
         * The Icon for the component.
         */
        icon?: ReactNode;
        /**
         * The Tag for the component.
         */
        tag?: ReactNode;
    };
}`,signature:{properties:[{key:{name:"FileStatus",required:!1},value:{name:"signature",type:"object",raw:`{
    /**
     * The Title for the component.
     */
    title?: ReactNode;
    /**
     * The Icon for the component.
     */
    icon?: ReactNode;
    /**
     * The Tag for the component.
     */
    tag?: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"ReactNode",required:!1},description:"The Title for the component."},{key:"icon",value:{name:"ReactNode",required:!1},description:"The Icon for the component."},{key:"tag",value:{name:"ReactNode",required:!1},description:"The Tag for the component."}]}}}]}},description:"",defaultValue:{value:"{}",computed:!1}},defaultValue:{defaultValue:{value:`{
    fileData: "",
    text: "",
}`,computed:!1},required:!1}},composes:["Omit"]};export{_ as I};
