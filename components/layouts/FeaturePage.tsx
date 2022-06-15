import { BasicLayout } from "./Basic";

interface Props {
  type: string;
}

export const FeaturePageLayout = ({ type }: Props) => {
  return (
    <BasicLayout type="menu">
      <div className="p-5p pb-0 w-full h-full">
        <p className="mb-4p text-2.25 font-bold leading-1.172 text-letter">
          {type}
        </p>
      </div>
    </BasicLayout>
  );
};
