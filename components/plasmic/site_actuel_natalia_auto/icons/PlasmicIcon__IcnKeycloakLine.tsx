/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnKeycloakLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnKeycloakLineIcon(props: IcnKeycloakLineIconProps) {
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
        strokeWidth={"1.25"}
        d={
          "M19 5.567h-1.606a1 1 0 0 1-.854-.479l-1.594-2.61A1 1 0 0 0 14.092 2H6.465a1 1 0 0 0-.853.479L1.319 9.503a1 1 0 0 0 0 1.043l4.293 7.025a1 1 0 0 0 .853.478h7.627a1 1 0 0 0 .854-.478l1.594-2.61a1 1 0 0 1 .854-.478H19"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"1.25"}
        d={
          "m8.412 14.037-2.134-3.49a1 1 0 0 1 0-1.044l2.134-3.49m3.622 8.024 2.133-3.49a1 1 0 0 0 0-1.044l-2.133-3.49"
        }
      ></path>
    </svg>
  );
}

export default IcnKeycloakLineIcon;
/* prettier-ignore-end */
