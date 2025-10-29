/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Settings04SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Settings04SvgrepoComSvgIcon(
  props: Settings04SvgrepoComSvgIconProps
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
          "M3 8h12m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-6 8h12M9 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        }
      ></path>
    </svg>
  );
}

export default Settings04SvgrepoComSvgIcon;
/* prettier-ignore-end */
