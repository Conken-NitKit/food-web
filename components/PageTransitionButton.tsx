interface Props {
  regularText: string;
  secondaryText: string;
  pagePath: string;
}

export const PageTransitionButton = ({
  regularText,
  secondaryText,
  pagePath,
}: Props): JSX.Element => {
  return (
    <a
      href={pagePath}
      className="flex items-center justify-center border border-thirdry-regular rounded-[6px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[11px] 2xl:rounded-[13px] w-[73.7%] h-[12.1%] text-[11px] 2xl:text-[13px] text-primary-regular"
    >
      <p className="hidden md:block font-menu-card">{regularText}</p>
      <p className="md:hidden font-menu-card">{secondaryText}</p>
    </a>
  );
};
