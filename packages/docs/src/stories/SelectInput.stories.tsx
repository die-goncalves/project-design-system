import { StoryObj, Meta } from '@storybook/react'
import {
  SelectInput as SelectInputComponent,
  SelectInputProps,
} from '@ignite-ui/react'

const options = [
  {
    value: 'Banana',
    label: 'Banana',
  },
  {
    value: 'Amora',
    label: 'Amora',
  },
  {
    value: 'Caqui',
    label: 'Caqui',
  },
  {
    value: 'Manga',
    label: 'Manga',
  },
  {
    value: 'Pinha',
    label: 'Pinha',
  },
  {
    value: 'Pitanga',
    label: 'Pitanga',
  },
]

export default {
  title: 'Form/Select Input',
  component: SelectInputComponent,
  args: {
    options,
    placeholder: 'Selecione uma fruta',
    isClearable: false,
    isDisabled: false,
    isMulti: false,
  },
} as Meta<SelectInputProps>

export const Primary: StoryObj<SelectInputProps> = {}

export const Clearable: StoryObj<SelectInputProps> = {
  args: {
    isClearable: true,
  },
}

export const Disabled: StoryObj<SelectInputProps> = {
  args: {
    isDisabled: true,
  },
}
