import type { SVGProps } from 'react'

const SvgLockedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2.4c-.798 0-1.732.129-2.461.777-.69.613-1.082 1.586-1.133 2.998-.577.15-1.068.388-1.455.776-.5.5-.752 1.173-.886 1.982C3.93 9.737 3.9 10.75 3.9 12s.03 2.263.165 3.067c.134.81.385 1.482.886 1.982.5.5 1.173.752 1.982.887.804.134 1.818.164 3.067.164 1.25 0 2.263-.03 3.067-.164.81-.135 1.482-.386 1.982-.887.5-.5.752-1.173.887-1.982.134-.804.164-1.818.164-3.067s-.03-2.263-.164-3.067c-.135-.809-.386-1.482-.886-1.982-.388-.388-.879-.626-1.456-.776-.051-1.412-.444-2.386-1.133-2.998C11.732 2.529 10.797 2.4 10 2.4Zm2.382 3.578c-.076-1.061-.385-1.608-.718-1.905-.396-.351-.961-.473-1.664-.473s-1.268.122-1.664.473c-.333.297-.642.844-.718 1.905C8.292 5.916 9.082 5.9 10 5.9c.918 0 1.708.016 2.382.078ZM5.248 9.13C5.132 9.825 5.1 10.749 5.1 12c0 1.251.032 2.175.148 2.87.115.691.302 1.081.551 1.33.25.25.64.437 1.331.552.696.116 1.62.148 2.87.148 1.251 0 2.175-.032 2.87-.148.692-.115 1.081-.302 1.33-.551.25-.25.437-.64.552-1.33.116-.697.148-1.62.148-2.871s-.032-2.175-.148-2.87c-.115-.691-.302-1.081-.551-1.33-.25-.25-.64-.437-1.33-.552-.696-.116-1.62-.148-2.87-.148-1.252 0-2.175.032-2.871.148-.691.115-1.081.302-1.33.551-.25.25-.437.64-.552 1.33ZM8.5 11.4h3v1.2h-3v-1.2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgLockedIcon
