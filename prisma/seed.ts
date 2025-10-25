// prisma/seed.ts
import { prisma } from "../lib/prisma";

async function main() {
  await prisma.post.createMany({
    data: [
      { title: "First Prisma Post", content: "Learning full-stack Next.js!" },
      { title: "Second Post", content: "Prisma + App Router is awesome!" },
    ],
  });
  console.log("✅ Database seeded");
}

main().finally(async () => {
  await prisma.$disconnect();
});
