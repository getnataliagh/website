/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpeedSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpeedSvgrepoComSvgIcon(props: SpeedSvgrepoComSvgIconProps) {
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
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M4 14a8 8 0 1 1 16 0"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M10 15a2 2 0 1 1 4 0"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"m13 13 2-3m5 4v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1"}
      ></path>
    </svg>
  );
}

export default SpeedSvgrepoComSvgIcon;
/* prettier-ignore-end */
