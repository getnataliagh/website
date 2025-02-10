// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _11121327FiRrCirclePhoneIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _11121327FiRrCirclePhoneIconSvgIcon(
  props: _11121327FiRrCirclePhoneIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.747 11.971l-1.069.851c-2.071-.791-3.599-2.256-4.5-4.5l.851-1.069a1.143 1.143 0 000-1.616l-1-1.302a1.143 1.143 0 00-1.616 0l-.6.522a2.804 2.804 0 00-.813 2c0 4 5.429 9.143 9.143 9.143.723 0 1.449-.261 2-.813l.522-.6a1.143 1.143 0 000-1.616l-1.302-1a1.143 1.143 0 00-1.616 0z"
        }
      ></path>
    </svg>
  );
}

export default _11121327FiRrCirclePhoneIconSvgIcon;
/* prettier-ignore-end */
