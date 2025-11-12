import{R as e}from"./index-BBqxgoSh.js";import{S as m}from"./index-CmNRlA14.js";import{T as s}from"./index-Bui4fr9S.js";import"./index-DZWc7RQZ.js";import"./index-CdnBSmYr.js";import"./index-Be-jCVRy.js";import"./index-BXrP2bqi.js";import"./tslib.es6-C9UhgGSc.js";import"./index-vyi8JLgO.js";import"./index-Du2DAyME.js";import"./index-CPZvGnUQ.js";import"./index-C32pR_7g.js";import"./index-ac8kB312.js";import"./index-BJ2T6C-n.js";import"./index-DKMUAJY5.js";import"./jsx-runtime-Bqk9vzZ-.js";import"./index-0i6QVfK7.js";import"./index-D_KGGjK9.js";import"./index-DrlceRtT.js";import"./index-CXOJfOwq.js";import"./index-DxiXoV3a.js";import"./index-DKxS3Qg6.js";import"./index-DeIw5-6n.js";import"./index-kniBM-Wq.js";import"./index-DWDuSSB6.js";import"./index-Df43MoJj.js";import"./index-HxjA9CEY.js";import"./index-CVODKsTk.js";import"./index-B0tmvyOY.js";import"./index-InSCsFzB.js";import"./index-ClflSG7M.js";import"./index-CPAwv7Fb.js";import"./index-CofDBJZQ.js";import"./index-CVmAgRi2.js";import"./index-YD-hy5qW.js";import"./index-BY1EaQD3.js";import"./index-CVXMKXG_.js";import"./index-CHikfJJq.js";import"./index-Cwdnv_Ii.js";import"./index-DnVvUm7Y.js";import"./index-DxxMHRyz.js";import"./index-D35yvkiQ.js";import"./index-Bl1n06N9.js";import"./index-BvGAx8bm.js";import"./index-Cc2-Ys_d.js";import"./index-XBs5YK1k.js";import"./index-Bg1qUNzi.js";import"./index-Bi1ewI2z.js";import"./index-CkClQ9dC.js";import"./index-C2XFtLQo.js";import"./index-DdO2LMUc.js";import"./index-CZ4AN7H4.js";import"./index-Cb4Ah1Ye.js";import"./index-DzUbadkt.js";import"./index-gxLnlGQN.js";import"./index-zclCW42w.js";import"./index-0EQipDFN.js";import"./index-DK0TXMcf.js";import"./index-DewEk3et.js";const $n={title:"SwichView/Table",component:m},u=d=>e.createElement(e.Fragment,null,e.createElement(m,{...d}),e.createElement(s,{name:"Usuarios",header:[{id:"id",th:"ID",parse:n=>e.createElement("a",{href:`#${n.id}`},n.id)},{id:"name",th:"Name",parse:n=>e.createElement("a",{href:`#${n.id}`},n.name),columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:n=>n.date.toDateString(),columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:({org:n})=>e.createElement("a",{href:`#${n==null?void 0:n.id}`},n==null?void 0:n.name),columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:({org:n})=>e.createElement("a",{href:`#${n==null?void 0:n.id}`},n==null?void 0:n.name),columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:({org:n})=>e.createElement("a",{href:`#${n==null?void 0:n.id}`},n==null?void 0:n.name),columnOptions:{orderBy:!0,showHidden:!0}}],items:new Array(50).fill(1).map((n,p)=>{const t=n*p+1;return{id:`${t}`,name:`Name ${t}`,date:new Date(1e8*t),dni:`000${t}`,amount:1e3*t,quanty:10*t,org:{id:`${t}`,name:`Organizacion ${t}`}}})})),r=u.bind({});r.args={};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => <>
        <SwichViewTable {...args} />
        <Table<TestItemTable> name="Usuarios" header={[{
    id: "id",
    th: "ID",
    parse: (data: TestItemTable) => {
      return <a href={\`#\${data.id}\`}>{data.id}</a>;
    }
  }, {
    id: "name",
    th: "Name",
    parse: (data: TestItemTable) => {
      return <a href={\`#\${data.id}\`}>{data.name}</a>;
    },
    columnOptions: {
      orderBy: true,
      showHidden: true
    }
  }, {
    id: "date",
    th: "Date",
    parse: (data: TestItemTable) => data.date.toDateString(),
    columnOptions: {
      orderBy: true,
      showHidden: true
    }
  }, {
    id: "dni",
    th: "Documento",
    columnOptions: {
      orderBy: true,
      showHidden: true
    }
  }, {
    id: "amount",
    th: "Monto",
    columnOptions: {
      orderBy: true,
      showHidden: true
    }
  }, {
    id: "quanty",
    th: "Cantidad",
    columnOptions: {
      orderBy: true,
      showHidden: true
    }
  }, {
    id: "org",
    th: "Organizacion",
    parse: ({
      org
    }: TestItemTable) => {
      return <a href={\`#\${org?.id}\`}>{org?.name}</a>;
    },
    columnOptions: {
      orderBy: true,
      showHidden: true
    },
    defaultShowHidden: "hidden"
  }, {
    id: "org",
    th: "Organizacion",
    parse: ({
      org
    }: TestItemTable) => {
      return <a href={\`#\${org?.id}\`}>{org?.name}</a>;
    },
    columnOptions: {
      orderBy: true,
      showHidden: true
    }
  }, {
    id: "org",
    th: "Organizacion",
    parse: ({
      org
    }: TestItemTable) => {
      return <a href={\`#\${org?.id}\`}>{org?.name}</a>;
    },
    columnOptions: {
      orderBy: true,
      showHidden: true
    }
  }]} items={new Array(50).fill(1).map((e, i) => {
    const n = e * i + 1;
    const r: TestItemTable = {
      id: \`\${n}\`,
      name: \`Name \${n}\`,
      date: new Date(100000000 * n),
      dni: \`000\${n}\`,
      amount: 1000 * n,
      quanty: 10 * n,
      org: {
        id: \`\${n}\`,
        name: \`Organizacion \${n}\`
      }
    };
    return r;
  })} />
    </>`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const fn=["Index"];export{r as Index,fn as __namedExportsOrder,$n as default};
