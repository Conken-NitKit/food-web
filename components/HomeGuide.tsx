import { GuideContent } from "../types";

interface Props {
  guides: GuideContent[];
}

export const HomeGuide = ({ guides }: Props): JSX.Element => {
  return (
    <div className="mx-auto mt-[14px] md:mt-[17px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[35px] w-[260px] md:w-[312px] lg:w-[415px] xl:w-[519px] 2xl:w-[623px] h-[121px] md:h-[145px] lg:h-[193px] xl:h-[242px] 2xl:h-[290px] text-primary-regular font-bold">
      <div className="text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px]">
        使い方
      </div>
      <ul className="overflow-scroll flex flex-wrap mt-[4.93%] h-[85%]">
        {Object.values(guides).map((guide) => (
          <li
            key={guide.id}
            className="flex mb-[3.3%] w-[47.45%] h-[25%] even:ml-auto"
          >
            <div className="flex items-center justify-center rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square h-full bg-secondary-regular text-[24px]">
              {guide.ideogram}
            </div>
            <p className="ml-[6.5%] h-[80%] text-[6px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] line-clamp-2 font-roboto">
              {guide.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
