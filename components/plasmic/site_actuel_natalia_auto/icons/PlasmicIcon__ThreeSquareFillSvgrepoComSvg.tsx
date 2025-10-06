/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThreeSquareFillSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ThreeSquareFillSvgrepoComSvgIcon(
  props: ThreeSquareFillSvgrepoComSvgIconProps
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
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M2 2h20v20H2zm10.22 9.148h-1.053v1.545h1.046q1.64 0 1.64 1.49 0 .615-.403.992-.396.369-1.1.369-.615 0-1.04-.356a1.15 1.15 0 0 1-.416-.915H8.918q0 1.29.943 2.078.95.786 2.44.786 1.594 0 2.557-.8.97-.8.971-2.126 0-.82-.417-1.422-.41-.602-1.25-.902a2.7 2.7 0 0 0 1.093-.882q.417-.574.417-1.258 0-1.326-.896-2.078-.895-.759-2.474-.759-.909 0-1.668.349a2.8 2.8 0 0 0-1.176.97q-.417.615-.417 1.395h1.976q0-.5.382-.807.383-.315.95-.314.63 0 .985.335.363.335.362.936 0 .622-.362.999-.363.375-1.114.375"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ThreeSquareFillSvgrepoComSvgIcon;
/* prettier-ignore-end */
