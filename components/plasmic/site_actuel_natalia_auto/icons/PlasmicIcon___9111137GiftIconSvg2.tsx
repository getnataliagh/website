/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9111137GiftIconSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _9111137GiftIconSvg2Icon(props: _9111137GiftIconSvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.497 7C5.169 6.463 5 5.803 5 5c0-1.583 1.19-3 3-3 1.812 0 3.273 1.214 4 3.114C12.727 3.214 14.188 2 16 2c1.81 0 3 1.417 3 3 0 .803-.169 1.463-.497 2H20a2 2 0 012 2v2a2 2 0 01-2 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 01-2-2V9a2 2 0 012-2h1.497zM11 9H4v2h7V9zm2 2h7V9h-7v2zm-2 9v-7H6v7h5zm2 0h5v-7h-5v7zM8 4c-.62 0-1 .452-1 1 0 1.253 1.017 1.85 3.43 1.974C10.16 5.112 9.161 4 8 4zm7.93 0c-1.163 0-2.162 1.112-2.43 2.974 2.412-.125 3.43-.72 3.43-1.974 0-.548-.38-1-1-1z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default _9111137GiftIconSvg2Icon;
/* prettier-ignore-end */
