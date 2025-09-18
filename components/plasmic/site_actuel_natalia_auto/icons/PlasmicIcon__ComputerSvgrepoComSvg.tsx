/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ComputerSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ComputerSvgrepoComSvgIcon(
  props: ComputerSvgrepoComSvgIconProps
) {
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

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-6v1h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ComputerSvgrepoComSvgIcon;
/* prettier-ignore-end */
