// app/posts/[id]/page.tsx

import BackBtn from "@/app/components/BackBtn";
import { Post } from "@/types/types";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

const getPost = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return notFound();
  if (!res.ok) throw new Error("Failed to fetch post");
  return (await res.json()) as Post;
};

const PostPage = async ({
  params,
  comments,
}: {
  params: Promise<{ id: string }>;
  comments: ReactNode;
}) => {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <>
      <main className="p-6">
        <section className=" mb-5">
          <BackBtn />
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <div className="grid grid-cols-2 gap-4 max-w-[200px]">
            <p>
              <span className="font-bold">likes:</span> {post.reactions.likes}
            </p>
            <p>
              <span className="font-bold">dislikes:</span>{" "}
              {post.reactions.dislikes}
            </p>
          </div>

          <p>
            <span className="font-bold">Views:</span> {post.views}
          </p>

          <p>
            <span className="font-bold">Tags:</span> {post.tags.join(", ")}
          </p>
          <p className="mt-4 text-gray-700">{post.body}</p>
        </section>
      </main>
    </>
  );
};

export default PostPage;
