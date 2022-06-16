import { COLORS } from "../../constants";
import { IconProps } from "../../types";

export const MenuIcon = ({ isChose }: IconProps) => {
  return (
    <svg viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.537 21.3357V10.6632C31.5365 10.3139 31.4353 9.97076 31.2435 9.66801C31.0518 9.36526 30.7761 9.11342 30.4439 8.93756L19.9875 3.40881C19.4837 3.14234 18.9112 3.00195 18.3282 3.00195C17.7453 3.00195 17.1727 3.14234 16.669 3.40881L6.21395 8.93756C5.88175 9.11342 5.60604 9.36526 5.41426 9.66801C5.22248 9.97076 5.12132 10.3139 5.12085 10.6632V21.3357C5.12108 21.6852 5.22212 22.0286 5.41392 22.3316C5.60571 22.6346 5.88155 22.8866 6.21395 23.0626L16.6703 28.5913C17.1743 28.8574 17.7467 28.9976 18.3296 28.9976C18.9125 28.9976 19.4849 28.8574 19.9889 28.5913L30.4452 23.0626C30.7774 22.8864 31.0529 22.6343 31.2445 22.3313C31.436 22.0284 31.5369 21.6851 31.537 21.3357Z"
        stroke={isChose ? "url(#paint0_linear_12_250)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.46484 9.62439L18.3289 16.4994M18.3289 16.4994L31.193 9.62439M18.3289 16.4994V28.9994"
        stroke={isChose ? "url(#paint1_linear_12_250)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_12_250"
          x1="18.3287"
          y1="3.00195"
          x2="18.3287"
          y2="28.9976"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={COLORS.THEME_START} />
          <stop offset="1" stopColor={COLORS.THEME_END} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_12_250"
          x1="18.3287"
          y1="9.62439"
          x2="18.3287"
          y2="28.9994"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={COLORS.THEME_START} />
          <stop offset="1" stopColor={COLORS.THEME_END} />
        </linearGradient>
      </defs>
    </svg>
  );
};
