import { menuItemIconProps } from "../../../interfaces";

export const OrderIcon = ({ item, chosenItem }: menuItemIconProps) => {
  const isChose = item === chosenItem;

  return (
    <svg
      width="36"
      height="32"
      viewBox="0 0 36 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7249 21V3L13.9262 4L16.1275 3L18.3248 4L20.5515 3L22.7316 4L24.9185 3L27.115 4L29.3356 3L31.5376 4L33.7383 3V17"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M33.7383 17V24C33.7383 25.3261 33.1584 26.5979 32.1264 27.5355C31.0943 28.4732 29.6945 29 28.2349 29V29C26.7753 29 25.3755 28.4732 24.3434 27.5355C23.3114 26.5979 22.7316 25.3261 22.7316 24V21H4.02015C3.87525 20.9988 3.73154 21.0239 3.59742 21.0737C3.4633 21.1236 3.34146 21.1972 3.23899 21.2903C3.13653 21.3834 3.0555 21.4941 3.00064 21.6159C2.94578 21.7378 2.91819 21.8684 2.91948 22C2.91948 26 3.38313 29 8.42283 29H28.2349"
        stroke={isChose ? "url(#paint0_linear_12_300)" : "white"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20.5302 14H29.3356M16.1276 9H29.3356H16.1276Z"
        stroke={isChose ? "url(#paint1_linear_12_300)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs>
        <linearGradient
          id="paint0_linear_12_300"
          x1="22.7318"
          y1="3"
          x2="22.7318"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_12_300"
          x1="18.3288"
          y1="17"
          x2="18.3288"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_12_300"
          x1="22.7315"
          y1="9"
          x2="22.7315"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
