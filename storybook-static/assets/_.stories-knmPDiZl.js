import{R as o,r as S}from"./index-BBqxgoSh.js";import{B as y}from"./index-D8WbSO0i.js";import{I as i}from"./index-CvO06FAu.js";import"./index-D35yvkiQ.js";import"./index-Bl1n06N9.js";import"./index-BvGAx8bm.js";import"./index-Cc2-Ys_d.js";import"./index-CZnEoGlV.js";import"./index-Du2DAyME.js";import"./tslib.es6-C9UhgGSc.js";import"./index-CPZvGnUQ.js";import"./index-C32pR_7g.js";import"./index-BJ2T6C-n.js";import"./index-BB8rKSmh.js";import"./jsx-runtime-BVQtQVbZ.js";import"./index-BKb5pebY.js";import"./index-TcbpLnMg.js";import"./index-x-fCjU8z.js";import"./index-CQJprGOI.js";import"./index-vyi8JLgO.js";import"./index-yfAGLdLW.js";import"./index-D8jwU641.js";import"./index-Bi1ewI2z.js";import"./index-CEBH2dTZ.js";import"./index-C2XFtLQo.js";import"./index-InSCsFzB.js";import"./index-DdO2LMUc.js";import"./index-Xkddui4_.js";import"./index-Be-jCVRy.js";import"./index-BXrP2bqi.js";import"./index-Cb4Ah1Ye.js";import"./index-DeIw5-6n.js";import"./index-0i6QVfK7.js";import"./index-D_KGGjK9.js";import"./index-DrlceRtT.js";import"./index-CXOJfOwq.js";import"./index-DxiXoV3a.js";import"./index-DKxS3Qg6.js";import"./index-kniBM-Wq.js";import"./index-DWDuSSB6.js";import"./index-Df43MoJj.js";import"./index-HxjA9CEY.js";import"./index-CVODKsTk.js";import"./index-B0tmvyOY.js";import"./index-ClflSG7M.js";import"./index-CPAwv7Fb.js";import"./index-CofDBJZQ.js";import"./index-DzUbadkt.js";import"./index-gxLnlGQN.js";const yt={title:"Input/InputSelectCity",component:i},C=n=>o.createElement(i,{...n},"Test Children"),r=C.bind({}),g={};r.args=g;const x=n=>{const[t,d]=S.useState({}),l=()=>{d({country:{id:82,text:"Colombia",code:"CO",code_phone:"+57"},state:{id:1700,id_country:82,text:"Antioquia"}})};return o.createElement(o.Fragment,null,o.createElement(i,{...n,country:t==null?void 0:t.country,state:t==null?void 0:t.state}),o.createElement(y,{onClick:l},"onSetCountryState"))},e=x.bind({}),I={};e.args=I;var m,p,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"args => <InputSelectCity {...args}>Test Children</InputSelectCity>",...(a=(p=r.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var s,c,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [data, setData] = useState<any>({});
  const onSetCountryState = () => {
    setData({
      country: {
        "id": 82,
        "text": "Colombia",
        "code": "CO",
        "code_phone": "+57"
      },
      state: {
        "id": 1700,
        "id_country": 82,
        "text": "Antioquia"
      }
    });
  };
  return <>
            <InputSelectCity {...args} country={data?.country} state={data?.state} />
            <Button onClick={onSetCountryState}>
                onSetCountryState
            </Button>
        </>;
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Ct=["Index","IndexState"];export{r as Index,e as IndexState,Ct as __namedExportsOrder,yt as default};
