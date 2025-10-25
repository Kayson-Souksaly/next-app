import React from "react";
import RetryBtn from "../components/RetryBtn";

export default function notFound() {
  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col">
      <p className=" text-red-600 animate-pulse text-center font-bold text-6xl">
        Error 404!
      </p>

      <p className="text-xl">It Seems we're having trouble loading posts.</p>
      <RetryBtn />
    </div>
  );
}
