var s=Object.defineProperty;var a=(t,l)=>s(t,"name",{value:l,configurable:!0});import{D as o,b as e,H as c,T as r}from"./index.31a7a44d.js";import{a as i,j as n}from"./jsx-runtime.4d4432c3.js";import"./index.5cc34776.js";import"./iframe.0cb4cefd.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const T={title:"Overlay/Dialog/With Actions",component:o.Actions,args:{align:"right"},argTypes:{align:{options:["left","center","right"],control:{type:"inline-radio"}},children:{table:{disable:!0}}},parameters:{storySource:{source:`import {
  Button,
  Dialog as DialogComponent,
  Heading,
  Text,
  DialogActionsProps,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Overlay/Dialog/With Actions',
  component: DialogComponent.Actions,
  args: {
    align: 'right',
  },
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
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
} as Meta<DialogActionsProps>

const Template: Story<DialogActionsProps> = (args) => {
  return (
    <DialogComponent.Root>
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

          <DialogComponent.Actions {...args}>
            <Button variant="secondary">Cancelar</Button>
            <Button variant="primary">Salvar</Button>
          </DialogComponent.Actions>
          <DialogComponent.Close />
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}

export const WithActions = Template.bind({})
`,locationsMap:{"with-actions":{startLoc:{col:44,line:34},endLoc:{col:1,line:68},startBody:{col:44,line:34},endBody:{col:1,line:68}}}},layout:"centered"}},m=a(t=>i(o.Root,{children:[n(o.Trigger,{asChild:!0,children:n(e,{variant:"primary",children:"Abrir dialog"})}),i(o.Portal,{children:[n(o.Overlay,{}),i(o.Content,{children:[n(o.Title,{asChild:!0,children:n(c,{size:"md",children:"T\xEDtulo"})}),n(o.Description,{asChild:!0,children:n(r,{size:"sm",css:{color:"#a9a9b2"},children:"Descri\xE7\xE3o"})}),n(r,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt mollitia molestias commodi excepturi ea accusamus dignissimos fugiat expedita molestiae veniam repellat odit, ut nobis officia. Quam ea ipsa rerum."}),i(o.Actions,{...t,children:[n(e,{variant:"secondary",children:"Cancelar"}),n(e,{variant:"primary",children:"Salvar"})]}),n(o.Close,{})]})]})]}),"Template"),x=m.bind({}),A=["WithActions"];export{x as WithActions,A as __namedExportsOrder,T as default};
//# sourceMappingURL=DialogWithActions.stories.9cab9606.js.map
