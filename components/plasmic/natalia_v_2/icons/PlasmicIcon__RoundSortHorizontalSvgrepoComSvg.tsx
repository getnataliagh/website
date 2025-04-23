/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RoundSortHorizontalSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function RoundSortHorizontalSvgrepoComSvgIcon(
  props: RoundSortHorizontalSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-8.245-.555a.75.75 0 00-1.01 1.11l1.315 1.195H8a.75.75 0 000 1.5h6.06l-1.315 1.195a.75.75 0 001.01 1.11l2.75-2.5a.75.75 0 000-1.11l-2.75-2.5zm-2.45-4.95a.75.75 0 01-.05 1.06L9.94 8.75H16a.75.75 0 010 1.5H9.94l1.315 1.195a.75.75 0 01-1.01 1.11l-2.75-2.5a.75.75 0 010-1.11l2.75-2.5a.75.75 0 011.06.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RoundSortHorizontalSvgrepoComSvgIcon;
/* prettier-ignore-end */
