import { StoryObj, Meta } from '@storybook/react'
import {
  MeetingSchedulingCalendar,
  MeetingSchedulingCalendarProps,
} from '@ignite-ui/react'

const now = new Date()
now.setMinutes(0)
const events = [
  {
    day: new Date(now.setDate(now.getDate() + 1)),
    availableTimeslots: [
      {
        startTime: new Date(now.setHours(9)),
        endTime: now,
        id: '000001',
      },
      {
        startTime: new Date(now.setHours(10)),
        endTime: now,
        id: '000002',
      },
      {
        startTime: new Date(now.setHours(11)),
        endTime: now,
        id: '000003',
      },
      {
        startTime: new Date(now.setHours(12)),
        endTime: now,
        id: '000004',
      },
      {
        startTime: new Date(now.setHours(13)),
        endTime: now,
        id: '000005',
      },
      {
        startTime: new Date(now.setHours(14)),
        endTime: now,
        id: '000006',
      },
      {
        startTime: new Date(now.setHours(15)),
        endTime: now,
        id: '000007',
      },
      {
        startTime: new Date(now.setHours(16)),
        endTime: now,
        id: '000008',
      },
      {
        startTime: new Date(now.setHours(17)),
        endTime: now,
        id: '000009',
      },
      {
        startTime: new Date(now.setHours(18)),
        endTime: now,
        id: '000010',
      },
    ],
  },
  {
    day: new Date(now.setDate(now.getDate() + 2)),
    availableTimeslots: [
      {
        startTime: new Date(now.setHours(9)),
        endTime: now,
        id: '000011',
      },
      {
        startTime: new Date(now.setHours(10)),
        endTime: now,
        id: '000012',
      },
    ],
  },
  {
    day: new Date(now.setDate(now.getDate() + 4)),
    availableTimeslots: [
      {
        startTime: new Date(now.setHours(9)),
        endTime: now,
        id: '000021',
      },
      {
        startTime: new Date(now.setHours(10)),
        endTime: now,
        id: '000022',
      },
      {
        startTime: new Date(now.setHours(11)),
        endTime: now,
        id: '000023',
      },
    ],
  },
]

export default {
  title: 'Components/MeetingSchedulingCalendar',
  component: MeetingSchedulingCalendar,
  args: {
    events,
  },
} as Meta<MeetingSchedulingCalendarProps>

export const Primary: StoryObj<MeetingSchedulingCalendarProps> = {}
