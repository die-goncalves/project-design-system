var i=Object.defineProperty;var r=(n,e)=>i(n,"name",{value:e,configurable:!0});import{P as o,b as a,T as l}from"./index.31a7a44d.js";import{a as p,j as t}from"./jsx-runtime.4d4432c3.js";import{ao as m}from"./iframe.0cb4cefd.js";import"./index.5cc34776.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const b={title:"Overlay/Popover/Without Close Button",component:o.Root,args:{open:!1},argTypes:{open:{control:"boolean"},children:{table:{disable:!0}}},parameters:{storySource:{source:`import {
  Button,
  Popover as PopoverComponent,
  PopoverRootProps,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Popover/Without Close Button',
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

        <PopoverComponent.Arrow />
      </PopoverComponent.Content>
    </PopoverComponent.Root>
  )
}

export const WithoutCloseButton = Template.bind({})
`,locationsMap:{"without-close-button":{startLoc:{col:42,line:29},endLoc:{col:1,line:48},startBody:{col:42,line:29},endBody:{col:1,line:48}}}},layout:"centered"}},c=r(n=>{const[,e]=m();return p(o.Root,{...n,onOpenChange:s=>e({open:s}),children:[t(o.Trigger,{asChild:!0,children:t(a,{variant:"primary",children:"Abrir popover"})}),p(o.Content,{children:[t(l,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."}),t(o.Arrow,{})]})]})},"Template"),T=c.bind({}),B=["WithoutCloseButton"];export{T as WithoutCloseButton,B as __namedExportsOrder,b as default};
//# sourceMappingURL=PopoverWithoutCloseButton.stories.dd1f3db8.js.map
