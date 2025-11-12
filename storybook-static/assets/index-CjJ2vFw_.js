import{r as i,R as e}from"./index-BBqxgoSh.js";import{C as $}from"./index-UDiPf84S.js";import{P as q}from"./index-0EQipDFN.js";const h=({className:u="",classNameBg:d="",classNameContent:c="",classNameClose:f="",active:a=!1,activeName:p,activeNameLast:v,childrenUseActiveForShowHidden:o=!1,disabledClose:l=!1,type:n="center",typeClose:g="out",onClose:t,children:b,useRender:s=!0,name:y,closeComponent:T=e.createElement($.SvgClose,null)})=>{const r=i.useMemo(()=>new Date().getTime(),[a]),m=i.useMemo(()=>e.createElement(e.Fragment,null,e.createElement("div",{onClick:l?()=>{}:t,className:`fenext-modal-base-close fenext-modal-base-close-${n}  fenext-modal-base-close-${a?"active":"inactive"} ${f}`},T)),[t,n,a,f,l,T]),x=i.useMemo(()=>e.createElement(e.Fragment,null,e.createElement("dialog",{open:a,className:`
                        fenext-modal-base-dialog
                        fenext-modal-base-dialog-close-${g}
                        fenext-modal-base-dialog-${a?"active":"inactive"}
                        fenext-modal-base-dialog-name-${p?"active":"inactive"}
                        fenext-modal-base-dialog-name-last-${v?"active":"inactive"}
                        fenext-modal-base-dialog-disabled-close-${l?"active":"inactive"}
                    `,"data-name":y},e.createElement("div",{className:`fenext-modal-base-bg fenext-modal-base-bg-${a?"active":"inactive"} ${d} `}),e.createElement("div",{className:`
                            fenext-modal-base
                            fenext-modal-base-bg-close 
                            fenext-modal-base-bg-close-${r} 
                            fenext-modal-base-${a?"active":"inactive"}
                            fenext-modal-base-${s?"use-render":"no-use-render"}
                            fenext-modal-base-${n}
                            ${u}
                        `,onClick:E=>{E.target.classList.value.includes(`fenext-modal-base-bg-close-${r}`)&&!l&&(t==null||t())}},e.createElement("div",{className:`fenext-modal-base-content ${c} `},m,(o&&a||!o)&&b)),m)),[m,o,a,p,v,b,r,c,u,n,d,l,g,s]);return s?e.createElement(e.Fragment,null,e.createElement(q,null,x)):e.createElement(e.Fragment,null,x)};h.__docgenInfo={description:"",methods:[],displayName:"ModalBase",props:{active:{required:!1,tsType:{name:"boolean"},description:"If active modal.",defaultValue:{value:"false",computed:!1}},activeName:{required:!1,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:"If active modal."},activeNameLast:{required:!1,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:"If active modal."},childrenUseActiveForShowHidden:{required:!1,tsType:{name:"boolean"},description:"If active modal.",defaultValue:{value:"false",computed:!1}},disabledClose:{required:!1,tsType:{name:"boolean"},description:"If disabled close modal.",defaultValue:{value:"false",computed:!1}},useRender:{required:!1,tsType:{name:"boolean"},description:"If disabled close modal.",defaultValue:{value:"true",computed:!1}},type:{required:!1,tsType:{name:"union",raw:`| "top"
| "left"
| "right"
| "bottom"
| "center"
| "full"
| "layout-grid"
| "top-right"
| "top-left"
| "bottom-right"
| "bottom-left"`,elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"center"'},{name:"literal",value:'"full"'},{name:"literal",value:'"layout-grid"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"Type of modal.",defaultValue:{value:'"center"',computed:!1}},typeClose:{required:!1,tsType:{name:"union",raw:'"out" | "inset" | "none"',elements:[{name:"literal",value:'"out"'},{name:"literal",value:'"inset"'},{name:"literal",value:'"none"'}]},description:"Type of btn close for modal.",defaultValue:{value:'"out"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClose ModalBase."},name:{required:!1,tsType:{name:"string"},description:"name of Modal."},nameLocalStorage:{required:!1,tsType:{name:"string"},description:"nameLocalStorage of Modal."},closeComponent:{required:!1,tsType:{name:"ReactNode"},description:"closeComponent of Modal.",defaultValue:{value:"<SvgClose />",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameBg:{required:!1,tsType:{name:"string"},description:"The class name for Bg the component.",defaultValue:{value:'""',computed:!1}},classNameClose:{required:!1,tsType:{name:"string"},description:"The class name for Icon Close the component.",defaultValue:{value:'""',computed:!1}},classNameContent:{required:!1,tsType:{name:"string"},description:"The class name for Content the component.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren"]};export{h as M};
