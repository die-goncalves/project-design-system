var s=Object.defineProperty;var i=(e,t)=>s(e,"name",{value:t,configurable:!0});import{D as n,b as m,H as p,T as a}from"./index.31a7a44d.js";import{a as r,j as o}from"./jsx-runtime.4d4432c3.js";import{ao as c}from"./iframe.0cb4cefd.js";import"./index.5cc34776.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const b={title:"Overlay/Dialog/Without Overlay",component:n.Root,args:{open:!1},argTypes:{open:{control:"boolean"},children:{table:{disable:!0}}},parameters:{storySource:{source:`import {
  Button,
  Dialog as DialogComponent,
  DialogRootProps,
  Heading,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Dialog/Without Overlay',
  component: DialogComponent.Root,
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
} as Meta<DialogRootProps>

const Template: Story<DialogRootProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <DialogComponent.Root
      {...args}
      onOpenChange={(open) => updateArgs({ open })}
    >
      <DialogComponent.Trigger asChild>
        <Button variant="primary">Abrir dialog</Button>
      </DialogComponent.Trigger>

      <DialogComponent.Portal>
        <DialogComponent.Content>
          <DialogComponent.Title asChild>
            <Heading size="md">T\xEDtulo</Heading>
          </DialogComponent.Title>
          <DialogComponent.Description asChild>
            <Text size="sm" css={{ color: '#a9a9b2' }}>
              Descri\xE7\xE3o
            </Text>
          </DialogComponent.Description>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt
            mollitia molestias commodi excepturi ea accusamus dignissimos fugiat
            expedita molestiae veniam repellat odit, ut nobis officia. Quam ea
            ipsa rerum.
          </Text>

          <DialogComponent.Close />
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}

export const WithoutOverlay = Template.bind({})
`,locationsMap:{"without-overlay":{startLoc:{col:41,line:30},endLoc:{col:1,line:64},startBody:{col:41,line:30},endBody:{col:1,line:64}}}},layout:"centered"}},g=i(e=>{const[,t]=c();return r(n.Root,{...e,onOpenChange:l=>t({open:l}),children:[o(n.Trigger,{asChild:!0,children:o(m,{variant:"primary",children:"Abrir dialog"})}),o(n.Portal,{children:r(n.Content,{children:[o(n.Title,{asChild:!0,children:o(p,{size:"md",children:"T\xEDtulo"})}),o(n.Description,{asChild:!0,children:o(a,{size:"sm",css:{color:"#a9a9b2"},children:"Descri\xE7\xE3o"})}),o(a,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt mollitia molestias commodi excepturi ea accusamus dignissimos fugiat expedita molestiae veniam repellat odit, ut nobis officia. Quam ea ipsa rerum."}),o(n.Close,{})]})})]})},"Template"),f=g.bind({}),v=["WithoutOverlay"];export{f as WithoutOverlay,v as __namedExportsOrder,b as default};
//# sourceMappingURL=DialogWithoutOverlay.stories.c209f04a.js.map
