import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const countSlice = createSlice({
	name: "count",
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
		multiply: {
			reducer: (state, action: PayloadAction<number>) => state * action.payload,
			prepare: (value: number) => ({ payload: value })
		}
	}
});
