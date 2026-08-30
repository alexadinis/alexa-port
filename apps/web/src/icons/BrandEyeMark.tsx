import type { SVGProps } from "react";

const BrandEyeMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="145 85 880 910"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      className="brand-eye-mark-outer"
      fill="var(--focus-logo-outer, #101010)"
      d="M594.75,125.99l76.64,145.82,147.71-72.92c8.57-4.23,18.37,2.89,16.99,12.35l-23.71,163.02,162.36,27.83c9.42,1.61,13.16,13.13,6.49,19.98l-115,117.95,115,117.95c6.67,6.84,2.93,18.36-6.49,19.98l-162.36,27.83,23.71,163.02c1.38,9.46-8.42,16.58-16.99,12.35l-147.71-72.92-76.64,145.82c-4.45,8.46-16.56,8.46-21,0l-76.64-145.82-147.71,72.92c-8.57,4.23-18.37-2.89-16.99-12.35l23.71-163.02-162.36-27.83c-9.42-1.61-13.16-13.13-6.49-19.98l115-117.95-115-117.95c-6.67-6.84-2.93-18.36,6.49-19.98l162.36-27.83-23.71-163.02c-1.38-9.46,8.42-16.58,16.99-12.35l147.71,72.92,76.64-145.82c4.45-8.46,16.56-8.46,21,0Z"
    />
    <ellipse
      className="brand-eye-mark-eye"
      fill="var(--focus-logo-eye, #ececec)"
      cx="584.25"
      cy="514.12"
      rx="173.09"
      ry="82.13"
    />
    <circle
      className="brand-eye-mark-pupil"
      fill="var(--focus-logo-pupil, #101010)"
      cx="584.25"
      cy="467.58"
      r="67.86"
    />
  </svg>
);

export default BrandEyeMark;
