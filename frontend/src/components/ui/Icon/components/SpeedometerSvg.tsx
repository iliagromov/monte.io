import React from 'react'

export const SpeedometerSvg = () => (
  <svg fill="none" viewBox="0 0 44 36">
    <circle cx="22" cy="22" r="4.5" stroke="currentColor" strokeWidth="3" />
    <mask id="dasdcxzas" fill="#fff">
      <path
        fillRule="evenodd"
        d="M38.971 36A21.91 21.91 0 0044 22C44 9.85 34.15 0 22 0S0 9.85 0 22a21.91 21.91 0 005.029 14H38.97z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="currentColor"
      d="M38.971 36v3h1.414l.9-1.09L38.97 36zM5.03 36l-2.313 1.91.9 1.09h1.413v-3zM41 22a18.91 18.91 0 01-4.342 12.09l4.627 3.82A24.91 24.91 0 0047 22h-6zM22 3c10.493 0 19 8.507 19 19h6C47 8.193 35.807-3 22-3v6zM3 22C3 11.507 11.507 3 22 3v-6C8.193-3-3 8.193-3 22h6zm4.342 12.09A18.91 18.91 0 013 22h-6a24.91 24.91 0 005.716 15.91l4.626-3.82zM5.029 39H38.97v-6H5.03v6z"
      mask="url(#dasdcxzas)"
    />
    <rect
      width="3"
      height="11.195"
      x="31.914"
      y="9.574"
      fill="currentColor"
      rx="1.5"
      transform="rotate(45 31.914 9.574)"
    />
  </svg>
)
