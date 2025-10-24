/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlashSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlashSvgrepoComSvgIcon(props: FlashSvgrepoComSvgIconProps) {
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={
          "M8.426 13.006c-.057 0-.057 0-.115-.006-.633-.07-1.095-.698-1.032-1.402l.61-7.445C7.95 3.5 8.445 3 9.037 3H13.5q.193 0 .375.07c.602.23.922.958.715 1.627L13.1 8.802h2.748c.203 0 .402.06.578.173.55.356.738 1.14.418 1.75-.414.816-4.58 7.816-5.926 10.075-.107.18-.381.092-.37-.117L11 13z"
        }
      ></path>
    </svg>
  );
}

export default FlashSvgrepoComSvgIcon;
/* prettier-ignore-end */
