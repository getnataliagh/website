/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BusinessGrowthManagementSvgrepoComSvg2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BusinessGrowthManagementSvgrepoComSvg2Icon(
  props: BusinessGrowthManagementSvgrepoComSvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.5 21H20V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h-2v-7.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21H8v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21H2.5a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1M7 21H5v-6h2Zm6 0h-2v-7h2Zm6 0h-2V10h2Z"
        }
      ></path>

      <path
        d={
          "M2.5 13a.47.47 0 0 0 .35-.15l4.7-4.69 3.65 2.74a.49.49 0 0 0 .65-.05L19 3.71V5.5a.5.5 0 0 0 1 0v-3a.4.4 0 0 0 0-.19.51.51 0 0 0-.31-.31.4.4 0 0 0-.19 0h-3a.5.5 0 0 0 0 1h1.79l-6.84 6.84L7.8 7.1a.49.49 0 0 0-.65.05l-5 5a.48.48 0 0 0 0 .7.47.47 0 0 0 .35.15"
        }
      ></path>
    </svg>
  );
}

export default BusinessGrowthManagementSvgrepoComSvg2Icon;
/* prettier-ignore-end */
