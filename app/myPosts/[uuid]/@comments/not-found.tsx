import RetryBtn from "@/app/components/RetryBtn";
import React from "react";

export default function notFound() {
  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col">
      <p className=" text-red-600 animate-pulse text-center font-bold text-6xl">
        Error 404!
      </p>
      <p className="text-xl">
        It Seems we can't find the comments you're looking for.
      </p>
      <RetryBtn />
    </div>
  );
}
