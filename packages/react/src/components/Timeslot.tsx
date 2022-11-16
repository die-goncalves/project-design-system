import { useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Toast } from './Toast'
import { styled } from '../styles'
import { Button } from './Button'

const ConfirmMeeting = styled('div', {
  display: 'flex',
  gap: '2px',

  '& > button': {
    borderRadius: '$sm',
    '&:first-child': {
      flex: 1,
    },
    '&:last-child': {
      width: '40%',
    },
  },
})

const FormattedMeetingDate = styled('div', {
  span: {
    textTransform: 'capitalize',
  },
})

const formatMeetingTime = (date: Date) =>
  format(date, "H':'mm'h'", {
    locale: ptBR,
  })
const formatMeetingDate = (date: Date) =>
  format(date, "EEEE',' dd 'de' LLLL 'às' HH':'mm'h'", {
    locale: ptBR,
  })

type TimeslotProps = {
  currentMeeting: string
  onCurrentMeeting: (id: string) => void
  meeting: {
    startTime: Date
    endTime: Date
    id: string
  }
}

export function Timeslot({
  meeting,
  currentMeeting,
  onCurrentMeeting,
}: TimeslotProps) {
  const [isOpen, setIsOpen] = useState(false)

  const date = formatMeetingDate(meeting.startTime).split(' ')

  if (currentMeeting !== meeting.id) {
    return (
      <Button
        size="sm"
        variant="quaternary"
        onClick={() => onCurrentMeeting(meeting.id)}
      >
        <p>{formatMeetingTime(meeting.startTime)}</p>
      </Button>
    )
  } else {
    return (
      <ConfirmMeeting>
        <Toast.Provider>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Confirmar?
          </Button>

          <Toast.Root open={isOpen} onOpenChange={setIsOpen}>
            <Toast.Title>Agendamento realizado</Toast.Title>

            <Toast.Description>
              <FormattedMeetingDate>
                <span>{date[0]}</span>
                {` ${date[1]} ${date[2]} `}
                <span>{date[3]}</span>
                {` ${date[4]} ${date[5]}`}
              </FormattedMeetingDate>
            </Toast.Description>

            <Toast.Close aria-label="Close" />
          </Toast.Root>
          <Toast.Viewport />
        </Toast.Provider>

        <Button
          variant="tertiary"
          size="sm"
          onClick={() => {
            onCurrentMeeting('')
          }}
        >
          Cancelar
        </Button>
      </ConfirmMeeting>
    )
  }
}
