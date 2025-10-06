/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MissedCallSvgrepoComSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MissedCallSvgrepoComSvg2Icon(
  props: MissedCallSvgrepoComSvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"3"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.11 8.4a2.62 2.62 0 0 0-2.53 2.78c.35 6 2 20.64 9.9 29.77 9.46 11 21.78 14.79 34.42 14.23a2.68 2.68 0 0 0 2.52-2.65v-9.61a4 4 0 0 0-3.09-3.86L46 37.66a4 4 0 0 0-4.16 1.69l-1.4 2.12a1 1 0 0 1-1.22.37C36 40.45 23.17 34.45 21.76 24.33a1 1 0 0 1 .48-1l2.54-1.55a4 4 0 0 0 1.81-4.21l-1.39-6.44a4 4 0 0 0-4-3.12Zm28.21 2.49 14.33 14.33m-14.33 0 14.33-14.33"
        }
      ></path>
    </svg>
  );
}

export default MissedCallSvgrepoComSvg2Icon;
/* prettier-ignore-end */
