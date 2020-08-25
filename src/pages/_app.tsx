import "@/client/styles/app.scss";
import { NextPage } from "next";
import { AppProps } from "next/app";
import React from "react";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
