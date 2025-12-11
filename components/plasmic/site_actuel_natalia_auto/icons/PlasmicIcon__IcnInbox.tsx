/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnInboxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnInboxIcon(props: IcnInboxIconProps) {
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
          "M12 3.9H4.8A1.8 1.8 0 0 0 3 5.7v13.5A1.8 1.8 0 0 0 4.8 21h13.5a1.8 1.8 0 0 0 1.8-1.8V12"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={"M3 13.8h5.4v.45a3.15 3.15 0 1 0 6.3 0v-.45h5.4"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={"M21 6.15a3.15 3.15 0 1 1-6.3 0 3.15 3.15 0 0 1 6.3 0Z"}
      ></path>
    </svg>
  );
}

export default IcnInboxIcon;
/* prettier-ignore-end */
