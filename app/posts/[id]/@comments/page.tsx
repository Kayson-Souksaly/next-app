// app/posts/[id]/comments/page.tsx
import Image from "next/image";
import { Comments } from "@/types/types";

const getComments = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch comments");
  const data = await res.json();
  const comments: Comments[] = data.comments;
  return comments;
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const comments = await getComments(id);

  return (
    <>
      <main className="p-6">
        <h1 className="text-2xl font-bold text-center">Comments Section</h1>

        {comments.length === 0 ? (
          <p className="text-gray-500 text-center text-2xl">No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border my-4 p-4">
              <div className="flex gap-2">
                {/* Stand in for profile image */}
                <Image
                  src="/favicon.ico"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="rounded-full"
                  priority
                />
                <h1 className="text-xl capitalize font-bold">
                  {comment.user.username}
                </h1>
              </div>

              <p>{comment.body}</p>

              <p>
                <span className="font-bold">Likes:</span> {comment.likes}
              </p>
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default page;
