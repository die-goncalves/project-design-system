var i=Object.defineProperty;var a=(t,e)=>i(t,"name",{value:e,configurable:!0});import{h as o,b as l,T as c}from"./index.31a7a44d.js";import{a as s,j as n}from"./jsx-runtime.4d4432c3.js";import{ao as m}from"./iframe.0cb4cefd.js";import"./index.5cc34776.js";import"./index.83ef47c2.js";import"./isNativeReflectConstruct.7455ec7d.js";import"./index.c04c8a37.js";const y={parameters:{storySource:{source:`import {
  Button,
  Toast as ToastComponent,
  ToastRootProps,
  Text,
} from '@ignite-ui/react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Overlay/Toast',
  component: ToastComponent.Root,
  args: {
    open: false,
  },
  argTypes: {
    open: { control: 'boolean' },
  },
} as Meta<ToastRootProps>

const Template: Story<ToastRootProps> = (args) => {
  const [{ open }, updateArgs] = useArgs()

  return (
    <ToastComponent.Provider>
      <Button onClick={() => updateArgs({ open: !open })}>
        <Text>Abrir notifica\xE7\xE3o</Text>
      </Button>

      <ToastComponent.Root
        {...args}
        onOpenChange={(open) => updateArgs({ open })}
      >
        <ToastComponent.Title>Agendamento realizado</ToastComponent.Title>

        <ToastComponent.Description>
          Quarta-feira, 23 de Outubro \xE0s 16h
        </ToastComponent.Description>

        <ToastComponent.Close aria-label="Close" />
      </ToastComponent.Root>
      <ToastComponent.Viewport />
    </ToastComponent.Provider>
  )
}
export const Toast = Template.bind({})
`,locationsMap:{toast:{startLoc:{col:40,line:21},endLoc:{col:1,line:45},startBody:{col:40,line:21},endBody:{col:1,line:45}}}}},title:"Overlay/Toast",component:o.Root,args:{open:!1},argTypes:{open:{control:"boolean"}}},T=a(t=>{const[{open:e},r]=m();return s(o.Provider,{children:[n(l,{onClick:()=>r({open:!e}),children:n(c,{children:"Abrir notifica\xE7\xE3o"})}),s(o.Root,{...t,onOpenChange:p=>r({open:p}),children:[n(o.Title,{children:"Agendamento realizado"}),n(o.Description,{children:"Quarta-feira, 23 de Outubro \xE0s 16h"}),n(o.Close,{"aria-label":"Close"})]}),n(o.Viewport,{})]})},"Template"),A=T.bind({}),R=["Toast"];export{A as Toast,R as __namedExportsOrder,y as default};
//# sourceMappingURL=Toast.stories.3b92aabf.js.map
