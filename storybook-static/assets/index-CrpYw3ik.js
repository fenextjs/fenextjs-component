import{R as n}from"./index-BBqxgoSh.js";const s=({className:o="",nItems:l=20,styles:m={width:"100%",height:"500px",background:"linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-success) 100%)"},stylesElement:r=[{width:"150px",aspectRatio:"2/1.5",borderRadius:"30% 70% 70% 30% / 68% 30% 70% 32% ",background:"linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-success) 100%)",animationTimingFunction:"ease"},{width:"100px",aspectRatio:"1 / 1",borderRadius:"30% 70% 44% 56% / 23% 46% 54% 77% ",background:"linear-gradient(75deg,var(--fenext-color-primary) 0%,var(--fenext-color-secondary) 100%)",animationTimingFunction:"ease-out"},{width:"100px",aspectRatio:"1 / 1",borderRadius:"87% 13% 65% 35% / 46% 46% 54% 54% ",background:"linear-gradient(135deg,var(--fenext-color-primary) 0%,var(--fenext-color-secondary) 100%)",animationTimingFunction:"linear"}],ranges:e={}})=>{const a=({min:t,max:i})=>Math.trunc(Math.random()*(i-t)+t),c=()=>({top:`${a((e==null?void 0:e.top)??{min:20,max:80})}%`,left:`${a((e==null?void 0:e.left)??{min:20,max:80})}%`}),d=()=>({"--scale":a((e==null?void 0:e.scale)??{min:50,max:100})/10,"--move-X":`${a((e==null?void 0:e.moveX)??{min:-300,max:300})}%`,"--move-Y":`${a((e==null?void 0:e.moveY)??{min:-300,max:300})}%`,"--time":`${a((e==null?void 0:e.time)??{min:30,max:50})/10}s`});return n.createElement(n.Fragment,null,n.createElement("div",{className:`fenext-lava-lamp ${o} `,style:m},new Array(l).fill(1).map((t,i)=>n.createElement(n.Fragment,null,n.createElement("div",{key:t*i,className:"fenext-lava-lamp-item",style:{...r[Math.trunc(i%r.length)],...c(),...d()}})))))};s.__docgenInfo={description:"",methods:[],displayName:"LavaLamp",props:{nItems:{required:!1,tsType:{name:"number"},description:"The number items elements.",defaultValue:{value:"20",computed:!1}},styles:{required:!1,tsType:{name:"CSSProperties"},description:"The styles of elements.",defaultValue:{value:`{
    width: "100%",
    height: "500px",
    background: \`linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-success) 100%)\`,
}`,computed:!1}},ranges:{required:!1,tsType:{name:"LavaLampRangeStylesProps"},description:"The styles of elements.",defaultValue:{value:"{}",computed:!1}},stylesElement:{required:!1,tsType:{name:"Array",elements:[{name:"Pick",elements:[{name:"CSSProperties"},{name:"union",raw:`| "borderRadius"
| "aspectRatio"
| "width"
| "background"
| "animationTimingFunction"`,elements:[{name:"literal",value:'"borderRadius"'},{name:"literal",value:'"aspectRatio"'},{name:"literal",value:'"width"'},{name:"literal",value:'"background"'},{name:"literal",value:'"animationTimingFunction"'}]}],raw:`Pick<
    CSSProperties,
    | "borderRadius"
    | "aspectRatio"
    | "width"
    | "background"
    | "animationTimingFunction"
>`}],raw:"LavaLampStylesElement[]"},description:"The styles of elemens.",defaultValue:{value:`[
    {
        width: "150px",
        aspectRatio: "2/1.5",
        borderRadius: "30% 70% 70% 30% / 68% 30% 70% 32% ",
        background: \`linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-success) 100%)\`,
        animationTimingFunction: "ease",
    },
    {
        width: "100px",
        aspectRatio: "1 / 1",
        borderRadius: "30% 70% 44% 56% / 23% 46% 54% 77% ",
        background: \`linear-gradient(75deg,var(--fenext-color-primary) 0%,var(--fenext-color-secondary) 100%)\`,
        animationTimingFunction: "ease-out",
    },
    {
        width: "100px",
        aspectRatio: "1 / 1",
        borderRadius: "87% 13% 65% 35% / 46% 46% 54% 54% ",
        background: \`linear-gradient(135deg,var(--fenext-color-primary) 0%,var(--fenext-color-secondary) 100%)\`,
        animationTimingFunction: "linear",
    },
]`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}};export{s as L};
