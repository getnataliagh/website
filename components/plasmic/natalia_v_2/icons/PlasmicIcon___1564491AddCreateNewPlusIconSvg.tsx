// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _1564491AddCreateNewPlusIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _1564491AddCreateNewPlusIconSvgIcon(
  props: _1564491AddCreateNewPlusIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 24 24"}
      xmlSpace={"preserve"}
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
          "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm5 13h-3v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3H7c-1.1 0-2-.9-2-2s.9-2 2-2h3V7c0-1.1.9-2 2-2s2 .9 2 2v3h3c1.1 0 2 .9 2 2s-.9 2-2 2z"
        }
      ></path>
    </svg>
  );
}

export default _1564491AddCreateNewPlusIconSvgIcon;
/* prettier-ignore-end */
