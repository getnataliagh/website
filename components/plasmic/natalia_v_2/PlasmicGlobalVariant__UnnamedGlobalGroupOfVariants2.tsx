/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type UnnamedGlobalGroupOfVariants2Value = "unnamedVariant";
export const UnnamedGlobalGroupOfVariants2Context = React.createContext<
  UnnamedGlobalGroupOfVariants2Value | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);
export function UnnamedGlobalGroupOfVariants2ContextProvider(
  props: React.PropsWithChildren<{
    value: UnnamedGlobalGroupOfVariants2Value | undefined;
  }>
) {
  return (
    <UnnamedGlobalGroupOfVariants2Context.Provider value={props.value}>
      {props.children}
    </UnnamedGlobalGroupOfVariants2Context.Provider>
  );
}

export function useUnnamedGlobalGroupOfVariants2() {
  return React.useContext(UnnamedGlobalGroupOfVariants2Context);
}

export default UnnamedGlobalGroupOfVariants2Context;
/* prettier-ignore-end */
