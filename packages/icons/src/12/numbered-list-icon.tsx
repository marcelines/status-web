import type { SVGProps } from 'react'

const SvgNumberedListIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 1.45h7v1.1H4v-1.1Zm0 4h7v1.1H4v-1.1Zm7 4H4v1.1h7v-1.1Z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.84 1.092c-.105.1-.293.152-.485.152h-.112v-.58h.076c.336-.012.528-.14.64-.444h.524V3H1.84V1.092ZM.941 6.528c.416-.252.76-.492 1.004-.72.272-.252.38-.46.38-.732 0-.264-.128-.408-.36-.408-.236 0-.376.152-.376.4 0 .068.012.144.028.228l-.656-.064a1.02 1.02 0 0 1-.024-.216c0-.52.408-.856 1.06-.856.64 0 1.016.316 1.016.868 0 .372-.164.688-.5.988-.184.16-.412.316-.692.472h1.216V7H.942v-.472Zm-.049 3.628c.008.556.428.904 1.096.904.66 0 1.084-.324 1.084-.836 0-.376-.22-.604-.628-.664.332-.076.556-.324.556-.636 0-.484-.364-.764-1.004-.764-.656 0-1.076.348-1.076.892l.636.084c0-.308.148-.488.408-.488.236 0 .372.128.372.352 0 .236-.144.368-.428.368h-.144v.44h.152c.324 0 .48.128.48.372s-.14.384-.404.384c-.272 0-.444-.176-.448-.468l-.652.06Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgNumberedListIcon
