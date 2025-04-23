/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9042754LongArrowLeftUpIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _9042754LongArrowLeftUpIconSvgIcon(
  props: _9042754LongArrowLeftUpIconSvgIconProps
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
        d={"M4.5 10.5L8 7l3.5 3.5"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 7v6a4 4 0 004 4h7"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default _9042754LongArrowLeftUpIconSvgIcon;
/* prettier-ignore-end */
