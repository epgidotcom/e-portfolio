import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/academic', label: 'Academic' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
]

const linkClasses = ({ isActive }) =>
  [
    'rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    isActive ? 'bg-card text-text' : 'text-muted hover:text-text',
  ].join(' ')

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="group inline-flex items-center gap-2 rounded-md px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setIsOpen(false)}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded border border-border bg-card font-mono text-xs text-accent">
            FGL
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted group-hover:text-text">
            dev.workspace
          </span>
        </NavLink>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          className="rounded-md border border-border px-3 py-2 text-sm text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>

        <nav id="primary-navigation" className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isOpen ? (
        <nav className="border-t border-border bg-surface px-4 py-3 md:hidden" aria-label="Mobile navigation">
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={linkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
