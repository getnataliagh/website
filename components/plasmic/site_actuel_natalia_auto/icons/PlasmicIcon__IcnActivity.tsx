/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnActivityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnActivityIcon(props: IcnActivityIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
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
        d={
          "M2.879 13.621C2 12.743 2 11.328 2 8.5c0-2.828 0-4.243.879-5.121C3.757 2.5 5.172 2.5 8 2.5c2.828 0 4.243 0 5.121.879C14 4.257 14 5.672 14 8.5c0 2.828 0 4.243-.879 5.121-.878.879-2.293.879-5.121.879-2.828 0-4.243 0-5.121-.879z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M4 8.5h1.667L7 5.833l2 5.334L10.333 8.5H12"}
      ></path>
    </svg>
  );
}

export default IcnActivityIcon;
/* prettier-ignore-end */
