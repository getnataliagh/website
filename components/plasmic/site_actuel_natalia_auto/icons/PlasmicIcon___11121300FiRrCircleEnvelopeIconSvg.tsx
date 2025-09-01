/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _11121300FiRrCircleEnvelopeIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _11121300FiRrCircleEnvelopeIconSvgIcon(
  props: _11121300FiRrCircleEnvelopeIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.993 5.994h-.004l-5.993.005a4.005 4.005 0 00-3.996 4v2.999c0 1.069.416 2.074 1.172 2.829S7.932 16.998 9 16.998h.003l5.993-.003a4.005 4.005 0 003.997-4v-3a3.977 3.977 0 00-1.173-2.83 3.979 3.979 0 00-2.827-1.17zM8.998 7.999l5.993-.005h.002c.181 0 .359.024.529.071l-2.526 2.526c-.527.527-1.448.527-1.976 0L8.494 8.064c.161-.042.33-.065.504-.065zm7.995 4.996c0 1.102-.896 2-1.999 2l-5.993.003c-.534 0-1.036-.208-1.414-.585s-.586-.88-.586-1.415V9.999c0-.183.025-.36.072-.529l2.535 2.536c.642.641 1.495.995 2.402.995s1.761-.354 2.401-.995l2.518-2.518c.043.164.065.334.065.507v3zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"
        }
      ></path>
    </svg>
  );
}

export default _11121300FiRrCircleEnvelopeIconSvgIcon;
/* prettier-ignore-end */
