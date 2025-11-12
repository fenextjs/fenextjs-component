import{R as e}from"./index-BBqxgoSh.js";import{N as a}from"./index-DRqzxpr3.js";import{B as n}from"./index-MYQWERMd.js";import{c as R}from"./index-ac8kB312.js";import{R as s}from"./index-Du2DAyME.js";import"./index-CFhlv_rd.js";import"./index-UDiPf84S.js";import"./index-D_KGGjK9.js";import"./tslib.es6-C9UhgGSc.js";import"./index-tAIleF0H.js";import"./index-D35yvkiQ.js";import"./index-Bl1n06N9.js";import"./index-BvGAx8bm.js";import"./index-Cc2-Ys_d.js";import"./index-BJ2T6C-n.js";import"./index-DKMUAJY5.js";import"./jsx-runtime-Bqk9vzZ-.js";import"./index-CPZvGnUQ.js";import"./index-C32pR_7g.js";const L={title:"Notification/NotificationPop",component:a},c=m=>{const{pop:o}=R.useNotification({});return e.createElement(e.Fragment,null,e.createElement(n,{onClick:()=>{o({message:"Message OK",type:s.OK})}},"Test OK"),e.createElement(n,{onClick:()=>{o({message:"Message ERROR",type:s.ERROR})}},"Test ERROR"),e.createElement(n,{onClick:()=>{o({message:"Message WARNING",type:s.WARNING})}},"Test WARNING"),e.createElement(n,{onClick:()=>{o({message:"Message NORMAL",type:s.NORMAL})}},"Test NORMAL"),e.createElement(a,{...m}))},t=c.bind({});t.args={};var r,p,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const {
    pop
  } = useNotification({});
  return <>
            <Button onClick={() => {
      pop({
        message: "Message OK",
        type: RequestResultTypeProps.OK
      });
    }}>
                Test OK
            </Button>
            <Button onClick={() => {
      pop({
        message: "Message ERROR",
        type: RequestResultTypeProps.ERROR
      });
    }}>
                Test ERROR
            </Button>
            <Button onClick={() => {
      pop({
        message: "Message WARNING",
        type: RequestResultTypeProps.WARNING
      });
    }}>
                Test WARNING
            </Button>
            <Button onClick={() => {
      pop({
        message: "Message NORMAL",
        type: RequestResultTypeProps.NORMAL
      });
    }}>
                Test NORMAL
            </Button>
            <NotificationPop {...args} />
        </>;
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const W=["Index"];export{t as Index,W as __namedExportsOrder,L as default};
