import clsx from "clsx";
import React, { PropsWithChildren } from "react";

const specialButtonStyles =
  "flex flex-row gap-2 md:gap-4 items-center" as const;

type ButtonProps = {
  icon?: boolean;
  iconPlacement?: "left" | "right";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  hasPaddingX?: boolean;
  disabled?: boolean;
  size?: "default" | "small" | "large";
};
export default function Button({
  children,
  icon = false,
  iconPlacement = "right",
  hasPaddingX = false,
  onClick,
  disabled = undefined,
  size = 'default',
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={clsx(
        specialButtonStyles,
        "font-normal",
        hasPaddingX && "md:px-6",
        disabled && "opacity-25",
        size === 'large' ? 'text-2xl !h-[64px]' : size === 'small' ? "!h-[40px] text-md" : "!h-[52px] text-lg",
      )}
      onClick={(e) => onClick && onClick(e)}
      disabled={disabled}
    >
      {icon && iconPlacement === "left" && <LeftArrow />}
      <span className="text-[#0038FF] dark:text-[#4EDDBE] font-bold uppercase whitespace-nowrap select-none">
        {children}
      </span>
      {icon && iconPlacement === "right" && <RightArrow />}
    </button>
  );
}

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <mask
        id="mask0_587_10107"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="33"
        height="32"
      >
        <rect x="0.5" width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_587_10107)">
        <path
          d="M8.76719 23.7998L7.36719 22.3998L21.1005 8.6665H8.50052V6.6665H24.5005V22.6665H22.5005V10.0665L8.76719 23.7998Z"
          fill="#1795FF"
        />
      </g>
    </svg>
  );
};

const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <mask
        id="mask0_587_10101"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="33"
        height="32"
      >
        <rect
          width="32"
          height="32"
          transform="matrix(-1 0 0 1 32.5 0)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_587_10101)">
        <path
          d="M24.2328 23.7998L25.6328 22.3998L11.8995 8.6665H24.4995V6.6665H8.49948V22.6665H10.4995V10.0665L24.2328 23.7998Z"
          fill="#1795FF"
        />
      </g>
    </svg>
  );
};
