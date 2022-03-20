import { menuItemIconProps } from "../../interfaces";

export const UserIcon = ({ chosen }: menuItemIconProps) => {
  const isChose = item === chosen;

  return (
    <svg viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.5838 9C26.3142 12.3044 23.557 15 20.5301 15C17.5033 15 14.7413 12.305 14.4764 9C14.2013 5.5625 16.8842 3 20.5301 3C24.1761 3 26.859 5.625 26.5838 9Z"
        stroke={isChose ? "url(#paint0_linear_28_920)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5301 19C14.5452 19 8.47087 22 7.34681 27.6625C7.20923 28.345 7.63642 29 8.4234 29H32.6375C33.4245 29 33.8496 28.345 33.7141 27.6625C32.5893 22 26.515 19 20.5301 19Z"
        stroke={isChose ? "url(#paint1_linear_28_920)" : "white"}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M10.6236 14.5H2.91895M6.77129 11V18V11Z"
        stroke={isChose ? "url(#paint2_linear_28_920)" : "white"}
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
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_28_920"
          x1="20.5301"
          y1="19"
          x2="20.5301"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_28_920"
          x1="6.77129"
          y1="11"
          x2="6.77129"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
