// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9042728LongArrowRightUpIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _9042728LongArrowRightUpIconSvgIcon(
  props: _9042728LongArrowRightUpIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      strokeWidth={"1.5"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M19 10.5L15.5 7 12 10.5"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15.5 7v6a4 4 0 01-4 4h-7"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default _9042728LongArrowRightUpIconSvgIcon;
/* prettier-ignore-end */
