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
        <h2 className="text-2xl font-semibold mb-3">Comments</h2>
        {comments}
      </section>
    </main>
  );
}
