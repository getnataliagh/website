/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IndustryWindowsSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function IndustryWindowsSvgrepoComSvgIcon(
  props: IndustryWindowsSvgrepoComSvgIconProps
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
        strokeWidth={"2"}
        d={
          "M7 16h1m3.5 0h1m3.5 0h1m1.4 4H5.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C4 19.24 4 18.96 4 18.4V4.8c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218C4.38 4 4.52 4 4.8 4h2.4c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219C8 4.38 8 4.52 8 4.8v4.269c0 .605 0 .908.12 1.049a.5.5 0 0 0 .42.173c.183-.014.397-.228.826-.657l3.268-3.268c.429-.429.643-.643.827-.657a.5.5 0 0 1 .42.173c.119.14.119.444.119 1.05v2.137c0 .605 0 .908.12 1.049a.5.5 0 0 0 .42.173c.183-.014.397-.228.826-.657l3.268-3.268c.429-.429.643-.643.827-.657a.5.5 0 0 1 .42.173c.119.14.119.444.119 1.05V18.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C19.24 20 18.96 20 18.4 20Z"
        }
      ></path>
    </svg>
  );
}

export default IndustryWindowsSvgrepoComSvgIcon;
/* prettier-ignore-end */
