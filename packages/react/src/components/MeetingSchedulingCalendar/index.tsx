import ReactCalendar from 'react-calendar'
import { ptBR } from 'date-fns/locale'
import { format, differenceInCalendarDays } from 'date-fns'
import { CaretRight, CaretLeft, X } from 'phosphor-react'
import { useState } from 'react'
import {
  CloseButton,
  CalendarContainer,
  MeetingSchedulingCalendarContainer,
  SidebarContent,
  SidebarOfAvailableMeetings,
  SidebarViewport,
  VerticalScrollbar,
  Thumb,
} from './styles'
import { Timeslots } from '../Timeslots'

const formatWeekdays = (date: Date) =>
  format(date, "eeeeee'..'", {
    locale: ptBR,
  })

const formatMonthAndYear = (date: Date) =>
  format(date, 'MMMM yyyy', {
    locale: ptBR,
  })

const formatChosenMeetingDate = (date: Date) =>
  format(date, "EEEE',' dd 'de' MMMM", {
    locale: ptBR,
  })

const isSameDay = (a: any, b: any) => {
  return differenceInCalendarDays(a, b) === 0
}

type EventsType = {
  day: Date
  availableTimeslots: {
    startTime: Date
    endTime: Date
    id: string
  }[]
}

export type MeetingSchedulingCalendarProps = {
  events: EventsType[]
}

export function MeetingSchedulingCalendar({
  events,
}: MeetingSchedulingCalendarProps) {
  const [value, onChange] = useState<Date>()

  const event: EventsType | undefined = events.find((event) =>
    isSameDay(event.day, value),
  )

  return (
    <MeetingSchedulingCalendarContainer>
      <CalendarContainer isSidebarOpen={!!event}>
        <ReactCalendar
          calendarType="Hebrew"
          onChange={onChange}
          value={value}
          formatShortWeekday={(locale, date) => formatWeekdays(date)}
          navigationLabel={({ date }) => {
            const [month, year] = formatMonthAndYear(date).split(' ')
            return (
              <p>
                <span>{month}</span> {year}
              </p>
            )
          }}
          prev2Label={null}
          next2Label={null}
          nextLabel={<CaretRight />}
          prevLabel={<CaretLeft />}
          tileClassName={({ date, view }) => {
            if (
              view === 'month' &&
              events.find((meeting) => isSameDay(meeting.day, date))
            ) {
              return 'has-meeting'
            }
            return 'no-meeting'
          }}
        />
      </CalendarContainer>
      {event && (
        <SidebarOfAvailableMeetings type="auto">
          <SidebarViewport>
            <SidebarContent>
              <div>
                <p>
                  <span>
                    {formatChosenMeetingDate(event.day).split(',')[0]},
                  </span>{' '}
                  {formatChosenMeetingDate(event.day).split(',')[1]}
                </p>
                <CloseButton onClick={() => onChange(undefined)}>
                  <X />
                </CloseButton>
              </div>

              <Timeslots meetings={event.availableTimeslots} />
            </SidebarContent>
          </SidebarViewport>
          <VerticalScrollbar orientation="vertical">
            <Thumb />
          </VerticalScrollbar>
        </SidebarOfAvailableMeetings>
      )}
    </MeetingSchedulingCalendarContainer>
  )
}
MeetingSchedulingCalendar.displayName = 'MeetingSchedulingCalendar'
