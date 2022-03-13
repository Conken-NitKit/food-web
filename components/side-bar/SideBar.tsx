import { useState } from "react";
import Link from "next/link";

import { MenuItem } from ".";

export const SideBar = () => {
  const [chosenItem, setChosenItem] = useState("home");

  const homeIcon = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 13.25V28C5 28.2652 5.10536 28.5196 5.29289 28.7071C5.48043 28.8946 5.73478 29 6 29H9H12V20.5C12 20.1022 12.158 19.7206 12.4393 19.4393C12.7206 19.158 13.1022 19 13.5 19H18.5C18.8978 19 19.2794 19.158 19.5607 19.4393C19.842 19.7206 20 20.1022 20 20.5V29H26C26.2652 29 26.5196 28.8946 26.7071 28.7071C26.8946 28.5196 27 28.2652 27 28V13.25"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30 16L16.6806 3.24893C16.3681 2.9189 15.6375 2.91515 15.3194 3.24893L2 16"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const menuIcon = (
    <svg
      width="36"
      height="32"
      viewBox="0 0 36 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.537 21.3357V10.6632C31.5365 10.3139 31.4353 9.97076 31.2435 9.66801C31.0518 9.36526 30.7761 9.11342 30.4439 8.93756L19.9875 3.40881C19.4837 3.14234 18.9112 3.00195 18.3282 3.00195C17.7453 3.00195 17.1727 3.14234 16.669 3.40881L6.21395 8.93756C5.88175 9.11342 5.60604 9.36526 5.41426 9.66801C5.22248 9.97076 5.12132 10.3139 5.12085 10.6632V21.3357C5.12108 21.6852 5.22212 22.0286 5.41392 22.3316C5.60571 22.6346 5.88155 22.8866 6.21395 23.0626L16.6703 28.5913C17.1743 28.8574 17.7467 28.9976 18.3296 28.9976C18.9125 28.9976 19.4849 28.8574 19.9889 28.5913L30.4452 23.0626C30.7774 22.8864 31.0529 22.6343 31.2445 22.3313C31.436 22.0284 31.5369 21.6851 31.537 21.3357Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.46484 9.62439L18.3289 16.4994M18.3289 16.4994L31.193 9.62439M18.3289 16.4994V28.9994"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="font-bold text-1.8w text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul className="mt-13p">
        <MenuItem href="home" name="ホーム" />
        <MenuItem href="menu" name="メニュー" />

        <li key="sales">
          <Link href="/sales">
            <p>
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
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M33.7383 17V24C33.7383 25.3261 33.1584 26.5979 32.1264 27.5355C31.0943 28.4732 29.6945 29 28.2349 29V29C26.7753 29 25.3755 28.4732 24.3434 27.5355C23.3114 26.5979 22.7316 25.3261 22.7316 24V21H4.02015C3.87525 20.9988 3.73154 21.0239 3.59742 21.0737C3.4633 21.1236 3.34146 21.1972 3.23899 21.2903C3.13653 21.3834 3.0555 21.4941 3.00064 21.6159C2.94578 21.7378 2.91819 21.8684 2.91948 22C2.91948 26 3.38313 29 8.42283 29H28.2349"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5302 14H29.3356M16.1276 9H29.3356H16.1276Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              注文状況
            </p>
          </Link>
        </li>

        <li key="sales">
          <Link href="/sales">
            <p>
              <svg
                width="36"
                height="32"
                viewBox="0 0 36 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91943 2V29C2.91943 29.2652 3.0354 29.5196 3.24181 29.7071C3.44823 29.8946 3.72819 30 4.0201 30H33.7382"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4497 14H8.69798C7.93813 14 7.32214 14.5596 7.32214 15.25V24.75C7.32214 25.4404 7.93813 26 8.69798 26H11.4497C12.2095 26 12.8255 25.4404 12.8255 24.75V15.25C12.8255 14.5596 12.2095 14 11.4497 14Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.3557 11H18.604C17.8441 11 17.2281 11.5596 17.2281 12.25V24.75C17.2281 25.4404 17.8441 26 18.604 26H21.3557C22.1155 26 22.7315 25.4404 22.7315 24.75V12.25C22.7315 11.5596 22.1155 11 21.3557 11Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.237 7H28.4853C27.7255 7 27.1095 7.55964 27.1095 8.25V24.75C27.1095 25.4404 27.7255 26 28.4853 26H31.237C31.9969 26 32.6129 25.4404 32.6129 24.75V8.25C32.6129 7.55964 31.9969 7 31.237 7Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              売上解析
            </p>
          </Link>
        </li>

        <li key="shift">
          <Link href="/shift">
            <p>
              <svg
                width="36"
                height="32"
                viewBox="0 0 36 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_12_175)">
                  <path
                    d="M17.3288 8C17.3288 7.44772 17.7765 7 18.3288 7C18.8811 7 19.3288 7.44772 19.3288 8H17.3288ZM18.3288 16.2759L17.8376 17.1469L17.3288 16.86V16.2759H18.3288ZM25.4241 19.129C25.9051 19.4002 26.0752 20.0101 25.8039 20.4912C25.5326 20.9723 24.9227 21.1423 24.4417 20.871L25.4241 19.129ZM19.3288 8V16.2759H17.3288V8H19.3288ZM18.82 15.4048L25.4241 19.129L24.4417 20.871L17.8376 17.1469L18.82 15.4048Z"
                    fill="white"
                  />
                  <path
                    d="M5.47154 2.75C5.47154 2.33579 5.80733 2 6.22154 2C6.63575 2 6.97154 2.33579 6.97154 2.75H5.47154ZM6.22154 7.25V8H5.47154V7.25H6.22154ZM11.1746 6.5C11.5888 6.5 11.9246 6.83579 11.9246 7.25C11.9246 7.66421 11.5888 8 11.1746 8V6.5ZM6.97154 2.75L6.97154 7.25L5.47154 7.25L5.47154 2.75H6.97154ZM6.22154 6.5L11.1746 6.5V8L6.22154 8L6.22154 6.5Z"
                    fill="white"
                  />
                  <path
                    d="M2.94519 16.7778C3.1511 20.1665 4.70595 23.3717 7.32005 25.7961C13.2885 31.3403 23.1789 31.3722 29.2256 25.8992C35.2638 20.4339 35.2507 11.5744 29.2256 6.10034C23.2929 0.710308 13.7237 0.631934 7.68892 5.86832"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
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
              シフト
            </p>
          </Link>
        </li>

        <li key="user">
          <Link href="/user">
            <p>
              <svg
                width="36"
                height="32"
                viewBox="0 0 36 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5839 9C26.3143 12.3044 23.5571 15 20.5302 15C17.5034 15 14.7414 12.305 14.4766 9C14.2014 5.5625 16.8843 3 20.5302 3C24.1762 3 26.8591 5.625 26.5839 9Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5302 19C14.5453 19 8.47099 22 7.34693 27.6625C7.20935 28.345 7.63655 29 8.42353 29H32.6376C33.4246 29 33.8497 28.345 33.7142 27.6625C32.5894 22 26.5151 19 20.5302 19Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M10.6241 14.5H2.91943M6.77178 11V18V11Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              ユーザー管理
            </p>
          </Link>
        </li>

        <li key="audit">
          <Link href="/audit">
            <p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 13C22.6274 13 28 10.7614 28 8C28 5.23858 22.6274 3 16 3C9.37258 3 4 5.23858 4 8C4 10.7614 9.37258 13 16 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M28 13.375C28 16.1363 22.625 18.375 16 18.375C9.375 18.375 4 16.1363 4 13.375M28 18.75C28 21.5113 22.625 23.75 16 23.75C9.375 23.75 4 21.5113 4 18.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M4 7.95251V24.0475C4 26.7825 9.375 29 16 29C22.625 29 28 26.7825 28 24.0475V7.95251"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
              監査ログ
            </p>
          </Link>
        </li>

        <li key="settings">
          <Link href="/settings">
            <p>
              <svg
                width="31"
                height="29"
                viewBox="0 0 31 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7625 10.3944C14.8592 10.3133 13.9504 10.4879 13.1605 10.8943C12.3706 11.3006 11.7383 11.9188 11.3501 12.6643C10.9619 13.4098 10.8368 14.246 10.9919 15.0586C11.147 15.8712 11.5748 16.6203 12.2167 17.2034C12.8585 17.7866 13.6831 18.1752 14.5774 18.3162C15.4718 18.4571 16.3922 18.3434 17.2128 17.9907C18.0333 17.638 18.7137 17.0635 19.161 16.3459C19.6082 15.6283 19.8004 14.8026 19.7112 13.9819C19.6095 13.0619 19.1608 12.2021 18.4412 11.5483C17.7215 10.8944 16.7752 10.4868 15.7625 10.3944V10.3944ZM26.3634 14.375C26.3606 14.8098 26.3254 15.2439 26.2581 15.6744L29.3682 17.8906C29.5036 17.9926 29.5949 18.1349 29.6258 18.2923C29.6566 18.4496 29.6251 18.6118 29.5368 18.75L26.5945 23.375C26.5052 23.5119 26.3655 23.6157 26.2001 23.6682C26.0348 23.7207 25.8543 23.7184 25.6906 23.6619L22.6018 22.5319C22.4315 22.4703 22.247 22.448 22.0649 22.4671C21.8828 22.4862 21.7087 22.546 21.5583 22.6413C21.0869 22.9362 20.5915 23.1982 20.0765 23.425C19.9146 23.4965 19.7745 23.6031 19.6687 23.7355C19.5629 23.8678 19.4946 24.0217 19.4697 24.1838L19.0068 27.1769C18.9764 27.3349 18.8865 27.4785 18.7525 27.5831C18.6185 27.6876 18.4487 27.7466 18.2721 27.75H12.3876C12.2139 27.7473 12.0465 27.6909 11.9128 27.5901C11.7791 27.4893 11.6872 27.3502 11.6522 27.1956L11.1899 24.2069C11.164 24.0431 11.0939 23.8877 10.9859 23.7544C10.8779 23.6212 10.7353 23.5142 10.5708 23.4431C10.0564 23.2175 9.56273 22.9548 9.09454 22.6575C8.94464 22.5627 8.77115 22.5034 8.58969 22.4847C8.40823 22.466 8.22452 22.4887 8.0551 22.5506L4.96703 23.68C4.80338 23.7366 4.62298 23.739 4.45763 23.6866C4.29227 23.6342 4.15256 23.5305 4.0631 23.3937L1.12087 18.7687C1.03241 18.6306 1.0008 18.4684 1.03166 18.311C1.06253 18.1536 1.15386 18.0113 1.28941 17.9094L3.91795 16.0344C4.06196 15.9305 4.17513 15.7956 4.24721 15.642C4.31929 15.4883 4.34799 15.3207 4.3307 15.1544C4.30594 14.8938 4.2908 14.6338 4.2908 14.3731C4.2908 14.1125 4.30525 13.8562 4.3307 13.6012C4.3461 13.436 4.316 13.2698 4.2431 13.1177C4.17021 12.9656 4.05681 12.8324 3.91313 12.73L1.28597 10.855C1.15262 10.7526 1.06321 10.6107 1.0334 10.4544C1.00359 10.2981 1.03529 10.1372 1.12293 10L4.06516 5.375C4.15451 5.23812 4.29418 5.13429 4.45955 5.0818C4.62491 5.02932 4.80536 5.03156 4.96909 5.08813L8.05785 6.21812C8.22818 6.27974 8.41268 6.302 8.59481 6.28291C8.77693 6.26383 8.95101 6.20398 9.10142 6.10875C9.57282 5.81383 10.0682 5.55182 10.5832 5.325C10.7451 5.2535 10.8852 5.14688 10.991 5.01455C11.0968 4.88222 11.1651 4.72826 11.1899 4.56625L11.6529 1.57312C11.6833 1.41505 11.7732 1.27148 11.9072 1.16694C12.0412 1.06241 12.211 1.0034 12.3876 1H18.2721C18.4457 1.00273 18.6132 1.05913 18.7469 1.1599C18.8806 1.26067 18.9725 1.3998 19.0075 1.55437L19.4697 4.54313C19.4957 4.70692 19.5658 4.86234 19.6738 4.99559C19.7818 5.12883 19.9244 5.23576 20.0889 5.30688C20.6033 5.53247 21.097 5.79519 21.5651 6.0925C21.715 6.18726 21.8885 6.24664 22.07 6.2653C22.2515 6.28396 22.4352 6.2613 22.6046 6.19938L25.6927 5.07C25.8563 5.01338 26.0367 5.01105 26.2021 5.06341C26.3674 5.11578 26.5071 5.21948 26.5966 5.35625L29.5388 9.98125C29.6273 10.1194 29.6589 10.2816 29.628 10.439C29.5972 10.5964 29.5058 10.7387 29.3703 10.8406L26.7417 12.7156C26.5971 12.8191 26.4833 12.9539 26.4106 13.1076C26.3379 13.2613 26.3087 13.429 26.3255 13.5956C26.3483 13.8544 26.3634 14.1144 26.3634 14.375Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              設定
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
