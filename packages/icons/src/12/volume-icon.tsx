import type { SVGProps } from 'react'

const SvgVolumeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    viewBox="0 0 12 12"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.1}
      d="M6.5 3.5c-2.5 0-3 .5-3 2.5s.5 2.5 3 2.5l2 1.5V2l-2 1.5Z"
    />
  </svg>
)
export default SvgVolumeIcon