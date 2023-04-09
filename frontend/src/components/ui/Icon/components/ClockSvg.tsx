import React from 'react'

export const ClockSvg = () => (
  <svg viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="3" />
    <rect x="14" y="8" width="3" height="11" rx="1.5" fill="currentColor" />
    <rect
      x="23"
      y="16"
      width="3"
      height="9"
      rx="1.5"
      transform="rotate(90 23 16)"
      fill="currentColor"
    />
  </svg>
)
