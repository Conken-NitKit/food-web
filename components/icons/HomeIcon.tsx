import { COLORS } from "../../constants";
import { IconProps } from "../../types";

export const HomeIcon: ({ isChoose }: IconProps) => JSX.Element = ({
  isChoose,
}) => {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 13.25V28C5 28.2652 5.10536 28.5196 5.29289 28.7071C5.48043 28.8946 5.73478 29 6 29H9H12V20.5C12 20.1022 12.158 19.7206 12.4393 19.4393C12.7206 19.158 13.1022 19 13.5 19H18.5C18.8978 19 19.2794 19.158 19.5607 19.4393C19.842 19.7206 20 20.1022 20 20.5V29H26C26.2652 29 26.5196 28.8946 26.7071 28.7071C26.8946 28.5196 27 28.2652 27 28V13.25"
        stroke={isChoose ? "url(#paint0_linear_12_152)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 16L16.6806 3.24893C16.3681 2.9189 15.6375 2.91515 15.3194 3.24893L2 16"
        stroke={isChoose ? "url(#paint1_linear_12_152)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_12_152"
          x1="16"
          y1="13.25"
          x2="16"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={COLORS.THEME_START} />
          <stop offset="1" stopColor={COLORS.THEME_END} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_12_152"
          x1="16"
          y1="3"
          x2="16"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={COLORS.THEME_START} />
          <stop offset="1" stopColor={COLORS.THEME_END} />
        </linearGradient>
      </defs>
    </svg>
  );
};
