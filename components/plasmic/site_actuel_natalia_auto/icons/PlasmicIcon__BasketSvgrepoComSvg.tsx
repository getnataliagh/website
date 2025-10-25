/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BasketSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BasketSvgrepoComSvgIcon(props: BasketSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M12 4a3.56 3.56 0 0 0-3.389 2.48L7.811 9h8.378l-.8-2.52A3.56 3.56 0 0 0 12 4m6.287 5-.992-3.125a5.555 5.555 0 0 0-10.59 0L5.713 9H3.348a2 2 0 0 0-1.914 2.58l1.124 3.71 1.388 4.58A3 3 0 0 0 6.817 22h10.366a3 3 0 0 0 2.87-2.13l1.389-4.58 1.124-3.71A2 2 0 0 0 20.652 9zM6.444 11H3.348l.909 3h3.78l-.41-3zm3.202 0 .409 3h3.89l.41-3zm6.727 0-.41 3h3.78l.909-3zm2.764 5H15.69l-.545 4h2.037a1 1 0 0 0 .957-.71zm-6.01 4 .545-4h-3.345l.546 4zm-4.273 0-.545-4H4.863l.997 3.29a1 1 0 0 0 .957.71z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default BasketSvgrepoComSvgIcon;
/* prettier-ignore-end */
