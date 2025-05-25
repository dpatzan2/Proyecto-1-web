import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{B as e}from"./Button-rde7CNWX.js";import"./index-B2-v9W4q.js";const N={title:"Calculator/ButtonVariants",component:e,parameters:{layout:"centered"},decorators:[r=>o.jsx("div",{className:"grid grid-cols-4 gap-2 p-4 bg-black rounded-xl",children:o.jsx(r,{})})]},s={render:()=>o.jsx(o.Fragment,{children:[1,2,3,4,5,6,7,8,9,0].map(r=>o.jsx(e,{onClick:()=>console.log(r),children:r},r))})},n={render:()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{className:"operador",value:"sumar",onClick:()=>console.log("+"),children:"+"}),o.jsx(e,{className:"operador",value:"restar",onClick:()=>console.log("-"),children:"-"}),o.jsx(e,{className:"operador",value:"multiplicar",onClick:()=>console.log("×"),children:"×"}),o.jsx(e,{className:"operador",value:"dividir",onClick:()=>console.log("÷"),children:"÷"}),o.jsx(e,{className:"operador",value:"igual",onClick:()=>console.log("="),children:"="})]})},a={render:()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{className:"borrar",onClick:()=>console.log("C"),children:"C"}),o.jsx(e,{className:"borrar",onClick:()=>console.log("←"),children:"←"}),o.jsx(e,{className:"masmenos",onClick:()=>console.log("+/-"),children:"+/-"}),o.jsx(e,{onClick:()=>console.log("."),children:"."})]})};var l,t,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => <Button key={num} onClick={() => console.log(num)}>
          {num}
        </Button>)}
    </>
}`,...(c=(t=s.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,u,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <>
      <Button className="operador" value="sumar" onClick={() => console.log('+')}>
        +
      </Button>
      <Button className="operador" value="restar" onClick={() => console.log('-')}>
        -
      </Button>
      <Button className="operador" value="multiplicar" onClick={() => console.log('×')}>
        ×
      </Button>
      <Button className="operador" value="dividir" onClick={() => console.log('÷')}>
        ÷
      </Button>
      <Button className="operador" value="igual" onClick={() => console.log('=')}>
        =
      </Button>
    </>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      <Button className="borrar" onClick={() => console.log('C')}>
        C
      </Button>
      <Button className="borrar" onClick={() => console.log('←')}>
        ←
      </Button>
      <Button className="masmenos" onClick={() => console.log('+/-')}>
        +/-
      </Button>
      <Button onClick={() => console.log('.')}>
        .
      </Button>
    </>
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const j=["NumberButtons","OperatorButtons","FunctionButtons"];export{a as FunctionButtons,s as NumberButtons,n as OperatorButtons,j as __namedExportsOrder,N as default};
