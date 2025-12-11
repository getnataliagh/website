/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnGithubLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnGithubLineIcon(props: IcnGithubLineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-.625 -.625 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <desc>Github Logo 1 Streamline Icon: https://streamlinehq.com</desc>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M11.258 17.46a.39.39 0 0 0 .5.376 8.79 8.79 0 1 0-4.875 0 .39.39 0 0 0 .5-.375v-1.836a2.195 2.195 0 0 1-2.695-1.344A4.74 4.74 0 0 0 3.625 12.5c2.227.54 2.266 1.984 3.781 1.305a3.1 3.1 0 0 1 .492-1.422c-1.718-.195-3.53-.469-3.53-3.438a3 3 0 0 1 .78-2.078 2.78 2.78 0 0 1 .079-2.047s.648-.21 2.132.782a7.34 7.34 0 0 1 3.907 0c1.476-1 2.125-.782 2.125-.782a2.78 2.78 0 0 1 .078 2.047 3 3 0 0 1 .781 2.078c0 2.977-1.812 3.243-3.54 3.43a3 3 0 0 1 .532 1.82Z"
        }
      ></path>
    </svg>
  );
}

export default IcnGithubLineIcon;
/* prettier-ignore-end */
