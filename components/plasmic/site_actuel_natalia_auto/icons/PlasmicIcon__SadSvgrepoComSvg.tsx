/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SadSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SadSvgrepoComSvgIcon(props: SadSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"12"}
        cy={"12"}
        r={"9.5"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
      ></circle>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        d={
          "M8.209 16.622c.421-.365.999-.646 1.652-.834A7.8 7.8 0 0 1 12 15.5c.744 0 1.48.098 2.139.288.654.188 1.23.469 1.652.834"
        }
      ></path>

      <circle
        cx={"9"}
        cy={"10"}
        r={"1"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
      ></circle>

      <circle
        cx={"15"}
        cy={"10"}
        r={"1"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
      ></circle>
    </svg>
  );
}

export default SadSvgrepoComSvgIcon;
/* prettier-ignore-end */
