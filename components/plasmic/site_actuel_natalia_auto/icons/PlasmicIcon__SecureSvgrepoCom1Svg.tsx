/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SecureSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SecureSvgrepoCom1SvgIcon(props: SecureSvgrepoCom1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon line-color"
      )}
      data-name={"Line Color"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"#2ca9bc"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"m9 11 2 2 4-4"}
      ></path>

      <path
        fill={"none"}
        stroke={"#000"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "m12 21 .88-.38a11 11 0 0 0 6.63-9.26l.43-5.52a1 1 0 0 0-.76-1L12 3 4.82 4.8a1 1 0 0 0-.76 1l.43 5.52a11 11 0 0 0 6.63 9.26Z"
        }
      ></path>
    </svg>
  );
}

export default SecureSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
