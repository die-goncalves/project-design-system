import { useState } from 'react'
import { styled } from '../styles'
import { Timeslot } from './Timeslot'

const TimeslotsContainer = styled('div', {
  flex: 1,
})

const AvailableMeetings = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '22px',
})

export type MeetingSchedulingCalendarProps = {
  meetings: {
    startTime: Date
    endTime: Date
    id: string
  }[]
}

export function Timeslots({ meetings }: MeetingSchedulingCalendarProps) {
  const [currentMeeting, setCurrentMeeting] = useState('')

  function handleCurrentMeeting(id: string) {
    setCurrentMeeting(id)
  }

  return (
    <TimeslotsContainer>
      <AvailableMeetings>
        {meetings.map((meeting) => (
          <Timeslot
            key={meeting.id}
            currentMeeting={currentMeeting}
            onCurrentMeeting={handleCurrentMeeting}
            meeting={meeting}
          />
        ))}
      </AvailableMeetings>
    </TimeslotsContainer>
  )
}
