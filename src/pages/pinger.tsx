import { actions, useSelector } from "@/client/redux";
import { NextPage } from "next";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const Page: NextPage = () => {
	const { isPinging } = useSelector((state) => state.ping);
	const dispatch = useDispatch();

	const onPing = useCallback(() => dispatch(actions.Ping.ping()), [dispatch]);

	return <button onClick={onPing}>{isPinging ? "Ping" : "Pong"}</button>;
};

export default Page;
