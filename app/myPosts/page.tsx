import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const Page = async () => {
  const posts = await prisma.post.findMany();

  return (
    <div className="pt-12">
      <h1 className="text-center text-3xl capitalize font-bold mb-4">Posts</h1>

      {posts.map((post) => (
        <div key={post.uuid} className="mb-2 border p-4">
          <Link href={`/myPosts/${post.uuid}`}>
            <span className="font-bold text-xl hover:underline hover:text-blue-500">
              {post.title}
            </span>
          </Link>

          <p>
            <span className="font-bold">Created at:</span>{" "}
            {post.createdAt.toDateString()}
          </p>

          <p>
            <span className="font-bold">Last updated:</span>{" "}
            {post.updatedAt.toDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Page;
