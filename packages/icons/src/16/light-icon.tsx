import type { SVGProps } from 'react'

const SvgLightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.4 3.5V1h1.2v2.5H7.4ZM8 5.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8ZM4.4 8a3.6 3.6 0 1 1 7.2 0 3.6 3.6 0 0 1-7.2 0Zm3 4.5V15h1.2v-2.5H7.4Zm5.1-5.1H15v1.2h-2.5V7.4Zm-9 0H1v1.2h2.5V7.4Zm8.106 3.358 1.768 1.768-.849.848-1.767-1.768.848-.848ZM5.242 4.394 3.475 2.626l-.849.849 1.768 1.767.848-.848Zm5.516 0 1.767-1.768.849.849-1.768 1.767-.848-.848Zm-6.364 6.364-1.768 1.767.849.849 1.767-1.768-.848-.848Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgLightIcon
