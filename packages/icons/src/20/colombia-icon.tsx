import type { SVGProps } from 'react'

const SvgColombiaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#FBD116"
      d="M17.778 2.778H2.222A2.222 2.222 0 0 0 0 5v5h20V5a2.222 2.222 0 0 0-2.222-2.222Z"
    />
    <path fill="#22408C" d="M0 10h20v3.889H0V10Z" />
    <path
      fill="#CE2028"
      d="M0 15c0 1.227.995 2.222 2.222 2.222h15.556A2.222 2.222 0 0 0 20 15v-1.111H0V15Z"
    />
  </svg>
)
export default SvgColombiaIcon
