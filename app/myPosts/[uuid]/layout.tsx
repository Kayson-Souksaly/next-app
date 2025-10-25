// app/post/[id]/layout.tsx

import { ReactNode } from "react";

export default function PostLayout({
  children,
  comments,
}: {
  children: ReactNode;
  comments: ReactNode;
}) {
  return (
    <main className="p-6 space-y-8">
      {children}

      <hr className="my-6" />
      <section>
        <h1 className="text-2xl font-bold text-center">Comments Section</h1>
        {comments}
      </section>
    </main>
  );
}
