var s=Object.defineProperty;var i=(t,e)=>s(t,"name",{value:e,configurable:!0});import{D as n,b as l,H as p,T as m}from"./index.31a7a44d.js";import{a,j as o}from"./jsx-runtime.4d4432c3.js";import{ao as c}from"./iframe.0cb4cefd.js";import"./index.5cc34776.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const x={title:"Overlay/Dialog/Without Description",component:n.Root,args:{open:!1},argTypes:{open:{control:"boolean"},children:{table:{disable:!0}}},parameters:{storySource:{source:`import {
  Button,
  Dialog as DialogComponent,
  DialogRootProps,
  Heading,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Dialog/Without Description',
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

export const WithoutDescription = Template.bind({})
`,locationsMap:{"without-description":{startLoc:{col:41,line:30},endLoc:{col:1,line:59},startBody:{col:41,line:30},endBody:{col:1,line:59}}}},layout:"centered"}},g=i(t=>{const[,e]=c();return a(n.Root,{...t,onOpenChange:r=>e({open:r}),children:[o(n.Trigger,{asChild:!0,children:o(l,{variant:"primary",children:"Abrir dialog"})}),o(n.Portal,{children:a(n.Content,{children:[o(n.Title,{asChild:!0,children:o(p,{size:"md",children:"T\xEDtulo"})}),o(m,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt mollitia molestias commodi excepturi ea accusamus dignissimos fugiat expedita molestiae veniam repellat odit, ut nobis officia. Quam ea ipsa rerum."}),o(n.Close,{})]})})]})},"Template"),y=g.bind({}),A=["WithoutDescription"];export{y as WithoutDescription,A as __namedExportsOrder,x as default};
//# sourceMappingURL=DialogWithoutDescription.stories.f6101f0b.js.map
