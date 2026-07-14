import type { SVGProps } from "react";

const LogoMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="10 9 37 36"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M41.722 24.223h-6.517l4.608-4.609a2.777 2.777 0 1 0-3.927-3.927l-4.609 4.608v-6.518a2.777 2.777 0 1 0-5.555 0v6.518l-4.608-4.608a2.777 2.777 0 1 0-3.927 3.927l4.608 4.608h-6.518a2.777 2.777 0 1 0 0 5.555h6.518l-4.608 4.609a2.777 2.777 0 1 0 3.927 3.927l4.608-4.608v6.517a2.777 2.777 0 1 0 5.555 0v-6.517l4.609 4.608a2.777 2.777 0 1 0 3.927-3.927l-4.608-4.609h6.517a2.777 2.777 0 1 0 0-5.555Z"
    />
  </svg>
);

export default LogoMark;
