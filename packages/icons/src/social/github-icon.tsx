import type { SVGProps } from 'react'

const SvgGithubIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_4319_1240)">
      <circle cx={10} cy={10} r={10} fill="#000" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12.345 19.724c-.752.18-1.537.276-2.345.276-.8 0-1.577-.094-2.322-.271l-.002-.336c-.003-.72-.008-1.758-.008-2.283-2.355.444-2.965-.589-3.152-1.13a3.493 3.493 0 0 0-.961-1.357c-.328-.18-.797-.625-.012-.637.3.033.587.14.838.312.251.171.458.402.603.673.129.236.301.444.508.612a1.957 1.957 0 0 0 2.223.181c.04-.489.253-.946.597-1.286-2.085-.24-4.265-1.069-4.265-4.746-.013-.955.33-1.88.96-2.583a3.535 3.535 0 0 1 .095-2.547s.785-.252 2.578.985a8.628 8.628 0 0 1 4.687 0c1.793-1.25 2.578-.985 2.578-.985.347.806.38 1.717.094 2.547.632.703.976 1.628.96 2.583 0 3.69-2.19 4.506-4.276 4.746.223.233.396.512.505.819.109.307.153.634.127.96 0 .855-.005 2.153-.008 3.021l-.002.446Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_4319_1240">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgGithubIcon
