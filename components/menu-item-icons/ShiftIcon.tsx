import { menuItemIconProps } from "../../interfaces";

export const ShiftIcon = ({ item, chosenItem }: menuItemIconProps) => {
  const isChose = item === chosenItem;

  return (
    <svg
      width="36"
      height="32"
      viewBox="0 0 36 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12_175)">
        <path
          d="M17.3288 8C17.3288 7.44772 17.7765 7 18.3288 7C18.8811 7 19.3288 7.44772 19.3288 8H17.3288ZM18.3288 16.2759L17.8376 17.1469L17.3288 16.86V16.2759H18.3288ZM25.4241 19.129C25.9051 19.4002 26.0752 20.0101 25.8039 20.4912C25.5326 20.9723 24.9227 21.1423 24.4417 20.871L25.4241 19.129ZM19.3288 8V16.2759H17.3288V8H19.3288ZM18.82 15.4048L25.4241 19.129L24.4417 20.871L17.8376 17.1469L18.82 15.4048Z"
          fill={isChose ? "url(#paint0_linear_28_799)" : "white"}
        />
        <path
          d="M5.47154 2.75C5.47154 2.33579 5.80733 2 6.22154 2C6.63575 2 6.97154 2.33579 6.97154 2.75H5.47154ZM6.22154 7.25V8H5.47154V7.25H6.22154ZM11.1746 6.5C11.5888 6.5 11.9246 6.83579 11.9246 7.25C11.9246 7.66421 11.5888 8 11.1746 8V6.5ZM6.97154 2.75L6.97154 7.25L5.47154 7.25L5.47154 2.75H6.97154ZM6.22154 6.5L11.1746 6.5V8L6.22154 8L6.22154 6.5Z"
          fill={isChose ? "url(#paint1_linear_28_799)" : "white"}
        />
        <path
          d="M2.94519 16.7778C3.1511 20.1665 4.70595 23.3717 7.32005 25.7961C13.2885 31.3403 23.1789 31.3722 29.2256 25.8992C35.2638 20.4339 35.2507 11.5744 29.2256 6.10034C23.2929 0.710308 13.7237 0.631934 7.68892 5.86832"
          stroke={isChose ? "url(#paint2_linear_28_799)" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_28_799"
          x1="21.6311"
          y1="8"
          x2="21.6311"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_28_799"
          x1="8.69829"
          y1="2.75"
          x2="8.69829"
          y2="7.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_28_799"
          x1="7.43345"
          y1="6.10064"
          x2="27.1416"
          y2="27.7928"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A649" />
          <stop offset="1" stop-color="#F8714B" />
        </linearGradient>
        <clipPath id="clip0_12_175">
          <rect
            width="35.2215"
            height="32"
            fill="white"
            transform="translate(0.71814)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
