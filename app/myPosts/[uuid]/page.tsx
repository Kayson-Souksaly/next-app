// app/posts/[id]/page.tsx

import BackBtn from "@/app/components/BackBtn";
import { formatDate } from "@/lib/formatDate";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

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

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({ select: { uuid: true } });
  return posts.map((p) => ({ uuid: p.uuid }));
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
            {formatDate(post.createdAt)}
          </p>

          <p>
            <span className="font-bold">Update at:</span>{" "}
            {formatDate(post.updatedAt)}
          </p>
          <p className="mt-4 text-gray-700">{post.content}</p>
        </section>
      </main>
    </>
  );
};

export default PostPage;
