/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _24HoursServiceSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _24HoursServiceSvgrepoComSvgIcon(
  props: _24HoursServiceSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      version={"1.1"}
      viewBox={"0 0 309.768 309.768"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M308.417 122.685c-2.317-4.607-7.223-7.408-12.292-6.967l-15.409 1.126C264.002 56.432 208.676 11.876 143.01 11.876 64.154 11.875 0 76.034 0 154.884c0 78.856 64.154 143.009 143.009 143.009 45.645 0 88.934-22.083 115.798-59.063 4.123-5.689 2.855-13.63-2.823-17.764-5.689-4.128-13.636-2.845-17.759 2.817-22.099 30.421-57.692 48.587-95.222 48.587-64.839 0-117.582-52.748-117.582-117.582s52.744-117.58 117.583-117.58c52.22 0 96.549 34.244 111.838 81.434l-8.023.587a12.714 12.714 0 0 0-7.386 22.3l23.083 19.934c2.246 3.617 6.217 6.037 10.775 6.037.239 0 .462-.054.696-.065.076 0 .136.033.207.033a12.75 12.75 0 0 0 9.622-4.406l22.849-26.456a12.7 12.7 0 0 0 1.752-14.021"
          }
        ></path>

        <path
          d={
            "M75.772 199.191v-12.347l11.259-10.176c19.031-17.024 28.278-26.815 28.544-36.997 0-7.109-4.286-12.733-14.348-12.733-7.5 0-14.071 3.742-18.629 7.239l-5.765-14.62c6.57-4.944 16.752-8.974 28.55-8.974 19.706 0 30.562 11.525 30.562 27.342 0 14.609-10.584 26.276-23.187 37.53l-8.044 6.701v.261h32.841v16.763H75.772zm110.489 0v-20.783H147.66v-13.26l32.972-53.091h24.933v51.073h10.454v15.278h-10.454v20.783zm0-36.061v-19.298c0-5.232.267-10.584.669-16.219h-.533c-2.823 5.635-5.102 10.726-8.044 16.219l-11.661 19.031v.267z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default _24HoursServiceSvgrepoComSvgIcon;
/* prettier-ignore-end */
