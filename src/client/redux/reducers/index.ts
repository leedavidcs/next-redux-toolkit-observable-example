import { ReducersMapObject } from "redux";
import { IPingReducer, pingReducer } from "./ping.reducer";

export interface IReducerState {
	ping: IPingReducer;
}

export const reducer: ReducersMapObject<IReducerState> = {
	ping: pingReducer
};
