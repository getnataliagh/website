/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThreeSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThreeSvgrepoComSvgIcon(props: ThreeSvgrepoComSvgIconProps) {
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
          "M4.875 8h-2.25c.063-3.281 2.781-6 6.094-6s6.031 2.719 6.031 6.094c0 1.969-.969 3.719-2.438 4.813 2.094 1.25 3.5 3.531 3.5 6.125a7.09 7.09 0 0 1-7.094 7.094c-3.844 0-6.969-3-7.125-6.781h2.25c.156 2.531 2.281 4.594 4.875 4.594 2.688 0 4.844-2.219 4.844-4.906s-2.156-4.875-4.844-4.875v-2.219c2.125 0 3.813-1.719 3.813-3.844s-1.688-3.844-3.813-3.844-3.813 1.656-3.844 3.75z"
        }
      ></path>
    </svg>
  );
}

export default ThreeSvgrepoComSvgIcon;
/* prettier-ignore-end */
