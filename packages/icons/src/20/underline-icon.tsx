import type { SVGProps } from 'react'

const SvgUnderlineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.4 3.5v.013c0 1.74 0 3.252.063 4.532.063 1.28.191 2.371.464 3.257.275.895.712 1.622 1.418 2.113.7.486 1.586.685 2.655.685 1.069 0 1.955-.2 2.655-.685.706-.49 1.143-1.218 1.418-2.113.273-.886.4-1.977.464-3.257.063-1.28.063-2.792.063-4.532V3.5h-1.2c0 1.755 0 3.238-.062 4.486-.062 1.252-.184 2.223-.411 2.962-.225.73-.538 1.19-.957 1.481-.425.296-1.039.471-1.97.471s-1.545-.175-1.97-.47c-.419-.292-.732-.752-.957-1.481-.227-.74-.35-1.71-.411-2.963C6.6 6.738 6.6 5.255 6.6 3.5H5.4ZM5 15.9v1.2h10v-1.2H5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgUnderlineIcon
