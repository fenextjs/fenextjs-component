import{R as t,r as S}from"./index-BBqxgoSh.js";import{I as m}from"./index-DBcz8dhn.js";import{B as C}from"./index-D8WbSO0i.js";import"./index-BKb5pebY.js";import"./index-Du2DAyME.js";import"./tslib.es6-C9UhgGSc.js";import"./index-CPZvGnUQ.js";import"./index-C32pR_7g.js";import"./index-TcbpLnMg.js";import"./index-x-fCjU8z.js";import"./index-CQJprGOI.js";import"./index-vyi8JLgO.js";import"./index-D35yvkiQ.js";import"./index-Bl1n06N9.js";import"./index-BvGAx8bm.js";import"./index-Cc2-Ys_d.js";import"./index-CZnEoGlV.js";import"./index-BJ2T6C-n.js";import"./index-BB8rKSmh.js";import"./jsx-runtime-BVQtQVbZ.js";import"./index-yfAGLdLW.js";import"./index-D8jwU641.js";import"./index-Bi1ewI2z.js";import"./index-CEBH2dTZ.js";import"./index-C2XFtLQo.js";import"./index-InSCsFzB.js";import"./index-DdO2LMUc.js";import"./index-Xkddui4_.js";import"./index-Be-jCVRy.js";import"./index-BXrP2bqi.js";import"./index-Cb4Ah1Ye.js";import"./index-DeIw5-6n.js";import"./index-0i6QVfK7.js";import"./index-D_KGGjK9.js";import"./index-DrlceRtT.js";import"./index-CXOJfOwq.js";import"./index-DxiXoV3a.js";import"./index-DKxS3Qg6.js";import"./index-kniBM-Wq.js";import"./index-DWDuSSB6.js";import"./index-Df43MoJj.js";import"./index-HxjA9CEY.js";import"./index-CVODKsTk.js";import"./index-B0tmvyOY.js";import"./index-ClflSG7M.js";import"./index-CPAwv7Fb.js";import"./index-CofDBJZQ.js";import"./index-DzUbadkt.js";import"./index-gxLnlGQN.js";const Ct={title:"Input/InputSelectState",component:m},y=e=>t.createElement(m,{...e},"Test Children"),o=y.bind({}),g={};o.args=g;const I=e=>{const[n,d]=S.useState({}),l=()=>{d({country:{id:82,text:"Colombia",code:"CO",code_phone:"+57"}})};return t.createElement(t.Fragment,null,t.createElement(m,{...e,country:n==null?void 0:n.country}),t.createElement(C,{onClick:l},"onSetCountry"))},r=I.bind({}),x={};r.args=x;var p,i,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"args => <InputSelectState {...args}>Test Children</InputSelectState>",...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,c,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [data, setData] = useState<any>({});
  const onSetCountry = () => {
    setData({
      country: {
        "id": 82,
        "text": "Colombia",
        "code": "CO",
        "code_phone": "+57"
      }
    });
  };
  return <>
            <InputSelectState {...args} country={data?.country} />
            <Button onClick={onSetCountry}>
                onSetCountry
            </Button>
        </>;
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const yt=["Index","IndexState"];export{o as Index,r as IndexState,yt as __namedExportsOrder,Ct as default};
