import{R as e,r as I}from"./index-BBqxgoSh.js";import{c as n}from"./index-XBs5YK1k.js";import{B as S}from"./index-MYQWERMd.js";import{I as s}from"./index-VatYQxfO.js";import"./index-ac8kB312.js";import"./index-Du2DAyME.js";import"./tslib.es6-C9UhgGSc.js";import"./index-CPZvGnUQ.js";import"./index-C32pR_7g.js";import"./index-BJ2T6C-n.js";import"./index-DKMUAJY5.js";import"./jsx-runtime-Bqk9vzZ-.js";import"./index-D35yvkiQ.js";import"./index-Bl1n06N9.js";import"./index-BvGAx8bm.js";import"./index-Cc2-Ys_d.js";import"./index-DxxMHRyz.js";import"./index-vyi8JLgO.js";import"./index-Bg1qUNzi.js";import"./index-Bi1ewI2z.js";import"./index-BKb5pebY.js";import"./index-Cwdnv_Ii.js";import"./index-DnVvUm7Y.js";import"./index-CkClQ9dC.js";import"./index-C2XFtLQo.js";import"./index-InSCsFzB.js";import"./index-DdO2LMUc.js";import"./index-CZ4AN7H4.js";import"./index-Be-jCVRy.js";import"./index-BXrP2bqi.js";import"./index-Cb4Ah1Ye.js";import"./index-DeIw5-6n.js";import"./index-0i6QVfK7.js";import"./index-D_KGGjK9.js";import"./index-DrlceRtT.js";import"./index-CXOJfOwq.js";import"./index-DxiXoV3a.js";import"./index-DKxS3Qg6.js";import"./index-kniBM-Wq.js";import"./index-DWDuSSB6.js";import"./index-Df43MoJj.js";import"./index-HxjA9CEY.js";import"./index-CVODKsTk.js";import"./index-B0tmvyOY.js";import"./index-ClflSG7M.js";import"./index-CPAwv7Fb.js";import"./index-CofDBJZQ.js";import"./index-DzUbadkt.js";import"./index-gxLnlGQN.js";const Se={title:"Input/InputPhone",component:s},V=a=>e.createElement(s,{...a},"Test Children"),r=V.bind({}),U={label:"Label"};r.args=U;const t=V.bind({}),f={label:"Label",placeholder:"Placeholder",validator:n.FenextjsValidator().setName("phone").isObject({code:n.FenextjsValidator().isString().isRequired(),number:n.FenextjsValidator().isString().isRequired().isMinOrEqual(9)})};t.args=f;const x=a=>{const[P,i]=I.useState({code_country:"US",code:"+1",number:"33333",tel:"+1 3333"});return e.createElement(e.Fragment,null,e.createElement(s,{...a,value:P,onChange:i}),e.createElement(S,{onClick:()=>{i({code_country:"US",code:"+58",number:"22222",tel:"+58 22222"})}},"set value"))},o=x.bind({}),_={label:"Label",defaultValue:{}};o.args=_;var m,p,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"args => <InputPhone {...args}>Test Children</InputPhone>",...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"args => <InputPhone {...args}>Test Children</InputPhone>",...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<Partial<PhoneProps>>({
    code_country: "US",
    code: "+1",
    number: "33333",
    tel: "+1 3333"
  });
  return <>
            <InputPhone {...args} value={value} onChange={setValue} />
            <Button onClick={() => {
      setValue({
        code_country: "US",
        code: "+58",
        number: "22222",
        tel: "+58 22222"
      });
    }}>set value</Button>
        </>;
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Ue=["Index","UseValidator","UseValue"];export{r as Index,t as UseValidator,o as UseValue,Ue as __namedExportsOrder,Se as default};
