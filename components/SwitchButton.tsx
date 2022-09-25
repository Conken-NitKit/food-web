import classNames from "classnames";
import React from "react";
import { useToggle } from "../lib/hooks/useToggle";

export type UIProps = {
  className?: string;
  onLabel?: string;
  offLabel?: string;
  checked: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

export const SwitchButtonUI = ({
  className,
  onLabel,
  offLabel,
  checked,
  disabled = false,
  onClick,
}: UIProps): JSX.Element => {
  return (
    <button
      className={classNames(
        className,
        "p-0.5 rounded-full transition duration-300",
        {
          "bg-accent-primary-regular": checked,
          "bg-thirdly-regular": !checked,
          "pointer-events-none opacity-25": disabled,
          "cursor-pointer": !disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div
        className={classNames("relative h-8", {
          "w-20": onLabel || offLabel,
          "w-12": !onLabel && !offLabel,
        })}
      >
        <div
          className={classNames(
            "absolute mx-0.5 pr-7 left-0 h-8 leading-8 text-primary-inverted text-xs whitespace-nowrap transition-all duration-300 overflow-hidden",
            {
              "w-[calc(100%-6px)]": checked,
              "pr-0 w-0": !checked,
            }
          )}
        >
          {onLabel}
        </div>
        <div
          className={classNames(
            "absolute mx-0.5 pl-7 right-0 h-8 leading-8 text-primary-inverted text-xs whitespace-nowrap transition-all duration-300 overflow-hidden",
            {
              "pl-0 w-0": checked,
              "w-[calc(100%-6px)]": !checked,
            }
          )}
        >
          {offLabel}
        </div>
        <div
          className={classNames(
            "absolute w-8 h-8 rounded-full bg-primary-regular transition-all duration-300",
            {
              "left-[calc(100%-32px)]": checked,
              "left-0": !checked,
            }
          )}
        />
      </div>
    </button>
  );
};

export type Props = {
  onChange?: (result: boolean) => void;
} & Omit<UIProps, "checked">;

export const SwitchButton = ({
  onClick,
  onChange,
  ...props
}: Props): JSX.Element => {
  const [isChecked, toggle] = useToggle();

  const handleClick = (e: React.MouseEvent) => {
    const newVallue = toggle();
    onChange?.(newVallue);
    onClick?.(e);
  };

  return (
    <SwitchButtonUI checked={isChecked} onClick={handleClick} {...props} />
  );
};
