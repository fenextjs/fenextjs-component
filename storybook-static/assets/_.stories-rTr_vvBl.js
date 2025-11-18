import{R as t}from"./index-BBqxgoSh.js";import{T as c}from"./index-Dx1KlTsI.js";import"./index-0EQipDFN.js";import"./index-gxLnlGQN.js";import"./index-ac8kB312.js";import"./index-Du2DAyME.js";import"./tslib.es6-C9UhgGSc.js";import"./index-CPZvGnUQ.js";import"./index-C32pR_7g.js";import"./index-BJ2T6C-n.js";import"./index-DKMUAJY5.js";import"./jsx-runtime-Bqk9vzZ-.js";const P={title:"Tooltip/Tooltip",component:c},m=a=>{const r=(e,o)=>t.createElement(t.Fragment,null,t.createElement(c,{tooltip:t.createElement(t.Fragment,null,t.createElement("h4",null,"tooltip"),t.createElement("h3",null,"x-",e," - y-",o)),positionX:e,positionY:o,...a},t.createElement("h1",null,"x-",e," - y-",o))),n=(e,o)=>t.createElement(t.Fragment,null,t.createElement("div",{style:{display:"flex",gap:"10px"}},r(e,o),t.createElement("div",{style:{flex:"1"}}),r(e,o),t.createElement("div",{style:{flex:"1"}}),r(e,o)));return t.createElement("div",{style:{padding:"50px",minHeight:"100dvh",display:"flex",flexDirection:"column",gap:"50px",justifyContent:"space-between"}},n("center","top"),n("right","top"),n("left","top"),n("center","center"),n("right","center"),n("left","center"),n("center","bottom"),n("right","bottom"),n("left","bottom"))},i=m.bind({});i.args={};var l,p,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const fn_tooltip = (x: TooltipPositionX, y: TooltipPositionY) => {
    return <>
                <Tooltip tooltip={<>
                            <h4>tooltip</h4>
                            <h3>
                                x-{x} - y-{y}
                            </h3>
                        </>} positionX={x} positionY={y} {...args}>
                    <h1>
                        x-{x} - y-{y}
                    </h1>
                </Tooltip>
            </>;
  };
  const fn_ = (x: TooltipPositionX, y: TooltipPositionY) => {
    return <>
                <div style={{
        display: "flex",
        gap: "10px"
      }}>
                    {fn_tooltip(x, y)}
                    <div style={{
          flex: "1"
        }}></div>
                    {fn_tooltip(x, y)}
                    <div style={{
          flex: "1"
        }}></div>
                    {fn_tooltip(x, y)}
                </div>
            </>;
  };
  return <div style={{
    padding: "50px",
    minHeight: "100dvh",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    justifyContent: "space-between"
  }}>
            {fn_("center", "top")}
            {fn_("right", "top")}
            {fn_("left", "top")}
            {fn_("center", "center")}
            {fn_("right", "center")}
            {fn_("left", "center")}
            {fn_("center", "bottom")}
            {fn_("right", "bottom")}
            {fn_("left", "bottom")}
        </div>;
}`,...(s=(p=i.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const X=["Index"];export{i as Index,X as __namedExportsOrder,P as default};
