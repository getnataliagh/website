/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnMultipleNeutralUsersIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnMultipleNeutralUsersIcon(
  props: IcnMultipleNeutralUsersIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
        strokeWidth={"1.25"}
        d={
          "M3.262 6.777a3.223 3.223 0 106.445 0 3.223 3.223 0 00-6.445 0zM1.21 16.445a5.274 5.274 0 0110.548 0m.001-12.37a3.223 3.223 0 11-.005 5.402m.59 1.825a5.279 5.279 0 016.445 5.143"
        }
      ></path>
    </svg>
  );
}

export default IcnMultipleNeutralUsersIcon;
/* prettier-ignore-end */
