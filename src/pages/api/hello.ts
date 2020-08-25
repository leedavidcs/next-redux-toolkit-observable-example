import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.statusCode = StatusCodes.OK;
	res.json({ name: "John Doe" });
};
