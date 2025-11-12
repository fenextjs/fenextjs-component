import{G as E}from"./index-DNxnaTaG.js";import{B as P}from"./index-D8WbSO0i.js";import{I as V}from"./index-DSsUWLOF.js";import{r as p,R as e}from"./index-BBqxgoSh.js";import{c as q}from"./index-CZnEoGlV.js";const N=({className:f="",classNameContentButton:d="",classNameButton:o={},textBtn:y="Add More Images",defaultValue:x=[{fileData:"",text:""},{fileData:"",text:""},{fileData:"",text:""},{fileData:"",text:""},{fileData:"",text:""}],value:i=void 0,onChange:t,...u})=>{const{_t:s}=q.use_T({...u}),[c,m]=p.useState(x),v=n=>a=>{m(l=>{const r=[...l];return r[n]=a,t==null||t(r),r})},I=()=>{m(n=>{const a=[...n,{fileData:"",text:""}];return t==null||t(a),a})},D=n=>()=>{m(a=>{const l=[...a].filter((r,F)=>r&&n!=F);return t==null||t(l),l})},T=p.useMemo(()=>(i??c).map((n,a)=>e.createElement(e.Fragment,null,e.createElement(V,{...u,defaultValue:n,onChange:v(a),onRemove:D(a),_t:s}))),[c,i,s]);return e.createElement(e.Fragment,null,e.createElement("div",{className:`fenext-input-gallery ${f} `},e.createElement(E,{items:[...T,e.createElement(e.Fragment,null,e.createElement("div",{className:`fenext-input-gallery-content-btn ${d}`},e.createElement(P,{...o,className:`fenext-input-gallery-btn-add ${o.className}`,onClick:I},s(y))))],_t:s})))};N.__docgenInfo={description:"",methods:[],displayName:"InputGallery",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"FileProps"}],raw:"FileProps[]"},description:"Default value for the input element",defaultValue:{value:`[
    {
        fileData: "",
        text: "",
    },
    {
        fileData: "",
        text: "",
    },
    {
        fileData: "",
        text: "",
    },
    {
        fileData: "",
        text: "",
    },
    {
        fileData: "",
        text: "",
    },
]`,computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"FileProps"}],raw:"FileProps[]"},description:"Default value for the input element",defaultValue:{value:"undefined",computed:!0}},textBtn:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'"Add More Images"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(items: FileProps[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"FileProps"}],raw:"FileProps[]"},name:"items"}],return:{name:"void"}}},description:"on Remove Img for the component."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameContentButton:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameButton:{required:!1,tsType:{name:"ButtonClassProps"},description:"The class name for the component.",defaultValue:{value:"{}",computed:!1}}},composes:["Omit","_TProps"]};export{N as I};
