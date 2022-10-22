import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.creator.create({
    data: {
      name: "PriorAttire",
      email: "priorattire@gmail.com",
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
