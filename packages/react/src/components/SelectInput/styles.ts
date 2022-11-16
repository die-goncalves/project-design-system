import { styled } from '@stitches/react'
import Select from 'react-select'

export const StyledSelect = styled(Select, {
  // CONTAINER DO INPUT
  '& .react-select__control': {
    pointerEvents: 'auto',

    border: '2px solid $gray900',
    backgroundColor: '$gray900',
    padding: '$3 $4',
    minHeight: 'initial',
    borderRadius: '$xs',
    transition: '0.2s border linear',

    '&:hover': {
      border: '2px solid $gray900',
    },
    '&:hover:not(.react-select__control--is-disabled)': {
      border: '2px solid $ignite300',
    },
  },
  '& .react-select__control--is-disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  '& .react-select__control--is-focused': {
    boxShadow: 'none',
    border: '2px solid $ignite300',
  },
  '& .react-select__value-container': {
    margin: 0,
    padding: 0,
  },

  // INPUT DE AUTOCOMPLETE DE OPÇÕES
  '& .react-select__input-container': {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$white',
    margin: 0,
    padding: 0,
  },

  // INDICADORES: LIMPAR VALORES MÚLTIPLOS E ABRIR/FECHAR CONTAINER DE OPÇÕES
  '& .react-select__indicator': {
    margin: 0,
    padding: 0,
  },
  '& .react-select__indicators': {
    display: 'flex',
    gap: '$4',
  },
  '& .react-select__dropdown-indicator': {
    transition: '0.2s transform linear',
  },
  '& .react-select__clear-indicator': {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
    cursor: 'pointer',
    transition: '0.2s color linear',
    '&:hover': {
      color: '$gray100',
    },
  },
  '& .react-select__control--menu-is-open .react-select__dropdown-indicator': {
    transform: 'rotate(-180deg)',
  },

  // PLACEHOLDER
  '& .react-select__placeholder': {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
  },

  // VALOR ÚNICO
  '& .react-select__single-value': {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$white',
    margin: 0,
  },

  // CONTAINER DAS OPÇÕES
  '& .react-select__menu': {
    boxSizing: 'border-box',
    paddingBottom: 0,
    paddingTop: 0,
    marginTop: '$2',
    borderRadius: '$xs',
    overflow: 'hidden',
    backgroundColor: '$gray900',
    border: '2px solid $gray900',

    transition: '0.2s border linear',
  },
  '& .react-select__menu-notice': {
    padding: '$3 $4',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$white',
  },
  '& .react-select__menu:hover': {
    border: '2px solid $ignite300',
  },
  '& .react-select__menu-list': {
    paddingBottom: 0,
    paddingTop: 0,
    margin: 0,
  },

  // OPÇÕES
  '& .react-select__option': {
    padding: '$3 $4',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$white',
  },
  '& .react-select__option--is-selected': {
    backgroundColor: '$ignite300',
    color: '$gray900',
    fontWeight: '$medium',
  },
  '& .react-select__option--is-focused:not(.react-select__option--is-selected)':
    {
      backgroundColor: '$gray800',
    },

  // VALORES MÚLTIPLOS
  '& .react-select__multi-value': {
    padding: '$1',
    margin: '$1',
    borderRadius: '$xs',
    backgroundColor: '$gray800',
  },
  '& .react-select__multi-value__label': {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$white',
  },
  '& .react-select__multi-value__remove': {
    color: '$gray400',
    cursor: 'pointer',
    transition: '0.2s color linear',
    '&:hover': {
      color: '$gray100',
      background: 'transparent',
    },
  },
  '& .react-select__multi-value--is-disabled': {
    '& .react-select__multi-value__remove': {
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
})
