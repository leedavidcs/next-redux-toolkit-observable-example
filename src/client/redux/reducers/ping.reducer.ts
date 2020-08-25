import { ActionTypes } from "@/client/redux/action-types";
import { createReducer } from "@reduxjs/toolkit";

export interface IPingReducer {
	isPinging: boolean;
}

export const pingReducer = createReducer<IPingReducer>(
	{ isPinging: false },
	{
		[ActionTypes.PING.PING]: () => ({ isPinging: true }),
		[ActionTypes.PING.PONG]: () => ({ isPinging: false })
	}
);
