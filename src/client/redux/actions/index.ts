import { countSlice, pingSlice } from "@/client/redux/slices";

export const actions = {
	Count: countSlice.actions,
	Ping: pingSlice.actions
};
