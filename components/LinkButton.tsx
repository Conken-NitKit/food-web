interface Props {
  pcLabel: string;
  spLabel: string;
  pagePath: string;
}

export const LinkButton = ({
  pcLabel,
  spLabel,
  pagePath,
}: Props): JSX.Element => {
  return (
    <a
      href={pagePath}
      className="flex items-center justify-center border border-thirdry-regular rounded-[6px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[11px] 2xl:rounded-[13px] w-[166px] md:w-[199px] lg:w-[265px] xl:w-[332px] 2xl:w-[398px] h-[18px] xl:h-[22px] 2xl:h-[27px] text-[11px] 2xl:text-[13px] text-primary-regular"
    >
      <p className="hidden lg:block font-menu-card">{pcLabel}</p>
      <p className="lg:hidden font-menu-card">{spLabel}</p>
    </a>
  );
};
