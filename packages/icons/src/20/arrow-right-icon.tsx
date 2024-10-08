import type { SVGProps } from 'react'

const SvgArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.944 10.404.367-.404-.367-.403-5-5.5-.888.807L15.144 9.4H4v1.2h11.144l-4.088 4.497.888.807 5-5.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgArrowRightIcon
