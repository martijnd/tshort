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
  const id = req.headers.id as string;
  const link = await prisma.link.findFirst({
    where: {
      shortUrl: id.toString(),
    }
  })

  if (link) {
    return res.status(200).json({url: link.longUrl});
  }
  res.status(300);
}
