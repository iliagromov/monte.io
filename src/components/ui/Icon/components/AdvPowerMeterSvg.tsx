import React from 'react'

export const AdvPowerMeterSvg = () => (
  <svg fill="none" viewBox="0 0 40 40">
    <circle
      cx="20"
      cy="19.998"
      r="18.724"
      stroke="currentColor"
      strokeWidth="2"
    />
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M6.001 33.275A19.67 19.67 0 0120.429 27a19.67 19.67 0 0114.428 6.275 19.67 19.67 0 01-14.428 6.275A19.67 19.67 0 016 33.275z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="currentColor"
      d="M6.001 33.275l-1.463-1.364-1.272 1.364 1.272 1.364 1.463-1.364zm28.856 0l1.462 1.364 1.272-1.364-1.272-1.364-1.462 1.364zM7.464 34.639A17.67 17.67 0 0120.429 29v-4a21.67 21.67 0 00-15.89 6.911l2.925 2.728zM20.429 29a17.67 17.67 0 0112.965 5.639l2.925-2.728A21.67 21.67 0 0020.43 25v4zm12.965 2.91a17.67 17.67 0 01-12.965 5.64v4a21.67 21.67 0 0015.89-6.911l-2.925-2.728zm-12.965 5.64A17.67 17.67 0 017.464 31.91L4.538 34.64a21.67 21.67 0 0015.89 6.91v-4z"
      mask="url(#a)"
    />
    <path
      stroke="currentColor"
      strokeWidth="2"
      d="M21.714 22.37a2.64 2.64 0 01-3.912-1.806l-1.364-7.353 5.677 4.868a2.64 2.64 0 01-.4 4.29z"
    />
    <rect
      width="4.483"
      height="1.793"
      x="20.896"
      y=".273"
      fill="currentColor"
      rx=".897"
      transform="rotate(90 20.896 .273)"
    />
    <rect
      width="4.483"
      height="1.793"
      x="6.687"
      y="5.414"
      fill="currentColor"
      rx=".897"
      transform="rotate(45 6.687 5.414)"
    />
    <rect
      width="4.483"
      height="1.793"
      x="34.581"
      y="6.688"
      fill="currentColor"
      rx=".897"
      transform="rotate(135 34.581 6.688)"
    />
    <rect
      width="4.483"
      height="1.793"
      x="39.724"
      y="20.895"
      fill="currentColor"
      rx=".897"
      transform="rotate(-180 39.724 20.895)"
    />
    <rect
      width="4.483"
      height="1.793"
      x="4.759"
      y="20.895"
      fill="currentColor"
      rx=".897"
      transform="rotate(-180 4.759 20.895)"
    />
  </svg>
)
