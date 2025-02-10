// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SvgBurgerMenuSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SvgBurgerMenuSvgIcon(props: SvgBurgerMenuSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 12 12"}
      version={"1.1"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M.5 5.5h11v1H.5zm0-3h11v1H.5zm0 6h11v1H.5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SvgBurgerMenuSvgIcon;
/* prettier-ignore-end */
