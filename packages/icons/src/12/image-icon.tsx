import type { SVGProps } from 'react'

const SvgImageIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_6506_33)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.611 1.611C2.536.686 4.004.45 6.001.45c1.995 0 3.463.236 4.388 1.161.925.925 1.161 2.393 1.161 4.389 0 1.996-.236 3.464-1.16 4.389-.926.925-2.394 1.161-4.39 1.161-1.996 0-3.464-.236-4.389-1.161C.906 9.683.601 8.662.496 7.33a.106.106 0 0 1-.018-.006l.002-.003.001-.004.004-.011.008-.02C.463 6.884.45 6.456.45 6c0-1.996.236-3.464 1.161-4.389Zm.778 8c-.407-.407-.658-1.043-.77-2.092.067-.09.173-.207.336-.33.387-.29 1.14-.64 2.545-.64 1.208 0 2.19.914 2.917 2.006a10.021 10.021 0 0 1 .899 1.697c-.577.134-1.329.198-2.316.198-2.004 0-3.036-.264-3.61-.839Zm7.222 0a1.898 1.898 0 0 1-.276.228 11.505 11.505 0 0 0-1.002-1.894C7.56 6.787 6.292 5.45 4.5 5.45c-1.39 0-2.326.304-2.95.686V6c0-2.004.264-3.036.839-3.611C2.964 1.814 3.996 1.55 6 1.55c2.004 0 3.036.264 3.611.839.575.575.84 1.607.84 3.611 0 2.004-.265 3.036-.84 3.611ZM8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_6506_33">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgImageIcon