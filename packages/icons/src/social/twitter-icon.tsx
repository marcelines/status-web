import type { SVGProps } from 'react'

const SvgTwitterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.979 11.024 1.025 1h5.379L19 18.98h-5.503l-4.722-6.808L2.81 19H1l6.979-7.976Zm6.152 6.758L3.32 2.197h2.453l10.92 15.585H14.13Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m18.518 1.018-6.716 7.688-.798-1.14 5.73-6.549 1.784.001Z"
    />
  </svg>
)
export default SvgTwitterIcon
