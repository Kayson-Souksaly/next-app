// app/posts/[id]/page.tsx

import BackBtn from "@/app/components/BackBtn";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const post = await prisma.post.findFirstOrThrow({
    where: { uuid: uuid },
  });
  return { title: `${post.title} • My Posts` };
}

const PostPage = async ({ params }: { params: Promise<{ uuid: string }> }) => {
  const { uuid } = await params;

  const post = await prisma.post
    .findUniqueOrThrow({ where: { uuid: uuid } })
    .catch(() => {
      return notFound();
    });

  return (
    <>
      <main className="p-6">
        <section className=" mb-5">
          <BackBtn />
          <h1 className="text-2xl font-bold">{post.title}</h1>

          <p>
            <span className="font-bold">Created at:</span>{" "}
            {post.createdAt.toLocaleDateString()}
          </p>

          <p>
            <span className="font-bold">Update at:</span>{" "}
            {post.updatedAt.toLocaleDateString()}
          </p>
          <p className="mt-4 text-gray-700">{post.content}</p>
        </section>
      </main>
    </>
  );
};

export default PostPage;
