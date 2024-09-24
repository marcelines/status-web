import type { SVGProps } from 'react'

const SvgVolumeMinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.05 2V.9l-.88.66-1.854 1.39c-.558.007-1.039.04-1.445.12-.452.088-.85.241-1.166.512C1.059 4.136.95 5.007.95 6c0 .993.109 1.864.755 2.417.316.272.714.425 1.166.513.406.08.887.113 1.445.119l1.854 1.39.88.66V2ZM4.83 3.94l1.12-.84v5.8l-1.12-.84-.146-.11H4.5c-.612 0-1.07-.031-1.417-.1-.345-.067-.541-.164-.662-.268-.23-.196-.37-.575-.37-1.582 0-1.007.14-1.386.37-1.583.12-.103.317-.2.662-.268.346-.068.805-.1 1.417-.1h.184l.146-.11ZM9.05 6a2.05 2.05 0 0 0-.6-1.45l-.778.778a.95.95 0 0 1 0 1.344l.778.778c.384-.385.6-.906.6-1.45Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgVolumeMinIcon
