interface Props {
  chosenItem: string;
}

export const AuditIcon = ({ chosenItem }: Props) => {
  return (
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
  );
};
