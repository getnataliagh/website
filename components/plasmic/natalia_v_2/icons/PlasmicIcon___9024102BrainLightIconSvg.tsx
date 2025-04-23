/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9024102BrainLightIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _9024102BrainLightIconSvgIcon(
  props: _9024102BrainLightIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h256v256H0z"}></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
        d={"M128 176V80m-40 64a40 40 0 11-40 40v-6.7"}
      ></path>

      <path
        d={"M168 144a40 40 0 1040 40v-6.7"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
      ></path>

      <path
        d={
          "M72 180h-8a48 48 0 01-16-93.3V72a40 40 0 0180 0v112m56-4h8a48 48 0 0016-93.3V72a40 40 0 00-80 0"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
      ></path>

      <path
        d={"M88 84v8a28 28 0 01-28 28m108-36v8a28 28 0 0028 28"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
      ></path>
    </svg>
  );
}

export default _9024102BrainLightIconSvgIcon;
/* prettier-ignore-end */
