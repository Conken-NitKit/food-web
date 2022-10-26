import { PageId } from "../../types";
import { FeatureLayout } from "./Feature";

interface Props {
  type: PageId;
  tips: string;
}

export const ManagementPageLayout = ({ type, tips }: Props): JSX.Element => {
  return (
    <FeatureLayout type={type}>
      {/* note: FeatureLayoutのページタイトルの下のmarginが必要以上に大きかったので、マイナスのmarginを指定しています。 */}
      <p className="mt-[-10px] md:mt-[-12px] lg:mt-[-16px] xl:mt-[-20px] 2xl:mt-[-24px] text-primary-regular text-[10px] xl:text-xs 2xl:text-base">
        {tips}
      </p>
    </FeatureLayout>
  );
};
