/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnMessageMultipleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnMessageMultipleIcon(props: IcnMessageMultipleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
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
        d={
          "M5 8.5h4M5 5.835h2m-1.334 7.999c.7.58 1.543.95 2.509 1.013.761.05 1.556.05 2.315 0 .262-.018.547-.08.793-.179.273-.111.41-.166.479-.158.07.008.17.082.371.228.356.259.803.444 1.467.428.335-.008.503-.012.578-.138.075-.127-.018-.301-.206-.651-.259-.486-.423-1.041-.174-1.486.429-.636.793-1.389.847-2.202.028-.437.028-.89 0-1.327a4.452 4.452 0 00-.378-1.528"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        d={
          "M8.23 12.159a4.745 4.745 0 004.415-4.435c.03-.466.03-.95 0-1.415A4.745 4.745 0 008.23 1.874a18.98 18.98 0 00-2.46 0 4.745 4.745 0 00-4.414 4.435c-.03.466-.03.949 0 1.415.056.867.444 1.67.9 2.348.264.475.09 1.068-.186 1.585-.199.373-.298.56-.219.695.08.135.258.14.615.148.705.017 1.18-.181 1.558-.457.214-.156.321-.235.395-.244.073-.009.219.05.509.17.26.106.564.171.842.19a19.05 19.05 0 002.46 0z"
        }
      ></path>
    </svg>
  );
}

export default IcnMessageMultipleIcon;
/* prettier-ignore-end */
