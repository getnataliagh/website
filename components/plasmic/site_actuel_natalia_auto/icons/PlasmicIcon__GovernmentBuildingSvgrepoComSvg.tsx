/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GovernmentBuildingSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function GovernmentBuildingSvgrepoComSvgIcon(
  props: GovernmentBuildingSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
        d={
          "M4.35 8.15h15.3M12 3.37a4.78 4.78 0 0 1 4.78 4.78H7.22A4.78 4.78 0 0 1 12 3.37ZM12 .5v2.87m-1.91 8.61V22.5m3.82-10.52V22.5m3.83-14.35V22.5M6.26 8.15V22.5m11.48-11.48h4.78V22.5h-4.78zm-16.26 0h4.78V22.5H1.48zM.52 22.5h22.96M3.39 14.85h2.87m-2.87 3.82h2.87m11.48-3.82h2.87m-2.87 3.82h2.87"
        }
      ></path>
    </svg>
  );
}

export default GovernmentBuildingSvgrepoComSvgIcon;
/* prettier-ignore-end */
