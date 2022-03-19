import { menuItemIconProps } from "../../../interfaces";

export const UserIcon = ({ item, chosenItem }: menuItemIconProps) => {
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
        d="M26.5839 9C26.3143 12.3044 23.5571 15 20.5302 15C17.5034 15 14.7414 12.305 14.4766 9C14.2014 5.5625 16.8843 3 20.5302 3C24.1762 3 26.8591 5.625 26.5839 9Z"
        stroke={isChose ? "url(paint0_linear_28_920)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5302 19C14.5453 19 8.47099 22 7.34693 27.6625C7.20935 28.345 7.63655 29 8.42353 29H32.6376C33.4246 29 33.8497 28.345 33.7142 27.6625C32.5894 22 26.5151 19 20.5302 19Z"
        stroke={isChose ? "url(paint1_linear_28_920)" : "white"}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M10.6241 14.5H2.91943M6.77178 11V18V11Z"
        stroke={isChose ? "url(paint2_linear_28_920)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs>
        <linearGradient
          id="paint0_linear_28_920"
          x1="20.5301"
          y1="3"
          x2="20.5301"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_28_920"
          x1="20.5301"
          y1="19"
          x2="20.5301"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_28_920"
          x1="6.77129"
          y1="11"
          x2="6.77129"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
