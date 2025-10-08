/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FastLaunchSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FastLaunchSvgrepoComSvgIcon(
  props: FastLaunchSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"3"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"m28.79 44-9.4-9.4S31.76 5.41 56.77 7c0 0 3.48 23.12-27.98 37Z"}
      ></path>

      <path
        d={"M56 16.82a10.87 10.87 0 0 1-6-3.08 11 11 0 0 1-3.11-6.15"}
      ></path>

      <circle cx={"42.32"} cy={"21.44"} r={"5.48"}></circle>

      <path
        d={
          "M30.61 43.16 30 47.84a.24.24 0 0 0 .33.25l8-3.47a2.32 2.32 0 0 0 1.3-1.62l1.22-5.83M20 33.29l-4.69.6a.23.23 0 0 1-.24-.32l3.46-7.95a2.33 2.33 0 0 1 1.67-1.35l5.82-1.22m-4.53 13.63c-6.55 2.1-6.88 12.47-6.88 12.47s10.08.11 12.59-6.76"
        }
      ></path>

      <path
        strokeLinecap={"round"}
        d={"m10.88 52.82-3.76 3.77m3.48-10.96-3.19 3.18m10.53 4.3-3.18 3.19"}
      ></path>
    </svg>
  );
}

export default FastLaunchSvgrepoComSvgIcon;
/* prettier-ignore-end */
