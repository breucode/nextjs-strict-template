// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

export default function handler(
  // @ts-expect-error
  // eslint-disable-next-line unicorn/prevent-abbreviations
  req: NextApiRequest,
  // eslint-disable-next-line unicorn/prevent-abbreviations
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" })
}
