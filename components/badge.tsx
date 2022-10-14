import classNames from "classnames";

interface Props {
  bgcolor: string;
  label: string;
}

export const Badge = ({ bgcolor, label }: Props): JSX.Element => {
  return (
    <div>
      <div className={classNames("rounded w-[58px] h-[18px]", bgcolor)}>
        <div className="flex justify-center items-center text-xs font-bold">
          {label}
        </div>
      </div>
    </div>
  );
};
