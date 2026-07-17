import { Link } from 'react-router-dom'

const variantClasses = {
  primary:
    'bg-accent text-bg hover:bg-[#3c8fdd] focus-visible:outline-accent border border-transparent',
  ghost:
    'bg-transparent text-text border border-border hover:border-accent hover:text-accent focus-visible:outline-accent',
}

export default function Button({
  to,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const classes = `${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
