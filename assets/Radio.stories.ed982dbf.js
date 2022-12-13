var p=Object.defineProperty;var t=(e,i)=>p(e,"name",{value:i,configurable:!0});import{R as n,B as l,T as r}from"./index.31a7a44d.js";import{a,j as o}from"./jsx-runtime.4d4432c3.js";import"./index.5cc34776.js";import"./iframe.0cb4cefd.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const j={parameters:{storySource:{source:`import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, RadioGroup as RadioGroupComponent, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Radio',
  component: RadioGroupComponent.Root,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof RadioGroupComponent.Root>

const Template: ComponentStory<typeof RadioGroupComponent.Root> = (args) => (
  <RadioGroupComponent.Root {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <RadioGroupComponent.Item value="laranja" id="opt-laranja">
          <RadioGroupComponent.Indicator />
        </RadioGroupComponent.Item>
        <Text
          as="label"
          size="sm"
          htmlFor="opt-laranja"
          css={{ cursor: 'pointer' }}
        >
          Laranja
        </Text>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <RadioGroupComponent.Item value="jambo" id="opt-jambo">
          <RadioGroupComponent.Indicator />
        </RadioGroupComponent.Item>
        <Text
          as="label"
          size="sm"
          htmlFor="opt-jambo"
          css={{ cursor: 'pointer' }}
        >
          Jambo
        </Text>
      </div>
    </Box>
  ),
}
`,locationsMap:{primary:{startLoc:{col:66,line:16},endLoc:{col:1,line:18},startBody:{col:66,line:16},endBody:{col:1,line:18}}}}},title:"Form/Radio",component:n.Root,argTypes:{children:{table:{disable:!0}}}},s=t(e=>o(n.Root,{...e}),"Template"),m=s.bind({});m.args={children:a(l,{css:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[a("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[o(n.Item,{value:"laranja",id:"opt-laranja",children:o(n.Indicator,{})}),o(r,{as:"label",size:"sm",htmlFor:"opt-laranja",css:{cursor:"pointer"},children:"Laranja"})]}),a("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[o(n.Item,{value:"jambo",id:"opt-jambo",children:o(n.Indicator,{})}),o(r,{as:"label",size:"sm",htmlFor:"opt-jambo",css:{cursor:"pointer"},children:"Jambo"})]})]})};const f=["Primary"];export{m as Primary,f as __namedExportsOrder,j as default};
//# sourceMappingURL=Radio.stories.ed982dbf.js.map
