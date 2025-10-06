/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OneSquareFillSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function OneSquareFillSvgrepoComSvgIcon(
  props: OneSquareFillSvgrepoComSvgIconProps
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
          "M2 2h20v20H2zm9.98 15h1.976V7.033h-.212L9.622 8.51v1.606l2.358-.731z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default OneSquareFillSvgrepoComSvgIcon;
/* prettier-ignore-end */
