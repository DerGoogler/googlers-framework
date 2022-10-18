import React from "react";

export const Context = React.createContext({});
export const Extra = React.createContext({});

export interface ActivityIntent<E = {}> {
  activity: React.ElementType;
  props: {
    key: string;
    extra: E;
  };
}

export interface ActivityContext {
  readonly popPage: () => void;
  readonly pushPage: <T>(props: ActivityIntent<T>) => void;
  readonly splitter: {
    readonly show: () => void;
    readonly hide: () => void;
    readonly state: boolean;
  };
  readonly onBackPressed: (callback: () => void) => void;
  readonly onResume: (callback: () => void) => void;
}

export function useActivity<E = {}>() {
  const ctx = React.useContext(Context) as ActivityContext;
  const etx = React.useContext(Extra) as E;
  return {
    context: ctx,
    extra: etx,
  };
}
