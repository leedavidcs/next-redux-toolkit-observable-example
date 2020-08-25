import { getStore, IReducerState } from "@/client/redux";
import { createWrapper } from "next-redux-wrapper";

export const withStore = createWrapper<IReducerState>(getStore, {
	debug: process.env.NODE_ENV !== "production"
}).withRedux;
