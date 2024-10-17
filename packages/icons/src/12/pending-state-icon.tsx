import type { SVGProps } from 'react'

const SvgPendingStateIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g
      stroke="#647084"
      strokeWidth={1.1}
      clipPath="url(#prefix__clip0_3271_991)"
    >
      <circle cx={6} cy={6} r={5.45} opacity={0.4} />
      <path d="M8 7.5 6 6V3.5" />
    </g>
    <defs>
      <clipPath id="prefix__clip0_3271_991">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPendingStateIcon