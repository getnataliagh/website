/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _3844474GearSettingSettingsWheelIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _3844474GearSettingSettingsWheelIconSvgIcon(
  props: _3844474GearSettingSettingsWheelIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"16"}
        cy={"16"}
        fill={"none"}
        r={"4"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
      ></circle>

      <path
        d={
          "M27.758 10.366l-1-1.732a2 2 0 00-2.732-.732l-.526.304c-2 1.154-4.5-.289-4.5-2.598V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v.608c0 2.309-2.5 3.753-4.5 2.598l-.526-.304a2 2 0 00-2.732.732l-1 1.732a2 2 0 00.732 2.732l.526.304c2 1.155 2 4.041 0 5.196l-.526.304a2 2 0 00-.732 2.732l1 1.732a2 2 0 002.732.732l.526-.304c2-1.155 4.5.289 4.5 2.598V27a2 2 0 002 2h2a2 2 0 002-2v-.608c0-2.309 2.5-3.753 4.5-2.598l.526.304a2 2 0 002.732-.732l1-1.732a2 2 0 00-.732-2.732l-.526-.304c-2-1.155-2-4.041 0-5.196l.526-.304a1.999 1.999 0 00.732-2.732z"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default _3844474GearSettingSettingsWheelIconSvgIcon;
/* prettier-ignore-end */
