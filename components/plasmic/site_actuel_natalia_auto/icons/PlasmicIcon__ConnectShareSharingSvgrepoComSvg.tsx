/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ConnectShareSharingSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ConnectShareSharingSvgrepoComSvgIcon(
  props: ConnectShareSharingSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26 22a4 4 0 0 0-2.67 1L10 16.36v-.72L23.33 9A4 4 0 1 0 22 6a3.8 3.8 0 0 0 .23 1.27L9.29 13.74a4 4 0 1 0 0 4.52l12.94 6.47A3.8 3.8 0 0 0 22 26a4 4 0 1 0 4-4m0-18a2 2 0 1 1-2 2 2 2 0 0 1 2-2M6 18a2 2 0 1 1 2-2 2 2 0 0 1-2 2m20 10a2 2 0 1 1 2-2 2 2 0 0 1-2 2"
        }
        data-name={"Layer 2"}
      ></path>
    </svg>
  );
}

export default ConnectShareSharingSvgrepoComSvgIcon;
/* prettier-ignore-end */
