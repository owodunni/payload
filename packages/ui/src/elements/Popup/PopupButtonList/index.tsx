'use client'
// TODO: abstract the `next/link` dependency out from this component
import type { LinkProps } from 'next/link.d.ts'

import LinkDefault from 'next/link.js'
import * as React from 'react' // TODO: abstract this out to support all routers

import './index.scss'

const Link = LinkDefault.default

const baseClass = 'popup-button-list'

export const ButtonGroup: React.FC<{
  buttonSize?: 'default' | 'small'
  children: React.ReactNode
  className?: string
  textAlign?: 'center' | 'left' | 'right'
}> = ({ buttonSize = 'default', children, className, textAlign = 'left' }) => {
  const classes = [
    baseClass,
    className,
    `${baseClass}__text-align--${textAlign}`,
    `${baseClass}__button-size--${buttonSize}`,
  ]
    .filter(Boolean)
    .join(' ')
  return <div className={classes}>{children}</div>
}

type MenuButtonProps = {
  active?: boolean
  children: React.ReactNode
  className?: string
  href?: LinkProps['href']
  id?: string
  onClick?: () => void
}

export const Button: React.FC<MenuButtonProps> = ({
  id,
  active,
  children,
  className,
  href,
  onClick,
}) => {
  const classes = [`${baseClass}__button`, active && `${baseClass}__button--selected`, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        id={id}
        onClick={() => {
          if (onClick) {
            onClick()
          }
        }}
      >
        {children}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button
        className={classes}
        id={id}
        onClick={() => {
          if (onClick) {
            onClick()
          }
        }}
        type="button"
      >
        {children}
      </button>
    )
  }

  return (
    <div className={classes} id={id}>
      {children}
    </div>
  )
}
