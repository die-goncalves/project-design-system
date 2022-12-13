var a=Object.defineProperty;var t=(n,r)=>a(n,"name",{value:r,configurable:!0});import{P as o,b as i,T as l}from"./index.31a7a44d.js";import{a as p,j as e}from"./jsx-runtime.4d4432c3.js";import{ao as m}from"./iframe.0cb4cefd.js";import"./index.5cc34776.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const T={title:"Overlay/Popover",component:o.Root,args:{open:!1},argTypes:{open:{control:"boolean"},children:{table:{disable:!0}}},parameters:{storySource:{source:`import {
  Button,
  Popover as PopoverComponent,
  PopoverRootProps,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Popover',
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
        <PopoverComponent.Close />
      </PopoverComponent.Content>
    </PopoverComponent.Root>
  )
}

export const Popover = Template.bind({})
`,locationsMap:{popover:{startLoc:{col:42,line:29},endLoc:{col:1,line:49},startBody:{col:42,line:29},endBody:{col:1,line:49}}}},layout:"centered"}},c=t(n=>{const[,r]=m();return p(o.Root,{...n,onOpenChange:s=>r({open:s}),children:[e(o.Trigger,{asChild:!0,children:e(i,{variant:"primary",children:"Abrir popover"})}),p(o.Content,{children:[e(l,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."}),e(o.Arrow,{}),e(o.Close,{})]})]})},"Template"),h=c.bind({}),f=["Popover"];export{h as Popover,f as __namedExportsOrder,T as default};
//# sourceMappingURL=Popover.stories.5248326c.js.map
