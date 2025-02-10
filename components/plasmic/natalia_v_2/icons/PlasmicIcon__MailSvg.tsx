// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailSvgIcon(props: MailSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 128 126"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M110.672 4.023v13.085m6.498-6.577h-13.065"}
        stroke={"#8898AA"}
        strokeWidth={"1.451"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        opacity={".4"}
        d={
          "M121.117 65.621a4.2 4.2 0 00-4.76 3.556 4.205 4.205 0 003.55 4.768 4.201 4.201 0 004.761-3.556 4.205 4.205 0 00-3.551-4.767z"
        }
        fill={"#B2BBCB"}
      ></path>

      <path
        opacity={".6"}
        d={
          "M122.844 67.938a4.2 4.2 0 00-4.76 3.556 4.204 4.204 0 003.55 4.767 4.2 4.2 0 004.76-3.555 4.205 4.205 0 00-3.55-4.768z"
        }
        stroke={"#B2BBCB"}
        strokeWidth={"2.358"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        opacity={".4"}
        d={
          "M9.04 28.167a5.36 5.36 0 005.356-5.365 5.36 5.36 0 00-5.356-5.364 5.36 5.36 0 00-5.356 5.364 5.36 5.36 0 005.356 5.365z"
        }
        fill={"#B2BBCB"}
      ></path>

      <path
        opacity={".6"}
        d={
          "M6.36 25.483a5.36 5.36 0 005.357-5.364 5.36 5.36 0 00-5.357-5.365 5.36 5.36 0 00-5.356 5.365 5.36 5.36 0 005.356 5.364z"
        }
        stroke={"#B2BBCB"}
        strokeWidth={"1.815"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M5.496 80.465v8.945"}
        stroke={"#B2BBCB"}
        strokeWidth={"1.451"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M46.336 0v7.603"}
        stroke={"#B2BBCB"}
        strokeWidth={"1.233"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M10.005 84.977H1"}
        stroke={"#B2BBCB"}
        strokeWidth={"1.451"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M50.166 3.84h-7.654"}
        stroke={"#B2BBCB"}
        strokeWidth={"1.233"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        opacity={".4"}
        d={
          "M64.23 125.003c27.19 0 49.231-4.865 49.231-10.867 0-6.001-22.041-10.866-49.23-10.866-27.19 0-49.231 4.865-49.231 10.866 0 6.002 22.041 10.867 49.23 10.867z"
        }
        fill={"#B2BBCB"}
      ></path>

      <g clipPath={"url(#lh9kfyXMFLB9a)"} stroke={"#757E8A"}>
        <path
          d={
            "M99.329 96.641H28.39a6.064 6.064 0 01-6.078-6.078v-44.23a6.08 6.08 0 016.078-6.08h70.964a6.08 6.08 0 016.078 6.08v44.23a6.103 6.103 0 01-6.104 6.078z"
          }
          fill={"#CFD4DC"}
          strokeWidth={"2.631"}
          strokeMiterlimit={"10"}
        ></path>

        <path
          d={
            "M65 75.5c-5 0-18-8.5-18-8.5L30 56.5V26.547C30 21.84 33.89 18 38.66 18h50.68c4.77 0 8.66 3.84 8.66 8.547V56.5L79.5 69S70 75.5 65 75.5z"
          }
          fill={"#F0F1F2"}
          strokeWidth={"1.842"}
          strokeMiterlimit={"10"}
        ></path>

        <path
          d={"M50.624 68.75L22.312 87.484M79 69l27 18"}
          strokeWidth={"1.842"}
          strokeMiterlimit={"10"}
        ></path>

        <path
          d={
            "M38.496 26.754h18.156m-17.82 8.386h50.75m-50.75 8.227h50.75m-50.75 8.923h50.75"
          }
          strokeWidth={"2.105"}
          strokeMiterlimit={"10"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>

        <path strokeWidth={"1.84"} d={"M30.512 56.78l-8-5"}></path>
      </g>

      <path
        stroke={"#757E8A"}
        strokeWidth={"1.84"}
        d={"M105.488 51.78l-8 5"}
      ></path>

      <defs>
        <clipPath id={"lh9kfyXMFLB9a"}>
          <path
            fill={"#fff"}
            transform={"translate(21 17.309)"}
            d={"M0 0h85.725v80.647H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default MailSvgIcon;
/* prettier-ignore-end */
