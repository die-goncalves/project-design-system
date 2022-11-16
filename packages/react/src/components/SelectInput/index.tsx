import {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  MultiValueRemoveProps,
  OptionProps,
  Props,
} from 'react-select'
import { CaretDown, X } from 'phosphor-react'
import { StyledSelect } from './styles'

export type SelectInputProps = {
  options: { value: string; label: string }[]
} & Props

export function SelectInput(props: SelectInputProps) {
  return (
    <StyledSelect
      classNamePrefix="react-select"
      components={{
        Option: CustomOption,
        DropdownIndicator: CustomDropdownIndicator,
        ClearIndicator: CustomClearIndicator,
        MultiValueRemove: CustomMultiValueRemove,
        IndicatorSeparator: null,
      }}
      noOptionsMessage={() => 'Sem opções'}
      {...props}
    />
  )
}
SelectInput.displayName = 'SelectInput'

const CustomOption = (props: OptionProps) => {
  // https://react-select.com/styles#cx-and-custom-components
  const {
    children,
    className,
    cx,
    isDisabled,
    isFocused,
    isSelected,
    innerProps,
  } = props
  return (
    <div
      className={cx(
        {
          option: true,
          'option--is-disabled': isDisabled,
          'option--is-focused': isFocused,
          'option--is-selected': isSelected,
        },
        className,
      )}
      {...innerProps}
    >
      {children}
    </div>
  )
}

function CustomDropdownIndicator(props: DropdownIndicatorProps) {
  const { menuIsOpen } = props.selectProps
  return (
    <components.DropdownIndicator {...props}>
      <CaretDown
        size={16}
        weight={menuIsOpen ? 'bold' : 'regular'}
        color={menuIsOpen ? '#00B37E' : '#7C7C8A'}
      />
    </components.DropdownIndicator>
  )
}

function CustomClearIndicator(props: ClearIndicatorProps) {
  return (
    <components.ClearIndicator {...props}>Limpar</components.ClearIndicator>
  )
}

function CustomMultiValueRemove(props: MultiValueRemoveProps) {
  return (
    <components.MultiValueRemove {...props}>
      <X size={12} />
    </components.MultiValueRemove>
  )
}
