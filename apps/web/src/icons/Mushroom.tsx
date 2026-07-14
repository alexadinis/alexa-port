import type { SVGProps } from "react";

const Mushroom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M40 136a88 88 0 0 1 176 0H40Z"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M104 136v43c0 20-8 29-16 37h80c-8-8-16-17-16-37v-43"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m82 136 14-19m78 19-14-19m-32 19V105"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
    />
  </svg>
);

export default Mushroom;
