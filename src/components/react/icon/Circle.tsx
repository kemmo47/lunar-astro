import type { Icon } from "./types";

export const Circle = ({ strokeWidth, classNameSvg, classNameI }: Icon) => {
  return (
    <i className={classNameI}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        className={classNameSvg}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </i>
  );
};
