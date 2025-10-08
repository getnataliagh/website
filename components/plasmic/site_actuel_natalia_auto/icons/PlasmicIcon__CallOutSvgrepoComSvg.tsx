/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CallOutSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CallOutSvgrepoComSvgIcon(props: CallOutSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames("plasmic-default__svg", className, "icon glyph")}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M21 15v3.93a2 2 0 0 1-2.29 2A18 18 0 0 1 3.14 5.29 2 2 0 0 1 5.13 3H9a1 1 0 0 1 1 .89 10.7 10.7 0 0 0 1 3.78 1 1 0 0 1-.42 1.26l-.86.49a1 1 0 0 0-.33 1.46 14.1 14.1 0 0 0 3.69 3.69 1 1 0 0 0 1.46-.33l.49-.86a1 1 0 0 1 1.3-.38 10.7 10.7 0 0 0 3.78 1 1 1 0 0 1 .89 1m-5-6a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l5-5a1 1 0 1 1 1.42 1.42l-5 5A1 1 0 0 1 16 9"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M21 9a1 1 0 0 1-1-1V4h-4a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"
        }
      ></path>
    </svg>
  );
}

export default CallOutSvgrepoComSvgIcon;
/* prettier-ignore-end */
