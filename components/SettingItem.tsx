import Link from "next/link";
import React from "react";
import { ChevronForwardIcon } from "./icons/ChevronForwardIcon";
import { SwitchButton, Props as SwitchButtonProps } from "./SwitchButton";

export type InfoProps = {
  label: string;
  description?: string;
};

const Info = ({ label, description }: InfoProps): JSX.Element => {
  return (
    <div>
      <p className="flex items-center text-base font-bold space-x-3 text-primary-regular">
        <span>{label}</span>
      </p>
      {description && (
        <p className="text-xs text-secondary-regular">{description}</p>
      )}
    </div>
  );
};

export type SettingLinkItemProps = {
  className?: string;
  to: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} & InfoProps;

export const SettingLinkItem = ({
  className,
  to,
  onClick,
  ...infoProps
}: SettingLinkItemProps): JSX.Element => {
  return (
    <div className={className}>
      <Link href={to}>
        <a className="flex items-center justify-between" onClick={onClick}>
          <Info {...infoProps} />
          <div className="ml-2 w-20 px-7">
            <ChevronForwardIcon />
          </div>
        </a>
      </Link>
    </div>
  );
};

export type SettingSwitchItemProps = {
  className?: string;
} & InfoProps &
  SwitchButtonProps;

export const SettingSwitchItem = ({
  className,
  description,
  label,
  ...switchProps
}: SettingSwitchItemProps): JSX.Element => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <Info description={description} label={label} />
        <div className="ml-2 w-20">
          <SwitchButton {...switchProps} />
        </div>
      </div>
    </div>
  );
};
