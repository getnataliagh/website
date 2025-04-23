/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Number1SquareSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function Number1SquareSvgrepoComSvgIcon(
  props: Number1SquareSvgrepoComSvgIconProps
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

      <g
        clipPath={"url(#LYU2rZxn1bV6a)"}
        stroke={"#292929"}
        strokeWidth={"2.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path d={"M4 4.001h16v14a2 2 0 01-2 2H6a2 2 0 01-2-2v-14z"}></path>

        <path d={"M12.5 17V7l-2 2"}></path>
      </g>

      <defs>
        <clipPath id={"LYU2rZxn1bV6a"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Number1SquareSvgrepoComSvgIcon;
/* prettier-ignore-end */
