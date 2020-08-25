import { countSlice, pingSlice, SliceState } from "@/client/redux/slices";
import { ReducersMapObject } from "redux";

export interface IReducerState {
	count: SliceState<typeof countSlice>;
	ping: SliceState<typeof pingSlice>;
}

export const reducer: ReducersMapObject<IReducerState> = {
	count: countSlice.reducer,
	ping: pingSlice.reducer
};
