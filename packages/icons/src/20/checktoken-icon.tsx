import type { SVGProps } from 'react'

const SvgChecktokenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#647084"
      fillRule="evenodd"
      d="M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
      clipRule="evenodd"
    />
    <path stroke="#fff" strokeWidth={1.2} d="M14 10a4 4 0 1 1-4-4" />
    <mask
      id="prefix__mask0_4322_966"
      width={6}
      height={6}
      x={10}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="url(#prefix__paint0_linear_4322_966)" d="M10 4h6v6h-6V4Z" />
    </mask>
    <g mask="url(#prefix__mask0_4322_966)">
      <path stroke="#fff" strokeWidth={1.2} d="M14 10a4 4 0 0 0-4-4" />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_4322_966"
        x1={9.6}
        x2={13.117}
        y1={5.6}
        y2={7.928}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#09101C" stopOpacity={0} />
        <stop offset={1} stopColor="#09101C" />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgChecktokenIcon
