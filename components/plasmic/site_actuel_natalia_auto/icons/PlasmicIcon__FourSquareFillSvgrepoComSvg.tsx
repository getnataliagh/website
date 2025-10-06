/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FourSquareFillSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FourSquareFillSvgrepoComSvgIcon(
  props: FourSquareFillSvgrepoComSvgIconProps
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
          "M2 2h20v20H2zm14.13 11.254h-1.128V7.047h-1.996l-4.15 6.555.09 1.245h4.08V17h1.976v-2.153h1.128zm-3.104 0h-2.2l2.07-3.288.13-.226z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default FourSquareFillSvgrepoComSvgIcon;
/* prettier-ignore-end */
