/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type MobileValue = "mobileOnly";
export const MobileContext = React.createContext<MobileValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);
export function MobileContextProvider(
  props: React.PropsWithChildren<{ value: MobileValue[] | undefined }>
) {
  return (
    <MobileContext.Provider value={props.value}>
      {props.children}
    </MobileContext.Provider>
  );
}

export const useScreenVariants = createUseScreenVariants(true, {
  mobileOnly: "(min-width:0px) and (max-width:930px)"
});

export default MobileContext;
/* prettier-ignore-end */
