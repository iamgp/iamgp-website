import { HugeiconsIcon } from '@hugeicons/react'
import { GithubIcon, Linkedin02Icon, Mail01Icon, TwitterIcon } from '@hugeicons/core-free-icons'

export function Socials() {
  return (
    <span className="socials">
      <a href="https://github.com/iamgp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <HugeiconsIcon icon={GithubIcon} aria-hidden="true" strokeWidth={2.15} />
      </a>
      <a href="https://x.com/iamgp" target="_blank" rel="noopener noreferrer" aria-label="X">
        <HugeiconsIcon icon={TwitterIcon} aria-hidden="true" strokeWidth={2.15} />
      </a>
      <a href="https://linkedin.com/in/iamgp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <HugeiconsIcon icon={Linkedin02Icon} aria-hidden="true" strokeWidth={2.15} />
      </a>
      <a href="mailto:garethprice@me.com" aria-label="Email">
        <HugeiconsIcon icon={Mail01Icon} aria-hidden="true" strokeWidth={2.15} />
      </a>
    </span>
  )
}
