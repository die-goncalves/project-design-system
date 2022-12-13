var s=Object.defineProperty;var a=(e,t)=>s(e,"name",{value:t,configurable:!0});import{D as n,b as m,H as p,T as r}from"./index.31a7a44d.js";import{a as i,j as o}from"./jsx-runtime.4d4432c3.js";import{ao as c}from"./iframe.0cb4cefd.js";import"./index.5cc34776.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const y={title:"Overlay/Dialog",component:n.Root,args:{open:!1},argTypes:{open:{control:"boolean"},children:{table:{disable:!0}}},parameters:{storySource:{source:`import {
  Button,
  Dialog as DialogComponent,
  DialogRootProps,
  Heading,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Dialog',
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
        <DialogComponent.Overlay />
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

export const Dialog = Template.bind({})
`,locationsMap:{dialog:{startLoc:{col:41,line:30},endLoc:{col:1,line:65},startBody:{col:41,line:30},endBody:{col:1,line:65}}}},layout:"centered"}},g=a(e=>{const[,t]=c();return i(n.Root,{...e,onOpenChange:l=>t({open:l}),children:[o(n.Trigger,{asChild:!0,children:o(m,{variant:"primary",children:"Abrir dialog"})}),i(n.Portal,{children:[o(n.Overlay,{}),i(n.Content,{children:[o(n.Title,{asChild:!0,children:o(p,{size:"md",children:"T\xEDtulo"})}),o(n.Description,{asChild:!0,children:o(r,{size:"sm",css:{color:"#a9a9b2"},children:"Descri\xE7\xE3o"})}),o(r,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt mollitia molestias commodi excepturi ea accusamus dignissimos fugiat expedita molestiae veniam repellat odit, ut nobis officia. Quam ea ipsa rerum."}),o(n.Close,{})]})]})]})},"Template"),f=g.bind({}),A=["Dialog"];export{f as Dialog,A as __namedExportsOrder,y as default};
//# sourceMappingURL=Dialog.stories.2b9b1fff.js.map