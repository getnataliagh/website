/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RocketSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RocketSvgrepoComSvgIcon(props: RocketSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m127.083 247.824 50.031-76.906S102.38 141.23 67.567 167.84C32.755 194.465.005 268.184.005 268.184L37.114 289.7c0-.001 46.969-91.016 89.969-41.876m137.094 137.094 76.906-50.031s29.688 74.734 3.078 109.547c-26.625 34.797-100.344 67.563-100.344 67.563l-21.5-37.109c0-.001 91.016-46.97 41.86-89.97m-57.485-22.031-13.203-13.188c-24 62.375-80.375 49.188-80.375 49.188s-13.188-56.375 49.188-80.375l-13.188-13.188c-34.797-6-79.188 35.984-86.391 76.766-7.188 40.781-8.391 75.563-8.391 75.563s34.781-1.188 75.578-8.391 82.782-51.578 76.782-86.375M505.224 6.777C450.786-18.738 312.927 28.98 236.255 130.668c-58.422 77.453-89.688 129.641-89.688 129.641l46.406 46.406 12.313 12.313 46.391 46.391s52.219-31.25 129.672-89.656C483.005 199.074 530.739 61.215 505.224 6.777M274.63 237.371c-12.813-12.813-12.813-33.594 0-46.406s33.578-12.813 46.406.016c12.813 12.813 12.813 33.578 0 46.391-12.828 12.812-33.594 12.812-46.406-.001m76.922-76.906c-16.563-16.578-16.563-43.422 0-59.984 16.547-16.563 43.406-16.563 59.969 0s16.563 43.406 0 59.984c-16.563 16.547-43.422 16.547-59.969 0"
        }
      ></path>
    </svg>
  );
}

export default RocketSvgrepoComSvgIcon;
/* prettier-ignore-end */
