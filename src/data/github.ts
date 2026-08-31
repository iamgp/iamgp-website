import { createServerFn } from '@tanstack/react-start'

export type ContributionDay = {
  date: string
  count: number
  level: 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE'
}

export type Contributions = {
  total: number
  weeks: ContributionDay[][]
}

const query = `
  query ContributionCalendar($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`

export const getGitHubContributions = createServerFn({ method: 'GET' }).handler(async (): Promise<Contributions | null> => {
  const token = process.env.GITHUB_TOKEN
  if (!token) return null

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { login: 'iamgp' } }),
  })
  if (!response.ok) return null

  const payload = await response.json() as { data?: { user?: { contributionsCollection?: { contributionCalendar?: { totalContributions: number; weeks: Array<{ contributionDays: Array<{ date: string; contributionCount: number; contributionLevel: ContributionDay['level'] }> }> } } } }; errors?: unknown }
  const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar
  if (!calendar) return null

  return {
    total: calendar.totalContributions,
    weeks: calendar.weeks.map((week) => week.contributionDays.map((day) => ({ date: day.date, count: day.contributionCount, level: day.contributionLevel }))),
  }
})
