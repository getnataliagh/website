/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5957012MenuIconSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5957012MenuIconSvg2Icon(props: _5957012MenuIconSvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.5 19h32a2.5 2.5 0 110 5h-32a2.5 2.5 0 010-5zm0 10h32a2.5 2.5 0 110 5h-32a2.5 2.5 0 110-5zm0 10h32a2.5 2.5 0 110 5h-32a2.5 2.5 0 110-5z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
        stroke={"none"}
        strokeWidth={"1"}
      ></path>
    </svg>
  );
}

export default _5957012MenuIconSvg2Icon;
/* prettier-ignore-end */
