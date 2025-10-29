/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GraphAscSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GraphAscSvgrepoComSvgIcon(
  props: GraphAscSvgrepoComSvgIconProps
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
        strokeWidth={"4"}
        d={"M12 19v-8m-5 8v-4m10 4V6"}
      ></path>
    </svg>
  );
}

export default GraphAscSvgrepoComSvgIcon;
/* prettier-ignore-end */
