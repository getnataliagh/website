// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _2849824StoreShoppingMarketBuyShopIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _2849824StoreShoppingMarketBuyShopIconSvgIcon(
  props: _2849824StoreShoppingMarketBuyShopIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"1"}>
        <path
          d={
            "M397.78 316H192.65A15 15 0 01178 304.33l-34.54-150.48a15 15 0 0114.62-18.36h274.27A15 15 0 01447 153.85l-34.6 150.48A15 15 0 01397.78 316zm-193.19-30h181.25l27.67-120.48h-236.6zM222 450a57.48 57.48 0 1157.48-57.48A57.54 57.54 0 01222 450zm0-84.95a27.48 27.48 0 1027.48 27.47A27.5 27.5 0 00222 365.05zM368.42 450a57.48 57.48 0 1157.48-57.48A57.54 57.54 0 01368.42 450zm0-84.95a27.48 27.48 0 1027.48 27.47 27.5 27.5 0 00-27.48-27.47z"
          }
        ></path>

        <path
          d={
            "M158.08 165.49a15 15 0 01-14.23-10.26L118.14 78H70.7a15 15 0 110-30H129a15 15 0 0114.23 10.26l29.13 87.49a15 15 0 01-14.23 19.74z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default _2849824StoreShoppingMarketBuyShopIconSvgIcon;
/* prettier-ignore-end */
