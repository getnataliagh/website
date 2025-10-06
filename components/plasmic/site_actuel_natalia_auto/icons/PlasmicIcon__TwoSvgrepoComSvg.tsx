/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwoSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwoSvgrepoComSvgIcon(props: TwoSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"-7 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "m14.5 13.531-8.344 9.813h10.156v2.25H1.281L9.25 16.25s3.656-4.219 4-4.75.594-1.469.594-2.344a4.93 4.93 0 0 0-4.938-4.938 4.95 4.95 0 0 0-4.938 4.938c0 .813.188 1.531.531 2.219H2.186c-.25-.719-.406-1.406-.406-2.219 0-3.906 3.219-7.125 7.125-7.125 3.656 0 6.656 2.75 7.063 6.313.031.25.031.563.031.813a7.06 7.06 0 0 1-1.5 4.375z"
        }
      ></path>
    </svg>
  );
}

export default TwoSvgrepoComSvgIcon;
/* prettier-ignore-end */
