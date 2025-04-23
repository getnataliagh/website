/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _8666771FilterFunnelIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _8666771FilterFunnelIconSvgIcon(
  props: _8666771FilterFunnelIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "feather feather-filter"
      )}
      fill={"none"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"2"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M22 3H2l8 9.46V19l4 2v-8.54L22 3z"}></path>
    </svg>
  );
}

export default _8666771FilterFunnelIconSvgIcon;
/* prettier-ignore-end */
