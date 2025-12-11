/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnCrossroadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnCrossroadIcon(props: IcnCrossroadIconProps) {
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

      <desc>Business Crossroad Streamline Icon: https://streamlinehq.com</desc>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M8.741.586v1.172m0 4.687V8.79m0 4.687v4.687m7.032-11.719H2.882V1.758h12.89l1.93 1.929a.586.586 0 0 1 0 .829ZM2.882 8.79h12.89v4.687H2.883l-1.929-1.93a.586.586 0 0 1 0-.829Z"
        }
      ></path>
    </svg>
  );
}

export default IcnCrossroadIcon;
/* prettier-ignore-end */
