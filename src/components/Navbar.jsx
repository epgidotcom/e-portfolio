import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/academic', label: 'AI & ML' },
  { to: '/dev-logs', label: 'Dev Logs' },
]
const linkClasses = ({ isActive }) => ['rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent', isActive ? 'bg-card text-text' : 'text-muted hover:text-text'].join(' ')

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur"><div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
    <NavLink to="/" className="group inline-flex items-center gap-3 rounded-md px-1 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" onClick={() => setIsOpen(false)}><span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 font-mono text-xs font-semibold text-accent">FL</span><span><span className="block font-semibold tracking-tight text-text group-hover:text-accent">Fitzgerald Larido</span><span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:block">Software · AI · Quality</span></span></NavLink>
    <button type="button" aria-expanded={isOpen} aria-controls="primary-navigation" aria-label="Toggle navigation menu" className="rounded-md border border-border px-3 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden" onClick={() => setIsOpen((open) => !open)}>{isOpen ? 'Close' : 'Menu'}</button>
    <nav id="primary-navigation" className="hidden items-center gap-1 md:flex" aria-label="Main navigation">{navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.end} className={linkClasses}>{item.label}</NavLink>)}</nav>
  </div>{isOpen ? <nav className="border-t border-border bg-surface px-4 py-3 md:hidden" aria-label="Mobile navigation"><ul className="grid gap-2">{navItems.map((item) => <li key={item.to}><NavLink to={item.to} end={item.end} className={linkClasses} onClick={() => setIsOpen(false)}>{item.label}</NavLink></li>)}</ul></nav> : null}</header>
}
