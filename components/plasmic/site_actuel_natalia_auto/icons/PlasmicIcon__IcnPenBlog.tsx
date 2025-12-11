/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnPenBlogIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnPenBlogIcon(props: IcnPenBlogIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-.625 -.625 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <desc>Vectors Pen Streamline Icon: https://streamlinehq.com</desc>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M9.404 18.164c.586-.586 4.854-9.194 4.854-9.194a2.34 2.34 0 0 0-.078-1.92l-1.875-2.948h-5.86L4.57 7.05a2.34 2.34 0 0 0-.078 1.919s4.326 8.608 4.912 9.194m-.029-5.273V9.75"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M8.203 8.578a1.172 1.172 0 1 0 2.344 0 1.172 1.172 0 1 0-2.344 0m4.102-4.476h-5.86L5.438 1.547a.586.586 0 0 1 .45-.961h7.032a.586.586 0 0 1 .45.96Z"
        }
      ></path>
    </svg>
  );
}

export default IcnPenBlogIcon;
/* prettier-ignore-end */
