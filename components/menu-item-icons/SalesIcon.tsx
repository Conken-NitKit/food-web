import { menuItemIconProps } from "../../interfaces";

export const SalesIcon = ({ item, chosen }: menuItemIconProps) => {
  const isChose = item === chosen;

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
        stroke={isChose ? "url(#paint0_linear_21_649)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4498 14H8.6981C7.93825 14 7.32227 14.5596 7.32227 15.25V24.75C7.32227 25.4404 7.93825 26 8.6981 26H11.4498C12.2096 26 12.8256 25.4404 12.8256 24.75V15.25C12.8256 14.5596 12.2096 14 11.4498 14Z"
        stroke={isChose ? "url(#paint1_linear_21_649)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.356 11H18.6044C17.8445 11 17.2285 11.5596 17.2285 12.25V24.75C17.2285 25.4404 17.8445 26 18.6044 26H21.356C22.1159 26 22.7319 25.4404 22.7319 24.75V12.25C22.7319 11.5596 22.1159 11 21.356 11Z"
        stroke={isChose ? "url(#paint2_linear_21_649)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.2369 7H28.4852C27.7254 7 27.1094 7.55964 27.1094 8.25V24.75C27.1094 25.4404 27.7254 26 28.4852 26H31.2369C31.9967 26 32.6127 25.4404 32.6127 24.75V8.25C32.6127 7.55964 31.9967 7 31.2369 7Z"
        stroke={isChose ? "url(#paint3_linear_21_649)" : "white"}
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
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_21_649"
          x1="10.0739"
          y1="14"
          x2="10.0739"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_21_649"
          x1="19.9802"
          y1="11"
          x2="19.9802"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_21_649"
          x1="29.8611"
          y1="7"
          x2="29.8611"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
