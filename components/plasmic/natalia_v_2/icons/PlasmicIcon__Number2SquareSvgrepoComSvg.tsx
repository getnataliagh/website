// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Number2SquareSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function Number2SquareSvgrepoComSvgIcon(
  props: Number2SquareSvgrepoComSvgIconProps
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
        clipPath={"url(#IZCRRBsvcxuoa)"}
        stroke={"#292929"}
        strokeWidth={"2.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path d={"M4 4.001h16v14a2 2 0 01-2 2H6a2 2 0 01-2-2v-14z"}></path>

        <path
          d={
            "M9.5 9.5a2.5 2.5 0 114.268 1.768l-3.829 3.828a1.5 1.5 0 00-.439 1.06V17h5"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"IZCRRBsvcxuoa"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Number2SquareSvgrepoComSvgIcon;
/* prettier-ignore-end */
