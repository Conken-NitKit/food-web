interface Props {
  title: string;
}

export const FeaturePageLayout = ({ title }: Props) => {
  return (
    <div className="p-5p pb-0 w-full h-full">
      <p className="text-2 font-bold">{title}</p>
    </div>
  );
};
