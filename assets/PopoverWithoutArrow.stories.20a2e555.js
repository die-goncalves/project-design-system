var a=Object.defineProperty;var r=(e,t)=>a(e,"name",{value:t,configurable:!0});import{P as n,b as i,T as s}from"./index.31a7a44d.js";import{a as l,j as o}from"./jsx-runtime.4d4432c3.js";import{ao as m}from"./iframe.0cb4cefd.js";import"./index.5cc34776.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const A={title:"Overlay/Popover/Without Arrow",component:n.Root,args:{open:!1},argTypes:{open:{control:"boolean"},children:{table:{disable:!0}}},parameters:{storySource:{source:`import {
  Button,
  Popover as PopoverComponent,
  PopoverRootProps,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Popover/Without Arrow',
  component: PopoverComponent.Root,
  args: {
    open: false,
  },
  argTypes: {
    open: { control: 'boolean' },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<PopoverRootProps>

const Template: Story<PopoverRootProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <PopoverComponent.Root
      {...args}
      onOpenChange={(open) => updateArgs({ open })}
    >
      <PopoverComponent.Trigger asChild>
        <Button variant="primary">Abrir popover</Button>
      </PopoverComponent.Trigger>

      <PopoverComponent.Content>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</Text>
      </PopoverComponent.Content>
    </PopoverComponent.Root>
  )
}

export const WithoutArrow = Template.bind({})
`,locationsMap:{"without-arrow":{startLoc:{col:42,line:29},endLoc:{col:1,line:46},startBody:{col:42,line:29},endBody:{col:1,line:46}}}},layout:"centered"}},c=r(e=>{const[,t]=m();return l(n.Root,{...e,onOpenChange:p=>t({open:p}),children:[o(n.Trigger,{asChild:!0,children:o(i,{variant:"primary",children:"Abrir popover"})}),o(n.Content,{children:o(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."})})]})},"Template"),b=c.bind({}),T=["WithoutArrow"];export{b as WithoutArrow,T as __namedExportsOrder,A as default};
//# sourceMappingURL=PopoverWithoutArrow.stories.20a2e555.js.map
