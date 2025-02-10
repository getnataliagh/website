// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9025852PhoneCallIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _9025852PhoneCallIconSvgIcon(
  props: _9025852PhoneCallIconSvgIconProps
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
          "M159.4 40A80.1 80.1 0 01216 96.6m-64.9-25.7a47.9 47.9 0 0134 34m-92.6 19.9a83.6 83.6 0 0039 38.9 8 8 0 007.9-.6l25-16.7a7.9 7.9 0 017.6-.7l46.8 20.1a7.9 7.9 0 014.8 8.3A48 48 0 01176 216 136 136 0 0140 80a48 48 0 0141.9-47.6 7.9 7.9 0 018.3 4.8l20.1 46.9a8 8 0 01-.6 7.5L93 117a8 8 0 00-.5 7.8z"
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

export default _9025852PhoneCallIconSvgIcon;
/* prettier-ignore-end */
