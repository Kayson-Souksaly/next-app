import Image from "next/image";
import { Comments } from "../../../types/types";
import { useRouter } from "next/router";

const getComments = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}/comments`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  const data = await res.json();
  const comments: Comments[] = data.comments;
  return comments;
};

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const comments = await getComments(id);

  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      <main className="p-6">
        <h1 className="text-2xl font-bold text-center">Comments Section</h1>

        {comments.map((comment) => (
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
        ))}
      </main>
    </>
  );
};

export default page;
