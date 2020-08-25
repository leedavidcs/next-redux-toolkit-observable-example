import { combineEpics } from "redux-observable";
import { pingEpic } from "./ping.epic";

export default combineEpics(pingEpic);
