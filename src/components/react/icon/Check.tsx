import type { Icon } from "./types";

export const Check = ({ strokeWidth, classNameSvg, classNameI }: Icon) => {
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
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </i>
  );
};
