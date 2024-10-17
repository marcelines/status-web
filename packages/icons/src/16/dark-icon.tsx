import type { SVGProps } from 'react'

const SvgDarkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.848 9.348.585.134.214-.933-.933.214.134.585ZM6.652 2.152l.585.134.214-.933-.933.214.134.585Zm7.062 6.611c-.39.09-.796.137-1.214.137v1.2c.51 0 1.005-.058 1.482-.167l-.268-1.17ZM12.5 8.9a5.4 5.4 0 0 1-5.4-5.4H5.9a6.6 6.6 0 0 0 6.6 6.6V8.9ZM7.1 3.5c0-.418.048-.824.137-1.214l-1.17-.268A6.62 6.62 0 0 0 5.9 3.5h1.2ZM2.6 8a5.402 5.402 0 0 1 4.186-5.263l-.268-1.17A6.602 6.602 0 0 0 1.4 8h1.2ZM8 13.4A5.4 5.4 0 0 1 2.6 8H1.4A6.6 6.6 0 0 0 8 14.6v-1.2Zm5.263-4.186A5.402 5.402 0 0 1 8 13.4v1.2a6.602 6.602 0 0 0 6.433-5.118l-1.17-.268Z"
    />
  </svg>
)
export default SvgDarkIcon