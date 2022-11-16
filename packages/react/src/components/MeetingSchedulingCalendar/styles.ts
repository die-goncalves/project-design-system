import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { styled } from '../../styles'
const SCROLLBAR_SIZE = 6

export const MeetingSchedulingCalendarContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  width: 'fit-content',
})

export const CalendarContainer = styled('div', {
  boxSizing: 'border-box',
  backgroundColor: '$gray800',
  padding: '22px',
  width: '540px',
  border: '2px solid #323238',
  position: 'relative',
  zIndex: 1,

  variants: {
    isSidebarOpen: {
      true: {
        borderRadius: '6px 0 0 6px',
      },
      false: {
        borderRadius: '6px',
      },
    },
  },

  '.react-calendar__month-view__days > button': {
    display: 'none',
  },

  /* NAVIGATION */
  '.react-calendar__navigation': {
    all: 'unset',
    display: 'grid',
    gridTemplateColumns: '1fr auto auto',
    gridTemplateRows: '1fr',
    gridTemplateAreas: 'labels prev next',
    gap: '8px',
    marginBottom: '24px',
    backgroundColor: 'transparent',
  },
  '.react-calendar__navigation__label': {
    all: 'unset',
    gridArea: '1 / 1 / 1 / 1',
    width: 'max-content',
    padding: 0,
    margin: 0,
    lineHeight: 0,
    border: 0,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    pointerEvents: 'none',

    p: {
      textTransform: 'capitalize',
      fontFamily: '$default',
      fontSize: '$md',
      fontWeight: '$medium',
      color: '$gray200',
      lineHeight: '160%',
      margin: 0,

      span: {
        color: '$white',
      },
    },
  },
  '.react-calendar__navigation__arrow': {
    all: 'unset',
    backgroundColor: '$gray800',
  },
  '.react-calendar__navigation__next-button': {
    all: 'unset',
    gridArea: '1 / 3 / 1 / 3',
    display: 'flex',
    margin: 'auto',
    width: 'max-content',
    cursor: 'pointer',

    svg: {
      color: '$gray200',
      width: '20px',
      height: '20px',
    },
  },
  '.react-calendar__navigation__prev-button': {
    all: 'unset',
    gridArea: '1 / 2 / 1 / 2',
    display: 'flex',
    margin: 'auto',
    width: 'max-content',
    cursor: 'pointer',

    svg: {
      color: '$gray200',
      width: '20px',
      height: '20px',
    },
  },

  /* WEEKDAYS */
  '.react-calendar__month-view__weekdays': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  '.react-calendar__month-view__weekdays__weekday': {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: '66.85px' /* (492px[largura] - 4px*6[gap])/7[7elementos]  */,

    abbr: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontFamily: '$default',
      fontSize: '$sm',
      fontWeight: '$medium',
      lineHeight: '160%',
      color: '$gray200',
    },
  },

  /* DAYS */
  '.react-calendar__month-view__days__day--neighboringMonth': {
    visibility: 'hidden',
  },
  '.react-calendar__month-view__days': {
    display: 'flex',
    justifyContent: 'space-between',
    rowGap: '4px',

    button: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '66.85px',
      padding: '16px 26px',
      border: 0,
      borderRadius: '6px',
      cursor: 'pointer',

      transition: '0.2s background-color linear',
      '&:hover:not(.react-calendar__tile--active)': {
        backgroundColor: '$gray500',
      },
    },
  },
  '.react-calendar__tile': {
    backgroundColor: '$gray800',
    abbr: {
      fontFamily: '$default',
      fontSize: '$md',
      fontWeight: '$regular',
      lineHeight: '160%',
      color: '$white',
    },
    '&.react-calendar__tile--active': {
      transition: '0.2s all linear',
      backgroundColor: '$ignite500',
      abbr: {
        color: '$white',
      },
    },
  },
  '.has-meeting': {
    backgroundColor: '$gray600',
  },
  '.no-meeting': {
    pointerEvents: 'none',
  },
})

export const CloseButton = styled('button', {
  all: 'unset',
  display: 'flex',
  cursor: 'pointer',
  svg: {
    width: 20,
    height: 20,
    color: '$gray200',
  },
})

export const SidebarOfAvailableMeetings = styled(ScrollAreaPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '0 6px 6px 0',
  width: '300px',
  backgroundColor: '#202024',
  padding: '22px 22px 0 22px',

  borderWidth: '2px',
  borderColor: '$gray600',
  borderStyle: 'solid solid solid none',
})

export const SidebarViewport = styled(ScrollAreaPrimitive.Viewport, {
  minHeight: '100%',
  height: 0,
  borderRadius: 'inherit',
  zIndex: 0,
})

export const SidebarContent = styled('div', {
  '& > div:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    '& > p': {
      fontFamily: '$default',
      fontSize: '$md',
      fontWeight: '$medium',
      color: '$gray200',
      lineHeight: '160%',
      margin: 0,

      span: {
        color: '$white',
      },
    },
  },
})

export const VerticalScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  position: 'relative',
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  background: '$gray800',
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
})

export const Thumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$gray900',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
  },
})
