import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5">
      <Link href="/">
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-full"
          priority
        />
      </Link>

      <ul className="flex items-center gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/myPosts">My Posts</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
