/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmojiMouthOpenSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function EmojiMouthOpenSvgrepoComSvgIcon(
  props: EmojiMouthOpenSvgrepoComSvgIconProps
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
          "M12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.897a1.103 1.103 0 1 1 0-2.206 1.103 1.103 0 0 1 0 2.206"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        }
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11m0-2.007a8.993 8.993 0 1 1 0-17.986 8.993 8.993 0 0 1 0 17.986"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default EmojiMouthOpenSvgrepoComSvgIcon;
/* prettier-ignore-end */
