/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneCallSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneCallSvgrepoComSvgIcon(
  props: PhoneCallSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"2"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.05 6A5 5 0 0 1 18 10m-3.95-8a9 9 0 0 1 8 7.94m0 7v3a2 2 0 0 1-2 2h-.19a19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.11-8.69A2 2 0 0 1 3.93 2h3.18a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }
      ></path>
    </svg>
  );
}

export default PhoneCallSvgrepoComSvgIcon;
/* prettier-ignore-end */
