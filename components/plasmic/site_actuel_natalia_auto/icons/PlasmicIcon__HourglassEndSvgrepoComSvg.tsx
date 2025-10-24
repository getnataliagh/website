/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HourglassEndSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HourglassEndSvgrepoComSvgIcon(
  props: HourglassEndSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M15 18H9M20 3h-1m0 0H5m14 0a7.77 7.77 0 0 1-3.255 6.325L12 12M5 3H4m1 0a7.77 7.77 0 0 0 3.255 6.325L12 12m8 9h-1m0 0H5m14 0a7.77 7.77 0 0 0-3.255-6.325L12 12m-7 9H4m1 0a7.77 7.77 0 0 1 3.255-6.325L12 12"
        }
      ></path>
    </svg>
  );
}

export default HourglassEndSvgrepoComSvgIcon;
/* prettier-ignore-end */
