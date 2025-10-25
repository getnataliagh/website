/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EuroSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EuroSvgrepoComSvgIcon(props: EuroSvgrepoComSvgIconProps) {
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
          "M4 13.5h2.111A11 11 0 0 1 6 12a11 11 0 0 1 .111-1.5H4a1 1 0 0 1 0-2h2.571A8.98 8.98 0 0 1 14.857 2a7.96 7.96 0 0 1 3.59.854 1 1 0 0 1-.894 1.79A6 6 0 0 0 14.857 4 6.86 6.86 0 0 0 8.7 8.5H14a1 1 0 0 1 0 2H8.125a9 9 0 0 0 0 3H13a1 1 0 0 1 0 2H8.7a6.86 6.86 0 0 0 6.157 4.5 6 6 0 0 0 2.7-.644 1 1 0 0 1 .894 1.79 7.96 7.96 0 0 1-3.59.854 8.98 8.98 0 0 1-8.286-6.5H4a1 1 0 0 1 0-2"
        }
      ></path>
    </svg>
  );
}

export default EuroSvgrepoComSvgIcon;
/* prettier-ignore-end */
