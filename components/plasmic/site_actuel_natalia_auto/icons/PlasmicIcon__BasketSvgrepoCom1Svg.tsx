/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BasketSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BasketSvgrepoCom1SvgIcon(props: BasketSvgrepoCom1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.739 8.875a1 1 0 0 0-.812-.422H9.704l-1.607-5.54C7.467.731 5.97.496 5.356.496H1.072a.993.993 0 1 0 0 1.986h4.283c.136 0 .549 0 .831.974l5.527 20.311c.12.428.511.724.956.724h13.499a.99.99 0 0 0 .934-.657L31.86 9.781a.99.99 0 0 0-.122-.907zM25.47 22.506H13.424L10.263 10.44h19.253zm-1.97 3.998a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m-9 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
        }
      ></path>
    </svg>
  );
}

export default BasketSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
