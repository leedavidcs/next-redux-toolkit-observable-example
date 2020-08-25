import { AnyAction, configureStore } from "@reduxjs/toolkit";
import epics from "./epics";
import { epicMiddleware, middleware } from "./middleware";
import { IReducerState, reducer } from "./reducers";

export { actions } from "./actions";
export type { IReducerState } from "./reducers";

export const getStore = () => {
	const store = configureStore<IReducerState, AnyAction, typeof middleware>({
		devTools: process.env.NODE_ENV !== "production",
		middleware,
		preloadedState: {},
		reducer
	});

	epicMiddleware.run(epics);

	return store;
};
