/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9023668NumberCircleOneFillIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _9023668NumberCircleOneFillIconSvgIcon(
  props: _9023668NumberCircleOneFillIconSvgIconProps
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
          "M128 24a104 104 0 10104 104A104.2 104.2 0 00128 24zm12 152a8 8 0 01-16 0V98.9l-11.6 7.8a8 8 0 01-8.8-13.4l24-16a8.3 8.3 0 018.2-.4A8 8 0 01140 84z"
        }
      ></path>
    </svg>
  );
}

export default _9023668NumberCircleOneFillIconSvgIcon;
/* prettier-ignore-end */
