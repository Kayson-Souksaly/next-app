// app/posts/[id]/page.tsx
import Link from "next/link";
import { Post } from "../../types/types";

const getPost = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return (await res.json()) as Post;
};

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <>
      <main className="p-6">
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
        <Link
          href={`/posts/${post.id}/comments`}
          className="btn btn-primary mt-5"
        >
          Comments
        </Link>
      </main>
    </>
  );
};

export default PostPage;
