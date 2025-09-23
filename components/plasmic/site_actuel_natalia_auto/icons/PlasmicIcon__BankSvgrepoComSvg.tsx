/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BankSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BankSvgrepoComSvgIcon(props: BankSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3 22h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v-5h1a1 1 0 0 0 1-1V7a1 1 0 0 0-.594-.914l-9-4a1 1 0 0 0-.812 0l-9 4A1 1 0 0 0 2 7v3a1 1 0 0 0 1 1h1v5H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1M4 7.65l8-3.556 8 3.556V9H4ZM18 11v5h-2.667v-5Zm-4.667 0v5h-2.666v-5Zm-4.666 0v5H6v-5ZM4 18h16v2H4ZM14 7a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1"
        }
      ></path>
    </svg>
  );
}

export default BankSvgrepoComSvgIcon;
/* prettier-ignore-end */
