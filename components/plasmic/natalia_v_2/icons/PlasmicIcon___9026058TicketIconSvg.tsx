/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9026058TicketIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _9026058TicketIconSvgIcon(
  props: _9026058TicketIconSvgIconProps
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
        strokeWidth={"16"}
        d={
          "M96 56v144m-72-32.8a7.9 7.9 0 016.4-7.8 32.1 32.1 0 000-62.8 7.9 7.9 0 01-6.4-7.8V64a8 8 0 018-8h192a8 8 0 018 8v24.8a7.9 7.9 0 01-6.4 7.8 32.1 32.1 0 000 62.8 7.9 7.9 0 016.4 7.8V192a8 8 0 01-8 8H32a8 8 0 01-8-8z"
        }
      ></path>
    </svg>
  );
}

export default _9026058TicketIconSvgIcon;
/* prettier-ignore-end */
