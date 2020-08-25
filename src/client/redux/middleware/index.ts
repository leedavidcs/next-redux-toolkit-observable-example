import { getDefaultMiddleware, Middleware } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

export const epicMiddleware = createEpicMiddleware();

export const middleware: readonly Middleware[] = [...getDefaultMiddleware(), epicMiddleware];
