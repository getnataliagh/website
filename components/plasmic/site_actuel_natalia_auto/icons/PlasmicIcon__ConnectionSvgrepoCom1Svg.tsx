/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ConnectionSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ConnectionSvgrepoCom1SvgIcon(
  props: ConnectionSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 490.4 490.4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M454.4 209.85c-15.9 0-29.5 10.9-33.4 25.6h-71.1c-1.9-22.1-10.9-42.3-24.5-58.6l50.5-50.5c13.2 7.8 30.3 5.8 41.9-5.4 13.6-13.6 13.6-35.7 0-49.3s-35.7-13.6-49.3 0c-11.3 11.3-13.2 28.4-5.4 41.9l-50.5 50.5c-16.3-13.6-36.5-22.5-58.6-24.5v-71.1c14.8-3.9 25.6-17.5 25.6-33.4 0-19-15.5-35-35-35-19 0-35 15.5-35 35 0 15.9 10.9 29.5 25.6 33.4v71.5c-22.1 1.9-42.3 10.9-58.6 24.5l-50.5-50.5c7.8-13.2 5.8-30.7-5.4-41.9-13.6-13.6-35.7-13.6-49.3 0s-13.6 35.7 0 49.3c11.3 11.3 28.4 13.2 41.9 5.4l50.5 50.5c-13.6 16.3-22.5 36.5-24.5 58.6H68.4c-3.9-14.8-17.5-25.7-33.4-25.7-19 0-35 15.5-35 35 0 19 15.5 35 35 35 15.9 0 29.5-10.9 33.4-25.6h71.5c1.9 22.1 10.9 42.3 24.5 58.6l-50.5 50.5c-13.2-7.8-30.7-5.8-41.9 5.4-13.6 13.6-13.6 35.7 0 49.3s35.7 13.6 49.3 0c11.3-11.3 13.2-28.4 5.4-41.9l50.5-50.5c16.3 13.6 36.5 22.5 58.6 24.5v71.5c-14.8 3.9-25.6 17.5-25.6 33.4 0 19 15.5 35 35 35 19 0 35-15.5 35-35 0-15.9-10.9-29.5-25.6-33.4v-71.9c22.1-1.9 42.3-10.9 58.6-24.5l50.5 50.5c-7.8 13.2-5.8 30.7 5.4 41.9 13.6 13.6 35.7 13.6 49.3 0s13.6-35.7 0-49.3c-11.3-11.3-28.4-13.2-41.9-5.4l-50.5-50.5c13.6-16.3 22.5-36.5 24.5-58.6H422c3.9 14.8 17.5 25.6 33.4 25.6 19 0 35-15.5 35-35s-16.5-34.9-36-34.9"
        }
      ></path>
    </svg>
  );
}

export default ConnectionSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
