/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnAwardRibbonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnAwardRibbonIcon(props: IcnAwardRibbonIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-0.625 -0.625 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.755 10.19l-3.17 3.873 2.93.585 1.172 3.516 3.082-4.889m7.226-3.085l3.17 3.873-2.93.585-1.172 3.516-3.082-4.889"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
      ></path>

      <path
        d={"M2.93 7.031a6.445 6.445 0 1012.89 0 6.445 6.445 0 10-12.89 0z"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
      ></path>

      <path
        d={
          "M9.79 3.353l.975 1.92h1.662a.455.455 0 01.327.782l-1.526 1.498.845 1.942a.46.46 0 01-.655.575L9.375 8.921l-2.043 1.15a.46.46 0 01-.655-.576l.845-1.942-1.526-1.501a.455.455 0 01.327-.782h1.662l.976-1.917a.469.469 0 01.829 0z"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
      ></path>
    </svg>
  );
}

export default IcnAwardRibbonIcon;
/* prettier-ignore-end */
