/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownLeftIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDownLeftIconSvgIcon(props: ArrowDownLeftIconSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.21 15.27a1 1 0 0 0-1 1v6.5L7.56 6.12a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l16.63 16.63h-6.46a1 1 0 1 0 0 2h9a.9.9 0 0 0 .9-.9v-9a1 1 0 0 0-1-.99"
        }
        data-name={"Layer 2"}
      ></path>
    </svg>
  );
}

export default ArrowDownLeftIconSvgIcon;
/* prettier-ignore-end */
