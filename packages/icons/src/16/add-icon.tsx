import type { SVGProps } from 'react'

const SvgAddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.4 8.6v4.9h1.2V8.6h4.9V7.4H8.6V2.5H7.4v4.9H2.5v1.2h4.9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgAddIcon