var p=Object.defineProperty;var e=(t,i)=>p(t,"name",{value:i,configurable:!0});import{P as n,b as s,T as a}from"./index.31a7a44d.js";import{a as r,j as o}from"./jsx-runtime.4d4432c3.js";import"./index.5cc34776.js";import"./iframe.0cb4cefd.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const y={title:"Overlay/Popover/Content",component:n.Content,args:{sideOffset:8,side:"bottom",align:"center"},argTypes:{sideOffset:{control:{type:"number"}},side:{options:["top","right","bottom","left"],control:{type:"inline-radio"}},align:{options:["start","center","end"],control:{type:"inline-radio"}},children:{table:{disable:!0}}},parameters:{storySource:{source:`import {
  Button,
  Popover as PopoverComponent,
  PopoverContentProps,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Overlay/Popover/Content',
  component: PopoverComponent.Content,
  args: {
    sideOffset: 8,
    side: 'bottom',
    align: 'center',
  },
  argTypes: {
    sideOffset: {
      control: {
        type: 'number',
      },
    },
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
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<PopoverContentProps>

const Template: Story<PopoverContentProps> = (args) => {
  return (
    <PopoverComponent.Root>
      <PopoverComponent.Trigger asChild>
        <Button variant="primary">Abrir popover</Button>
      </PopoverComponent.Trigger>

      <PopoverComponent.Content {...args}>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</Text>

        <PopoverComponent.Arrow />
        <PopoverComponent.Close />
      </PopoverComponent.Content>
    </PopoverComponent.Root>
  )
}

export const Content = Template.bind({})
`,locationsMap:{content:{startLoc:{col:45,line:46},endLoc:{col:1,line:61},startBody:{col:45,line:46},endBody:{col:1,line:61}}}},layout:"centered"}},l=e(t=>r(n.Root,{children:[o(n.Trigger,{asChild:!0,children:o(s,{variant:"primary",children:"Abrir popover"})}),r(n.Content,{...t,children:[o(a,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."}),o(n.Arrow,{}),o(n.Close,{})]})]}),"Template"),b=l.bind({}),f=["Content"];export{b as Content,f as __namedExportsOrder,y as default};
//# sourceMappingURL=PopoverContent.stories.dcd0d466.js.map
