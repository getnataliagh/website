/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9025948PhoneOutgoingIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _9025948PhoneOutgoingIconSvgIcon(
  props: _9025948PhoneOutgoingIconSvgIconProps
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
        d={
          "M92.5 124.8a83.6 83.6 0 0039 38.9 8 8 0 007.9-.6l25-16.7a7.9 7.9 0 017.6-.7l46.8 20.1a7.9 7.9 0 014.8 8.3A48 48 0 01176 216 136 136 0 0140 80a48 48 0 0141.9-47.6 7.9 7.9 0 018.3 4.8l20.1 46.9a8 8 0 01-.6 7.5L93 117a8 8 0 00-.5 7.8zM168 48h40v40m-48 8l48-48"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"16"}
      ></path>
    </svg>
  );
}

export default _9025948PhoneOutgoingIconSvgIcon;
/* prettier-ignore-end */
