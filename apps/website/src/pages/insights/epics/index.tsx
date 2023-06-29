import { useState } from 'react'

import { IconButton, Shadow, Tag, Text } from '@status-im/components'
import {
  DoneIcon,
  NotStartedIcon,
  OpenIcon,
  SearchIcon,
  SortIcon,
} from '@status-im/icons'

import { DatePicker } from '@/components/datepicker/datepicker'
import { EpicOverview } from '@/components/epic-overview'
import { InsightsLayout } from '@/layouts/insights-layout'
import { GET_EPIC_LINKS } from '@/lib/burnup'
import { api } from '@/lib/graphql'

import type {
  GetEpicMenuLinksQuery,
  GetEpicMenuLinksQueryVariables,
} from '@/lib/graphql/generated/operations'
import type { DateRange } from '@status-im/components/src/calendar/calendar'
import type { Page } from 'next'

export const epics = [
  {
    id: '1',
    title: 'Communities protocol',
    description: 'Support Encrypted Communities',
  },
  {
    id: '5155',
    title: 'Keycard',
    description:
      'Detecting keycard reader removal for the beginning of each flow',
  },
]

type Props = {
  links: string[]
}

const EpicsPage: Page<Props> = props => {
  const { links } = props
  const [selectedDates, setSelectedDates] = useState<DateRange>()

  return (
    <InsightsLayout links={links}>
      <div className="space-y-4 p-10">
        <Text size={27} weight="semibold">
          Epics
        </Text>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Tag size={32} label="In Progress" icon={OpenIcon} selected />
            <Tag size={32} label="Closed" icon={DoneIcon} />
            <Tag size={32} label="Not Started" icon={NotStartedIcon} />
          </div>

          <div className="flex gap-2">
            <IconButton variant="outline" icon={<SearchIcon size={20} />} />
            <IconButton variant="outline" icon={<SortIcon size={20} />} />
          </div>
        </div>

        <div className="grid gap-4">
          {epics.map(epic => (
            <Shadow
              key={epic.id}
              variant="$2"
              className="rounded-2xl px-4 py-3"
            >
              <EpicOverview
                title={epic.title}
                description={epic.description}
                selectedDates={selectedDates}
                setSelectedDates={setSelectedDates}
              />
            </Shadow>
          ))}
        </div>
        <DatePicker selected={selectedDates} onSelect={setSelectedDates} />
      </div>
    </InsightsLayout>
  )
}

export async function getServerSideProps() {
  const links = await api<
    GetEpicMenuLinksQuery,
    GetEpicMenuLinksQueryVariables
  >(GET_EPIC_LINKS)

  return {
    props: {
      links:
        links?.gh_epics
          .filter(epic => epic.status === 'In Progress')
          .map(epic => epic.epic_name) || [],
    },
  }
}

export default EpicsPage
