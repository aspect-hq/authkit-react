"use client";

import * as React from "react";
import { Client } from "./types";
import { State, initialState } from "./state";

export interface ContextValue extends Client, State {
  authWithSeparateTab: (options: { separateTabUrl: string }) => Promise<void>;
  refreshClient: () => void;
}

export const Context = React.createContext<ContextValue>(
  initialState as ContextValue,
);
