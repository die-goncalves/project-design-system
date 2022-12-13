var i=Object.defineProperty;var e=(o,r)=>i(o,"name",{value:r,configurable:!0});import{e as t,B as a,T as s}from"./index.31a7a44d.js";import{a as c,j as n}from"./jsx-runtime.4d4432c3.js";import"./index.5cc34776.js";import"./iframe.0cb4cefd.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const y={parameters:{storySource:{source:`import type { Story, Meta } from '@storybook/react'
import {
  Box,
  Switch as SwitchComponent,
  Text,
  SwitchContainerProps,
} from '@ignite-ui/react'

export default {
  title: 'Form/Switch',
  component: SwitchComponent.Container,
} as Meta<SwitchContainerProps>

const Template: Story<SwitchContainerProps> = (args) => {
  return (
    <Box
      css={{
        display: 'flex',
        gap: '0.5rem',
      }}
    >
      <SwitchComponent.Container id="label-switch">
        <SwitchComponent.Thumb />
      </SwitchComponent.Container>
      <Text
        as="label"
        size="md"
        htmlFor="label-switch"
        css={{ cursor: 'pointer' }}
      >
        Label
      </Text>
    </Box>
  )
}

export const Primary = Template.bind({})
`,locationsMap:{primary:{startLoc:{col:46,line:14},endLoc:{col:1,line:35},startBody:{col:46,line:14},endBody:{col:1,line:35}}}}},title:"Form/Switch",component:t.Container},l=e(o=>c(a,{css:{display:"flex",gap:"0.5rem"},children:[n(t.Container,{id:"label-switch",children:n(t.Thumb,{})}),n(s,{as:"label",size:"md",htmlFor:"label-switch",css:{cursor:"pointer"},children:"Label"})]}),"Template"),C=l.bind({}),u=["Primary"];export{C as Primary,u as __namedExportsOrder,y as default};
//# sourceMappingURL=Switch.stories.74d81744.js.map
