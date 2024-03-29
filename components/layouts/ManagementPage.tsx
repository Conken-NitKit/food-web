import { ReactNode } from "react";

import { PageId } from "../../types";
import { FeatureLayout } from "./Feature";

interface Props {
  type: PageId;
  tips: string;
  children: ReactNode;
}

export const ManagementPageLayout = ({
  type,
  tips,
  children,
}: Props): JSX.Element => {
  return (
    <FeatureLayout type={type}>
      {/* HACK: FeatureLayoutのページタイトルの下のmarginが必要以上に大きかったので、マイナスのmarginを指定しています。 */}
      {/* TODO: FeatureLayout側を別PRで修正します */}
      <p className="mt-[-10px] md:mt-[-12px] lg:mt-[-16px] xl:mt-[-20px] 2xl:mt-[-24px] text-primary-regular text-[10px] xl:text-xs 2xl:text-base">
        {tips}
      </p>
      {children}
    </FeatureLayout>
  );
};
