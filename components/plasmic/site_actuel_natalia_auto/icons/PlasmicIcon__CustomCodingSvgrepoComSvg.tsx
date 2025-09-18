/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CustomCodingSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CustomCodingSvgrepoComSvgIcon(
  props: CustomCodingSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 230.795 230.795"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M60.357 63.289a7.5 7.5 0 0 0-10.606-.001L2.197 110.836a7.5 7.5 0 0 0-.001 10.607l47.348 47.35a7.48 7.48 0 0 0 5.304 2.197 7.498 7.498 0 0 0 5.304-12.802L18.107 116.14l42.25-42.245a7.5 7.5 0 0 0 0-10.606m168.241 47.35-47.355-47.352a7.5 7.5 0 0 0-10.606.001 7.5 7.5 0 0 0 .001 10.607l42.051 42.048-42.249 42.243a7.5 7.5 0 0 0-.001 10.606 7.48 7.48 0 0 0 5.304 2.197 7.48 7.48 0 0 0 5.303-2.196l47.554-47.547a7.497 7.497 0 0 0-.002-10.607m-72.709-49.337a7.5 7.5 0 0 0-10.498 1.51l-71.994 96.184a7.5 7.5 0 0 0 1.51 10.498 7.46 7.46 0 0 0 4.488 1.496 7.49 7.49 0 0 0 6.01-3.006L157.398 71.8a7.5 7.5 0 0 0-1.509-10.498"
        }
      ></path>
    </svg>
  );
}

export default CustomCodingSvgrepoComSvgIcon;
/* prettier-ignore-end */
