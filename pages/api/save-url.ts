// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma';

type Data = {
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = JSON.parse(req.body).url as string;
  const link = await prisma.link.create({

    data: {
      longUrl: url.toString(),
      shortUrl: Math.floor(Math.random() * 1000000000).toString(),
    }
  })

  if (link) {
    return res.status(200).json({ url: link.shortUrl });
  }
  res.status(300);
}
