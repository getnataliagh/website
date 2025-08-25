/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmojiNeutralSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmojiNeutralSvgrepoComSvgIcon(
  props: EmojiNeutralSvgrepoComSvgIconProps
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
        d={
          "M8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M17 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 14a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2z"
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

export default EmojiNeutralSvgrepoComSvgIcon;
/* prettier-ignore-end */
