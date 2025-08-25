/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoneyCheckDollarPenSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MoneyCheckDollarPenSvgrepoComSvgIcon(
  props: MoneyCheckDollarPenSvgrepoComSvgIconProps
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
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M10 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 6.52 21 7.08 21 8.2v.3m-12 1v-1m0 1h2m-2 0c-1.117 0-1.998.126-2 1.332-.002.9 0 1.168 2 1.168s2 .206 2 1.167c0 .722 0 1.333-2 1.333m0 1v-1m0 0H7m7-4.5h3m-3 10 2.025-.405c.177-.035.265-.053.347-.085a1 1 0 0 0 .207-.111c.073-.05.136-.114.264-.242L21 15a1.414 1.414 0 1 0-2-2l-4.157 4.157a2 2 0 0 0-.242.264 1 1 0 0 0-.11.207c-.033.082-.05.17-.086.347z"
        }
      ></path>
    </svg>
  );
}

export default MoneyCheckDollarPenSvgrepoComSvgIcon;
/* prettier-ignore-end */
