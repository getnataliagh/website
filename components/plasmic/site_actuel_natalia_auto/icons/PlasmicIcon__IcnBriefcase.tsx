/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnBriefcaseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnBriefcaseIcon(props: IcnBriefcaseIconProps) {
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
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M2.916 10v6.25c0 .92.746 1.667 1.667 1.667h10.833c.92 0 1.667-.747 1.667-1.667V10"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "m11.667 11.25 5.632-1.502a.83.83 0 0 0 .618-.805v-3.11A.833.833 0 0 0 17.084 5H2.917a.833.833 0 0 0-.834.833v3.11c0 .378.254.708.619.805l5.632 1.502"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "m12.916 5-.314-2.201a.83.83 0 0 0-.825-.716H8.222a.83.83 0 0 0-.825.716L7.083 5m4.583 5H8.333v1.667a1.667 1.667 0 0 0 3.333 0z"
        }
      ></path>
    </svg>
  );
}

export default IcnBriefcaseIcon;
/* prettier-ignore-end */
