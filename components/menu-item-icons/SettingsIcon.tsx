import { url } from "inspector";
import { MenuItemIconProps } from "../../interfaces";

export const SettingsIcon = ({ chosen }: MenuItemIconProps) => {
  const isChose = chosen === "Settings";

  return (
    <svg viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.7625 12.3944C17.8592 12.3133 16.9504 12.4879 16.1605 12.8943C15.3706 13.3006 14.7383 13.9188 14.3501 14.6643C13.9619 15.4098 13.8368 16.246 13.9919 17.0586C14.147 17.8712 14.5748 18.6203 15.2167 19.2034C15.8585 19.7866 16.6831 20.1752 17.5774 20.3162C18.4718 20.4571 19.3922 20.3434 20.2128 19.9907C21.0333 19.638 21.7137 19.0635 22.161 18.3459C22.6082 17.6283 22.8004 16.8026 22.7112 15.9819C22.6095 15.0619 22.1608 14.2021 21.4412 13.5483C20.7215 12.8944 19.7752 12.4868 18.7625 12.3944V12.3944ZM29.3634 16.375C29.3606 16.8098 29.3254 17.2439 29.2581 17.6744L32.3682 19.8906C32.5036 19.9926 32.5949 20.1349 32.6258 20.2923C32.6566 20.4496 32.6251 20.6118 32.5368 20.75L29.5945 25.375C29.5052 25.5119 29.3655 25.6157 29.2001 25.6682C29.0348 25.7207 28.8543 25.7184 28.6906 25.6619L25.6018 24.5319C25.4315 24.4703 25.247 24.448 25.0649 24.4671C24.8828 24.4862 24.7087 24.546 24.5583 24.6413C24.0869 24.9362 23.5915 25.1982 23.0765 25.425C22.9146 25.4965 22.7745 25.6031 22.6687 25.7355C22.5629 25.8678 22.4946 26.0217 22.4697 26.1838L22.0068 29.1769C21.9764 29.3349 21.8865 29.4785 21.7525 29.5831C21.6185 29.6876 21.4487 29.7466 21.2721 29.75H15.3876C15.2139 29.7473 15.0465 29.6909 14.9128 29.5901C14.7791 29.4893 14.6872 29.3502 14.6522 29.1956L14.1899 26.2069C14.164 26.0431 14.0939 25.8877 13.9859 25.7544C13.8779 25.6212 13.7353 25.5142 13.5708 25.4431C13.0564 25.2175 12.5627 24.9548 12.0945 24.6575C11.9446 24.5627 11.7711 24.5034 11.5897 24.4847C11.4082 24.466 11.2245 24.4887 11.0551 24.5506L7.96703 25.68C7.80338 25.7366 7.62298 25.739 7.45763 25.6866C7.29227 25.6342 7.15256 25.5305 7.0631 25.3937L4.12087 20.7687C4.03241 20.6306 4.0008 20.4684 4.03166 20.311C4.06253 20.1536 4.15386 20.0113 4.28941 19.9094L6.91795 18.0344C7.06196 17.9305 7.17513 17.7956 7.24721 17.642C7.31929 17.4883 7.34799 17.3207 7.3307 17.1544C7.30594 16.8938 7.2908 16.6338 7.2908 16.3731C7.2908 16.1125 7.30525 15.8562 7.3307 15.6012C7.3461 15.436 7.316 15.2698 7.2431 15.1177C7.17021 14.9656 7.05681 14.8324 6.91313 14.73L4.28597 12.855C4.15262 12.7526 4.06321 12.6107 4.0334 12.4544C4.00359 12.2981 4.03529 12.1372 4.12293 12L7.06516 7.375C7.15451 7.23812 7.29418 7.13429 7.45955 7.0818C7.62491 7.02932 7.80536 7.03156 7.96909 7.08813L11.0578 8.21812C11.2282 8.27974 11.4127 8.302 11.5948 8.28291C11.7769 8.26383 11.951 8.20398 12.1014 8.10875C12.5728 7.81383 13.0682 7.55182 13.5832 7.325C13.7451 7.2535 13.8852 7.14688 13.991 7.01455C14.0968 6.88222 14.1651 6.72826 14.1899 6.56625L14.6529 3.57312C14.6833 3.41505 14.7732 3.27148 14.9072 3.16694C15.0412 3.06241 15.211 3.0034 15.3876 3H21.2721C21.4457 3.00273 21.6132 3.05913 21.7469 3.1599C21.8806 3.26067 21.9725 3.3998 22.0075 3.55437L22.4697 6.54313C22.4957 6.70692 22.5658 6.86234 22.6738 6.99559C22.7818 7.12883 22.9244 7.23576 23.0889 7.30688C23.6033 7.53247 24.097 7.79519 24.5651 8.0925C24.715 8.18726 24.8885 8.24664 25.07 8.2653C25.2515 8.28396 25.4352 8.2613 25.6046 8.19938L28.6927 7.07C28.8563 7.01338 29.0367 7.01105 29.2021 7.06341C29.3674 7.11578 29.5071 7.21948 29.5966 7.35625L32.5388 11.9812C32.6273 12.1194 32.6589 12.2816 32.628 12.439C32.5972 12.5964 32.5058 12.7387 32.3703 12.8406L29.7417 14.7156C29.5971 14.8191 29.4833 14.9539 29.4106 15.1076C29.3379 15.2613 29.3087 15.429 29.3255 15.5956C29.3483 15.8544 29.3634 16.1144 29.3634 16.375Z"
        stroke={isChose ? "url(#paint0_linear_28_1073)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_28_1073"
          x1="15.3292"
          y1="1"
          x2="15.3292"
          y2="27.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2A649" />
          <stop offset="1" stopColor="#F8714B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
