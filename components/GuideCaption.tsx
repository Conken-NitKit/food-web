interface Props {
  ideogram: string;
  description: string;
}

export const GuideCaption = ({ ideogram, description }: Props): JSX.Element => {
  return (
    <li className="flex mb-[9px] md:mb-[10px] lg:mb-[14px] xl:mb-[17px] 2xl:mb-[21px] w-[123px] md:w-[148px] lg:w-[197px] xl:w-[246px] 2xl:w-[296px] h-[26px] md:h-[31px] lg:h-[41px] xl:h-[51px] 2xl:h-[61px] even:ml-auto">
      <div className="flex items-center justify-center rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square h-full bg-secondary-regular text-[24px]">
        {ideogram}
      </div>
      <p className="ml-[6.5%] h-[40%] lg:h-[80%] text-[6px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] line-clamp-1 lg:line-clamp-2 font-roboto">
        {description}
      </p>
    </li>
  );
};
