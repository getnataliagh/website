/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DelaySvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DelaySvgrepoComSvgIcon(props: DelaySvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M1.5 8a6.5 6.5 0 0 1 6.744-6.496.75.75 0 1 0 .055-1.499 8 8 0 1 0 7.036 11.193.75.75 0 0 0-1.375-.6 7 7 0 0 1-.22.453A6.5 6.5 0 0 1 1.5 8m9.226-6.762a.75.75 0 0 1 1.013-.312q.266.141.518.3a.75.75 0 0 1-.799 1.27 7 7 0 0 0-.42-.244.75.75 0 0 1-.312-1.014m3.014 2.27a.75.75 0 0 1 1.034.235q.159.252.3.518a.75.75 0 1 1-1.326.702 7 7 0 0 0-.243-.421.75.75 0 0 1 .235-1.034m1.477 3.471a.75.75 0 0 1 .777.722 8 8 0 0 1 .002.552.75.75 0 0 1-1.5-.047 7 7 0 0 0 0-.45.75.75 0 0 1 .721-.777"
          }
        ></path>

        <path
          d={
            "M7.75 3a.75.75 0 0 1 .75.75v3.786l2.085 1.043a.75.75 0 1 1-.67 1.342l-2.5-1.25A.75.75 0 0 1 7 8V3.75A.75.75 0 0 1 7.75 3"
          }
        ></path>
      </g>
    </svg>
  );
}

export default DelaySvgrepoComSvgIcon;
/* prettier-ignore-end */
