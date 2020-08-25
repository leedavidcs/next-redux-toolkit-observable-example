import { ActionTypes } from "@/client/redux/action-types";
import { createAction } from "@reduxjs/toolkit";

export const doPing = createAction(ActionTypes.PING.PING);
export const doPong = createAction(ActionTypes.PING.PONG);
