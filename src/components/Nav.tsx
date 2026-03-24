import { Link } from '@tanstack/react-router'

export function Nav() {
  return (
    <nav>
      <Link to="/" activeProps={{ className: 'active' }} activeOptions={{ exact: true }}>
        home
      </Link>
      <Link to="/blog" activeProps={{ className: 'active' }}>
        blog
      </Link>
    </nav>
  )
}
