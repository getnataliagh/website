// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9023759NumberCircleThreeFillIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _9023759NumberCircleThreeFillIconSvgIcon(
  props: _9023759NumberCircleThreeFillIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h256v256H0z"}></path>

      <path
        d={
          "M128 24a104 104 0 10104 104A104.2 104.2 0 00128 24zm21.5 153.5a36.2 36.2 0 01-51 0 8.1 8.1 0 0111.4-11.4A19.9 19.9 0 10124 132a8.1 8.1 0 01-7.1-4.3 8 8 0 01.5-8.3L136.6 92H104a8 8 0 010-16h48a8.1 8.1 0 017.1 4.3 8 8 0 01-.5 8.3l-21.1 30a37.9 37.9 0 0112 7.9 36.2 36.2 0 010 51z"
        }
      ></path>
    </svg>
  );
}

export default _9023759NumberCircleThreeFillIconSvgIcon;
/* prettier-ignore-end */
