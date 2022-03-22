import { IconProps } from "../../interfaces";

export const MonitoringIcon = ({ chosen }: MenuItemIconProps) => {
  const isChose = chosen === "monitoring";

  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8181 4C11.8763 4 9.97805 4.57582 8.36347 5.65465C6.74889 6.73348 5.49048 8.26686 4.74736 10.0609C4.00425 11.8549 3.80982 13.829 4.18866 15.7335C4.56749 17.6381 5.50258 19.3875 6.87567 20.7606C8.24876 22.1337 9.99818 23.0688 11.9027 23.4476C13.8072 23.8264 15.7813 23.632 17.5754 22.8889C19.3694 22.1458 20.9028 20.8874 21.9816 19.2728C23.0604 17.6582 23.6363 15.76 23.6363 13.8181C23.6361 11.2142 22.6016 8.71707 20.7604 6.87585C18.9192 5.03463 16.422 4.00017 13.8181 4V4Z"
        stroke={isChose ? "url(#paint0_linear_28_1136)" : "white"}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M21.1436 21.1431L28.0004 27.9999"
        stroke={isChose ? "url(#paint1_linear_28_1136)" : "white"}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_28_1136"
          x1="13.8181"
          y1="4"
          x2="13.8181"
          y2="23.6363"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_28_1136"
          x1="24.572"
          y1="21.1431"
          x2="24.572"
          y2="27.9999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
