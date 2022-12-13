var p=Object.defineProperty;var l=(n,e)=>p(n,"name",{value:e,configurable:!0});import{I as u,r as h,i as r}from"./index.31a7a44d.js";import{a as t,F as s,j as o}from"./jsx-runtime.4d4432c3.js";import{r as f}from"./index.5cc34776.js";import"./index.83ef47c2.js";import"./iframe.0cb4cefd.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";var i=new Map;i.set("bold",function(n){return t(s,{children:[o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o("circle",{cx:"128",cy:"176",r:"16"}),o("path",{d:"M128,136a28,28,0,1,0-28-28",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});i.set("duotone",function(n){return t(s,{children:[o("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o("circle",{cx:"128",cy:"180",r:"12"}),o("path",{d:"M128,144v-8a28,28,0,1,0-28-28",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});i.set("fill",function(){return o(s,{children:o("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.9v.9a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8,20,20,0,1,0-20-20,8,8,0,0,1-16,0,36,36,0,1,1,44,35.1Z"})})});i.set("light",function(n){return t(s,{children:[o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o("circle",{cx:"128",cy:"180",r:"10"}),o("path",{d:"M128,144v-8a28,28,0,1,0-28-28",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});i.set("thin",function(n){return t(s,{children:[o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o("circle",{cx:"128",cy:"180",r:"8"}),o("path",{d:"M128,144v-8a28,28,0,1,0-28-28",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});i.set("regular",function(n){return t(s,{children:[o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o("circle",{cx:"128",cy:"180",r:"12"}),o("path",{d:"M128,144v-8a28,28,0,1,0-28-28",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var k=l(function(e,d){return h(e,d,i)},"renderPath"),c=f.exports.forwardRef(function(n,e){return o(u,{...Object.assign({ref:e},n,{renderPath:k})})});c.displayName="Question";const a=c,C={title:"Overlay/Tooltip",component:r.Content,args:{side:"top",align:"center",children:"26 de Outubro - Dispon\xEDvel",sideOffset:8},argTypes:{side:{options:["top","right","bottom","left"],control:{type:"inline-radio"}},align:{options:["start","center","end"],control:{type:"inline-radio"}}},parameters:{storySource:{source:`import { Meta } from '@storybook/react'
import { Tooltip, TooltipContentProps } from '@ignite-ui/react'
import { Question } from 'phosphor-react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip.Content,
  args: {
    side: 'top',
    align: 'center',
    children: '26 de Outubro - Dispon\xEDvel',
    sideOffset: 8,
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      options: ['start', 'center', 'end'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<TooltipContentProps>

export const Primary = ({ children, ...rest }: TooltipContentProps) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Question size={24} color="#fff" />
        </Tooltip.Trigger>
        <Tooltip.Content {...rest}>
          {children}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export const WithoutArrow = (args: TooltipContentProps) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Question size={24} color="#fff" />
        </Tooltip.Trigger>
        <Tooltip.Content {...args} />
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
`,locationsMap:{primary:{startLoc:{col:23,line:33},endLoc:{col:1,line:47},startBody:{col:23,line:33},endBody:{col:1,line:47}},"without-arrow":{startLoc:{col:28,line:49},endLoc:{col:1,line:60},startBody:{col:28,line:49},endBody:{col:1,line:60}}}},layout:"centered"}},W=l(({children:n,...e})=>o(r.Provider,{children:t(r.Root,{children:[o(r.Trigger,{asChild:!0,children:o(a,{size:24,color:"#fff"})}),t(r.Content,{...e,children:[n,o(r.Arrow,{})]})]})}),"Primary"),j=l(n=>o(r.Provider,{children:t(r.Root,{children:[o(r.Trigger,{asChild:!0,children:o(a,{size:24,color:"#fff"})}),o(r.Content,{...n})]})}),"WithoutArrow"),M=["Primary","WithoutArrow"];export{W as Primary,j as WithoutArrow,M as __namedExportsOrder,C as default};
//# sourceMappingURL=Tooltip.stories.6fc6d637.js.map
