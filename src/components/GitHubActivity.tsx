import { useEffect, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight02Icon } from '@hugeicons/core-free-icons'
import { getGitHubContributions, type Contributions } from '@/data/github'

const levelClass = { NONE: 'zero', FIRST_QUARTILE: 'one', SECOND_QUARTILE: 'two', THIRD_QUARTILE: 'three', FOURTH_QUARTILE: 'four' }
const monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' })

export function GitHubActivity() {
  const [data, setData] = useState<Contributions | null | undefined>(undefined)

  useEffect(() => { getGitHubContributions().then(setData).catch(() => setData(null)) }, [])
  if (!data) return null

  const monthStarts = data.weeks
    .map((week, index) => ({ index, day: week[0] }))
    .filter(({ index, day }) => day && (index === 0 || new Date(day.date).getUTCMonth() !== new Date(data.weeks[index - 1][0]?.date ?? day.date).getUTCMonth()))
    .filter(({ index }, position, starts) => position === 0 || index - starts[position - 1].index >= 4)

  return <section className="home-section github-activity"><h2>GitHub contributions</h2><div className="official-calendar"><div className="month-labels" aria-hidden="true">{monthStarts.map(({ index, day }) => <span key={day.date} style={{ gridColumnStart: index + 1 }}>{monthFormatter.format(new Date(day.date))}</span>)}</div><div className="calendar-grid" aria-label={`${data.total} GitHub contributions in the last year`}>{data.weeks.flat().map((day) => <i className={levelClass[day.level]} key={day.date} title={`${day.count} contributions on ${day.date}`} />)}</div><div className="calendar-meta"><span>{data.total.toLocaleString()} contributions in the last year</span><a href="https://github.com/iamgp" target="_blank" rel="noreferrer">github.com/iamgp <HugeiconsIcon icon={ArrowUpRight02Icon} size={13} strokeWidth={1.8} aria-hidden="true" /></a></div></div></section>
}
