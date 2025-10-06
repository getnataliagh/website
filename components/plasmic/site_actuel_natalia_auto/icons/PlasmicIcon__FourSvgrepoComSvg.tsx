/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FourSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FourSvgrepoComSvgIcon(props: FourSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"-7 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.719 1.375v15.438H16.5v2.25h-2.781v6.531H11.5v-6.531H1.281zM5.594 16.813H11.5V8.469z"
        }
      ></path>
    </svg>
  );
}

export default FourSvgrepoComSvgIcon;
/* prettier-ignore-end */
