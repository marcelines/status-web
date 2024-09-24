import type { SVGProps } from 'react'

const SvgArrowLeftrightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fill="currentColor"
      fillRule="evenodd"
      d="m1.077 5.648 2.5-3 .845.704L2.674 5.45h6.652L7.577 3.352l.846-.704 2.5 3 .293.352-.293.352-2.5 3-.846-.704L9.326 6.55H2.674l1.748 2.098-.845.704-2.5-3L.784 6l.293-.352Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgArrowLeftrightIcon
