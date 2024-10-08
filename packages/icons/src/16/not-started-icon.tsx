import type { SVGProps } from 'react'

const SvgNotStartedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.139 1.456a6.655 6.655 0 0 1 1.722 0l-.155 1.19a5.456 5.456 0 0 0-1.412 0l-.155-1.19Zm3.388.445a6.594 6.594 0 0 1 1.491.863l-.731.951a5.393 5.393 0 0 0-1.22-.706l.46-1.108Zm-6.545.863c.454-.35.954-.64 1.491-.863l.46 1.108c-.439.182-.848.42-1.22.706l-.731-.951Zm9.254 1.218c.349.454.64.954.863 1.491l-1.109.46a5.393 5.393 0 0 0-.706-1.22l.952-.731ZM1.901 5.473a6.594 6.594 0 0 1 .863-1.491l.951.73a5.393 5.393 0 0 0-.706 1.221l-1.108-.46ZM14.544 7.14a6.64 6.64 0 0 1 0 1.722l-1.19-.155a5.458 5.458 0 0 0 0-1.412l1.19-.155ZM1.4 7.999c0-.29.019-.578.056-.86l1.19.155a5.456 5.456 0 0 0 0 1.412l-1.19.155A6.656 6.656 0 0 1 1.4 8Zm12.699 2.528a6.598 6.598 0 0 1-.863 1.491l-.952-.731c.286-.372.524-.782.706-1.22l1.109.46ZM2.764 12.018a6.594 6.594 0 0 1-.863-1.492l1.108-.46c.182.44.42.85.706 1.221l-.951.731Zm2.71 2.08a6.598 6.598 0 0 1-1.492-.862l.73-.952c.373.286.782.524 1.221.706l-.46 1.109Zm6.544-.862c-.454.349-.955.64-1.492.863l-.46-1.109c.44-.181.85-.42 1.221-.706l.731.952Zm-3.157 1.308a6.64 6.64 0 0 1-1.722 0l.155-1.19a5.458 5.458 0 0 0 1.412 0l.155 1.19Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgNotStartedIcon
