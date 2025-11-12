import{R as t}from"./index-BBqxgoSh.js";import{c as u}from"./index-ac8kB312.js";import{A as m}from"./index-B0bcc3F-.js";import{B as s}from"./index-MYQWERMd.js";import"./index-Du2DAyME.js";import"./tslib.es6-C9UhgGSc.js";import"./index-CPZvGnUQ.js";import"./index-C32pR_7g.js";import"./index-BJ2T6C-n.js";import"./index-DKMUAJY5.js";import"./jsx-runtime-Bqk9vzZ-.js";import"./index-B2Gy5a0B.js";import"./index-0i6QVfK7.js";import"./index-D_KGGjK9.js";import"./index-DrlceRtT.js";import"./index-CXOJfOwq.js";import"./index-DxiXoV3a.js";import"./index-DKxS3Qg6.js";import"./index-DeIw5-6n.js";import"./index-kniBM-Wq.js";import"./index-DWDuSSB6.js";import"./index-Df43MoJj.js";import"./index-HxjA9CEY.js";import"./index-CVODKsTk.js";import"./index-B0tmvyOY.js";import"./index-InSCsFzB.js";import"./index-ClflSG7M.js";import"./index-CPAwv7Fb.js";import"./index-BXrP2bqi.js";import"./index-CofDBJZQ.js";import"./index-D35yvkiQ.js";import"./index-Bl1n06N9.js";import"./index-BvGAx8bm.js";import"./index-Cc2-Ys_d.js";const Y={title:"Component/AlertHook",component:m},A=p=>{const{setAlert:r}=u.useAlert({}),n={message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ullam voluptatum dignissimos deserunt quasi nihil",type:"OK"},l={...n},c={...n,type:"ERROR"},g={...n,type:"NORMAL"},R={...n,type:"WARNING"};return t.createElement(t.Fragment,null,t.createElement("div",{style:{display:"grid",gap:"1rem"}},t.createElement(m,{...p}),t.createElement(s,{onClick:()=>{r(l)}},"Test generate alert OK"),t.createElement(s,{onClick:()=>{r(c)}},"Test generate alert ERROR"),t.createElement(s,{onClick:()=>{r(g)}},"Test generate alert NORMAL"),t.createElement(s,{onClick:()=>{r(R)}},"Test generate alert WARNING")))},B={},e=A.bind({});e.args=B;var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const {
    setAlert
  } = useAlert({});
  const argsBase: AlertProps = {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ullam voluptatum dignissimos deserunt quasi nihil",
    type: "OK"
  };
  const argsBaseOK: AlertProps = {
    ...argsBase
  };
  const argsBaseERROR: AlertProps = {
    ...argsBase,
    type: "ERROR"
  };
  const argsBaseNORMAL: AlertProps = {
    ...argsBase,
    type: "NORMAL"
  };
  const argsBaseWARNING: AlertProps = {
    ...argsBase,
    type: "WARNING"
  };
  return <>
            <div style={{
      display: "grid",
      gap: "1rem"
    }}>
            <AlertHook {...args} />
            <Button onClick={() => {
        setAlert(argsBaseOK);
      }}>
                Test generate alert OK
            </Button>
            <Button onClick={() => {
        setAlert(argsBaseERROR);
      }}>
                Test generate alert ERROR
            </Button>
            <Button onClick={() => {
        setAlert(argsBaseNORMAL);
      }}>
                Test generate alert NORMAL
            </Button>
            <Button onClick={() => {
        setAlert(argsBaseWARNING);
      }}>
                Test generate alert WARNING
            </Button>
            </div>
        </>;
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const Z=["Index"];export{e as Index,Z as __namedExportsOrder,Y as default};
