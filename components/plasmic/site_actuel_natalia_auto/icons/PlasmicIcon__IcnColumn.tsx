/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnColumnIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnColumnIcon(props: IcnColumnIconProps) {
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
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.25"}
        d={
          "M14.648 4H5.273v12.5h9.375zm2.344 10.625h.938c.468 0 .78-.313.78-.781V6.03c0-.469-.312-.781-.78-.781h-.938M2.93 14.625h-.938c-.469 0-.781-.313-.781-.781V6.03c0-.469.312-.781.781-.781h.938"
        }
      ></path>
    </svg>
  );
}

export default IcnColumnIcon;
/* prettier-ignore-end */
