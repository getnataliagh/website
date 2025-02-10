// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _352228WorkIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _352228WorkIconSvgIcon(props: _352228WorkIconSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M48 0v48H0V0h48m1-1H-1v50h50V-1z"} fill={"currentColor"}></path>

      <path
        d={
          "M40 12h-8V8c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H8c-2.21 0-3.98 1.79-3.98 4L4 38c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-12 0h-8V8h8v4z"
        }
      ></path>
    </svg>
  );
}

export default _352228WorkIconSvgIcon;
/* prettier-ignore-end */
