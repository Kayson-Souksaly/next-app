// app/posts/page.tsx
import Link from "next/link";
import React from "react";
import { Post } from "@/types/types";
import { notFound } from "next/navigation";

const PostsPage = async () => {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return notFound();
  const data = await res.json();
  const posts: Post[] = data.posts;

  return (
    <div className="pt-12">
      <h1 className="text-center text-3xl capitalize font-bold mb-4">Posts</h1>

      {posts.map((post) => (
        <div key={post.id} className="mb-2 border p-4">
          <Link href={`/posts/${post.id}`}>
            <span className="font-bold text-xl hover:underline hover:text-blue-500">
              {post.title}
            </span>
          </Link>

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
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
