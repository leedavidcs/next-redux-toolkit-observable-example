import { Slice } from "@reduxjs/toolkit";

export { countSlice } from "./count.slice";
export { pingSlice } from "./ping.slice";

export type SliceState<T> = T extends Slice<infer U, any, any> ? U : unknown;
