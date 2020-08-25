import { createSlice } from "@reduxjs/toolkit";

export const pingSlice = createSlice({
	name: "ping",
	initialState: { isPinging: false },
	reducers: {
		ping: () => ({ isPinging: true }),
		pong: () => ({ isPinging: false })
	}
});
