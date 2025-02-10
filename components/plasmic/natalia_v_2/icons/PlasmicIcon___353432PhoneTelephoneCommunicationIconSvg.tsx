// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _353432PhoneTelephoneCommunicationIconSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _353432PhoneTelephoneCommunicationIconSvgIcon(
  props: _353432PhoneTelephoneCommunicationIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      xmlSpace={"preserve"}
      viewBox={"0 0 64 64"}
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
          "M41.883 27.817s-1.479-1.715-2.495-1.715h-.845v-3.949a2 2 0 00-4 0v3.949h-5.085v-3.949a2 2 0 00-4 0v3.949h-.847c-1.016 0-2.494 1.715-2.494 1.715L11.175 38.033c-.419.392-.76 1.107-.76 1.598v12.623a3.675 3.675 0 003.674 3.673h35.823a3.674 3.674 0 003.673-3.673V39.631c0-.49-.341-1.206-.76-1.598L41.883 27.817zm6.702 23.11h-33.17V40.915l10.114-9.443.177-.161.177-.205.003-.004h12.227l.16.185.197.184 10.114 9.443v10.013z"
        }
      ></path>

      <path
        d={
          "M40.127 8.073H23.873c-8.283 0-15.001 6.718-15.001 15.003v2.004c0 .565.458 1.022 1.024 1.022h9.211a2.5 2.5 0 002.501-2.5v-5.153a2.5 2.5 0 012.5-2.5h15.783a2.501 2.501 0 012.501 2.5v5.153c0 1.382 1.119 2.5 2.5 2.5h9.213c.565 0 1.022-.457 1.022-1.022v-2.004c.001-8.285-6.715-15.003-15-15.003zM32 33.638a7.633 7.633 0 10.001 15.263A7.633 7.633 0 0032 33.638zm0 9.495a1.863 1.863 0 110-3.726 1.863 1.863 0 010 3.726z"
        }
      ></path>
    </svg>
  );
}

export default _353432PhoneTelephoneCommunicationIconSvgIcon;
/* prettier-ignore-end */
