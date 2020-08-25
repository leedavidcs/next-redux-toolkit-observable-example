import { actions, useSelector } from "@/client/redux";
import { NextPage } from "next";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const Page: NextPage = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	const onIncrement = useCallback(() => dispatch(actions.Count.increment()), [dispatch]);
	const onDecrement = useCallback(() => dispatch(actions.Count.decrement()), [dispatch]);

	return (
		<div>
			<div>{count}</div>
			<button onClick={onIncrement}>Increment</button>
			<button onClick={onDecrement}>Decrement</button>
		</div>
	);
};

export default Page;
