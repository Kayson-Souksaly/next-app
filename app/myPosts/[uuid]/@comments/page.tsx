// app/posts/[id]/comments/page.tsx

import { prisma } from "@/lib/prisma";
import Image from "next/image";

export const revalidate = 60;

const page = async ({ params }: { params: Promise<{ uuid: string }> }) => {
  const { uuid } = await params;
  const comments = await prisma.comments.findMany({
    where: { postUuid: uuid },
  });

  return (
    <>
      <main className="p-6">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center text-2xl">No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.uuid} className="border my-4 p-4">
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
                <h1 className="text-xl capitalize font-bold">{comment.user}</h1>
              </div>

              <p>{comment.content}</p>

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
