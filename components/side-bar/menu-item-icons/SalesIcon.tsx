import { menuItemIconProps } from "../../../interfaces";

export const SalesIcon = ({ item, chosenItem }: menuItemIconProps) => {
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
        d="M2.91943 2V29C2.91943 29.2652 3.0354 29.5196 3.24181 29.7071C3.44823 29.8946 3.72819 30 4.0201 30H33.7382"
        stroke={isChose ? "url(paint0_linear_21_649)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4497 14H8.69798C7.93813 14 7.32214 14.5596 7.32214 15.25V24.75C7.32214 25.4404 7.93813 26 8.69798 26H11.4497C12.2095 26 12.8255 25.4404 12.8255 24.75V15.25C12.8255 14.5596 12.2095 14 11.4497 14Z"
        stroke={isChose ? "url(paint1_linear_21_649)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3557 11H18.604C17.8441 11 17.2281 11.5596 17.2281 12.25V24.75C17.2281 25.4404 17.8441 26 18.604 26H21.3557C22.1155 26 22.7315 25.4404 22.7315 24.75V12.25C22.7315 11.5596 22.1155 11 21.3557 11Z"
        stroke={isChose ? "url(paint2_linear_21_649)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.237 7H28.4853C27.7255 7 27.1095 7.55964 27.1095 8.25V24.75C27.1095 25.4404 27.7255 26 28.4853 26H31.237C31.9969 26 32.6129 25.4404 32.6129 24.75V8.25C32.6129 7.55964 31.9969 7 31.237 7Z"
        stroke={isChose ? "url(paint3_linear_21_649)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs>
        <linearGradient
          id="paint0_linear_21_649"
          x1="18.3288"
          y1="2"
          x2="18.3288"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_21_649"
          x1="10.0739"
          y1="14"
          x2="10.0739"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_21_649"
          x1="19.9802"
          y1="11"
          x2="19.9802"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_21_649"
          x1="29.8611"
          y1="7"
          x2="29.8611"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
