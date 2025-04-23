/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9112587ConciergeBellSolidIconSvg2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _9112587ConciergeBellSolidIconSvg2Icon(
  props: _9112587ConciergeBellSolidIconSvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13 6v2h6V6zm3 3C9.703 9 4.574 13.84 4.062 20H2v5h28v-5h-2.063C27.427 13.84 22.297 9 16 9zm0 2a9.927 9.927 0 019.938 9H6.063c.492-5.086 4.71-9 9.937-9zM4 22h24v1H4z"
        }
      ></path>
    </svg>
  );
}

export default _9112587ConciergeBellSolidIconSvg2Icon;
/* prettier-ignore-end */
