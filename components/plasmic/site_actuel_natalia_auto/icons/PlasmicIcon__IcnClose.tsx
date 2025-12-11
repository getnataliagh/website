/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnCloseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnCloseIcon(props: IcnCloseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 21"}
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
        d={"M12.667 5.833l-9.333 9.334m0-9.334l9.333 9.334"}
      ></path>
    </svg>
  );
}

export default IcnCloseIcon;
/* prettier-ignore-end */
