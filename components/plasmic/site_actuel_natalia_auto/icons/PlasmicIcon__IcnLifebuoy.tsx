/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnLifebuoyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnLifebuoyIcon(props: IcnLifebuoyIconProps) {
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
        d={"M17.5 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M14.167 10a4.167 4.167 0 1 1-8.334 0 4.167 4.167 0 0 1 8.334 0M10 5.833V2.5m0 11.667V17.5m4.167-7.5H17.5M5.833 10H2.5m9.914-7.103a3.333 3.333 0 1 1 4.69 4.69m0 4.827a3.333 3.333 0 1 1-4.69 4.69m-4.828 0a3.333 3.333 0 1 1-4.69-4.69m0-4.828a3.333 3.333 0 1 1 4.69-4.69"
        }
      ></path>
    </svg>
  );
}

export default IcnLifebuoyIcon;
/* prettier-ignore-end */
