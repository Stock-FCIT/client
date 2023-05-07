import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    viewBox="0 0 23 20"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.12 18.81c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12C1.5 3.6 3.99 1.1 7.06 1.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c3.07 0 5.56 2.5 5.56 5.59 0 7-6.48 11.13-9.38 12.12Z"
    />
  </svg>
)
export default SvgComponent
