import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, secret } = req.body;

  if (req.method !== "POST") {
    return res.status(403).json({ message: "Method not allowed" });
  }

  if (secret !== process.env.AUTH0_SECRET) {
    return res.status(403).json({ message: "You must provide the secret 🤫" });
  }

  if (email) {
    await prisma.creator.create({
      data: {
        email,
        // TODO: get the dynamic request body and replace the hardcoded data below with it
        name: "PriorAttire",
        profilePicture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/11/348df2c9ac273b642918f634ac2d2086.jpg@300w_0e.jpg",
        projectSlug: "priorattire",
        profileWork:
          "creating YouTube videos on historical fashions, dressmaking etc.",
        publicSupportersCount: 366,
        showSupporterCount: true,
        role: "VIDEO_CREATOR",
      },
    });

    return res.status(200).json({
      messsage: `Creator with email: ${email} has been successfully created`,
    });
  }
};

export default handler;
