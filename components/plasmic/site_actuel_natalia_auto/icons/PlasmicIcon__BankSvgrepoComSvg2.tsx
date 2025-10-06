/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BankSvgrepoComSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BankSvgrepoComSvg2Icon(props: BankSvgrepoComSvg2IconProps) {
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
          "M3 21h18M4 18h16M6 18v-5m4 5v-5m4 5v-5m4 5v-5m-6-5.993L12.007 7M21 10l-6.874-6.11c-.752-.669-1.128-1.003-1.553-1.13a2 2 0 0 0-1.146 0c-.425.127-.8.461-1.553 1.13L3 10z"
        }
      ></path>
    </svg>
  );
}

export default BankSvgrepoComSvg2Icon;
/* prettier-ignore-end */
