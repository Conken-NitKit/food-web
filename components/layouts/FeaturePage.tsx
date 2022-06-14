interface Props {
  title: string;
}

export const FeaturePageLayout = ({ title }: Props) => {
  return (
    <div className="p-5p pb-0 w-full h-full">
      <p className="text-2.25 font-bold leading-1.172 text-letter">{title}</p>
    </div>
  );
};
