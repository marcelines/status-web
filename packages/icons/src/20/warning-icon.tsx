import type { SVGProps } from 'react'

const SvgWarningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.23 1.946 10 1.85l-.23.095-5.303 2.196-.23.095-.095.23L1.946 9.77 1.85 10l.095.23 2.196 5.303.095.23.23.095 5.303 2.196.23.096.23-.096 5.303-2.196.23-.096.095-.23 2.196-5.302.096-.23-.096-.23-2.196-5.303-.096-.23-.23-.095-5.302-2.196ZM3.15 10l2.006-4.844L10 3.149l4.844 2.007L16.851 10l-2.007 4.844L10 16.851l-4.844-2.007L3.149 10Zm7.4 1.5.2-6h-1.5l.2 6h1.1Zm.2 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgWarningIcon
