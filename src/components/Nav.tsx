import { Link } from '@tanstack/react-router'

export function Nav() {
  return (
    <nav>
      <div>
        <Link to="/" activeProps={{ className: 'active' }} activeOptions={{ exact: true }}>home</Link>
        <a href="/#work">work</a>
        <a href="/#systems">systems</a>
        <Link to="/blog" activeProps={{ className: 'active' }}>writing</Link>
      </div>
    </nav>
  )
}
