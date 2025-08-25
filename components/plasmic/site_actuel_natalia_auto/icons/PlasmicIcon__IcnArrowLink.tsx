/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnArrowLinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnArrowLinkIcon(props: IcnArrowLinkIconProps) {
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
        d={"M12.5 14.167L16.667 10 12.5 5.833M3.333 10h13.333"}
      ></path>
    </svg>
  );
}

export default IcnArrowLinkIcon;
/* prettier-ignore-end */
