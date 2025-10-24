/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TurnOffSvgrepoComSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TurnOffSvgrepoComSvg2Icon(
  props: TurnOffSvgrepoComSvg2IconProps
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"2"}
        d={"M16 6.07a8 8 0 1 1-8 0M12 3v10"}
      ></path>
    </svg>
  );
}

export default TurnOffSvgrepoComSvg2Icon;
/* prettier-ignore-end */
