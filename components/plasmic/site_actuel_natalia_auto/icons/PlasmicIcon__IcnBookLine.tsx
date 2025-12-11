/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnBookLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnBookLineIcon(props: IcnBookLineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"-.625 -.625 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <desc>
        Manual Book Content Sign Streamline Icon: https://streamlinehq.com
      </desc>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M16.406 18.164H4.102a1.76 1.76 0 0 1-1.758-1.758M4.688.586A2.34 2.34 0 0 0 2.344 2.93v13.476c0-.968.789-1.758 1.758-1.758H15.82a.59.59 0 0 0 .586-.585V1.172a.59.59 0 0 0-.586-.586zm10.546 17.578v-3.516"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.25"}
        d={
          "M6.975 5.457c0-1.263 1.01-2.4 2.4-2.4 1.264 0 2.401 1.01 2.401 2.4 0 1.264-1.01 2.401-2.4 2.401v1.407m-.002 2.31c-.154 0-.307.154-.307.307s.153.308.307.308m0-.615c.154 0 .307.154.307.307s-.153.308-.307.308"
        }
      ></path>
    </svg>
  );
}

export default IcnBookLineIcon;
/* prettier-ignore-end */
