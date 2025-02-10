// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _7548789UserInterfacePersonAvatarCustomerIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _7548789UserInterfacePersonAvatarCustomerIconSvgIcon(
  props: _7548789UserInterfacePersonAvatarCustomerIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
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
          "M16 13.732c3.648 0 6.616-2.968 6.616-6.616S19.648.5 16 .5 9.384 3.468 9.384 7.116s2.968 6.616 6.616 6.616zM16 3.5a3.62 3.62 0 013.616 3.616c0 1.994-1.622 3.616-3.616 3.616s-3.616-1.622-3.616-3.616A3.62 3.62 0 0116 3.5zm0 11C9.659 14.5 4.5 19.659 4.5 26v2c0 1.93 1.57 3.5 3.5 3.5h16c1.93 0 3.5-1.57 3.5-3.5v-2c0-6.341-5.159-11.5-11.5-11.5zM24.5 28a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-2c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5v2z"
        }
      ></path>
    </svg>
  );
}

export default _7548789UserInterfacePersonAvatarCustomerIconSvgIcon;
/* prettier-ignore-end */
