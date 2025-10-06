/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwoSquareFillSvgrepoComSvg2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function TwoSquareFillSvgrepoComSvg2Icon(
  props: TwoSquareFillSvgrepoComSvg2IconProps
) {
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
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M2 2h20v20H2zm7.157 15h6.823v-1.593H11.7l2.263-2.386q.93-1.018 1.312-1.784.384-.765.383-1.504 0-1.345-.854-2.085-.847-.738-2.386-.738-1.005 0-1.798.43a3.06 3.06 0 0 0-1.23 1.177 3.3 3.3 0 0 0-.431 1.66h1.982q0-.75.383-1.21.39-.465 1.06-.464.622 0 .957.383.335.376.335 1.039 0 .485-.322 1.025-.315.54-.977 1.265l-3.22 3.432z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default TwoSquareFillSvgrepoComSvg2Icon;
/* prettier-ignore-end */
