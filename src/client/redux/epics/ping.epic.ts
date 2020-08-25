import { ActionTypes } from "@/client/redux/action-types";
import { actions } from "@/client/redux/actions";
import ms from "ms";
import { Epic } from "redux-observable";
import { delay, filter, mapTo } from "rxjs/operators";

export const pingEpic: Epic = (action$) => {
	return action$.pipe(
		filter((action) => action.type === ActionTypes.PING),
		delay(ms("1s")),
		mapTo(actions.Ping.doPong())
	);
};
