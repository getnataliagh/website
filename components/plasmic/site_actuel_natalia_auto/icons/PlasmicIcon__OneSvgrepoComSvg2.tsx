/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OneSvgrepoComSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OneSvgrepoComSvg2Icon(props: OneSvgrepoComSvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"-11 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M1.906 2.625h5.469v22.969H5.094V4.844H1.906z"}></path>
    </svg>
  );
}

export default OneSvgrepoComSvg2Icon;
/* prettier-ignore-end */
