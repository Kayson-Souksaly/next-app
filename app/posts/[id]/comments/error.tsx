// app/posts/[id]/error.tsx
"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col">
      <p className=" text-red-600 animate-pulse text-center font-bold text-6xl">
        Error 404!
      </p>
      <p className=" text-red-400 text-2xl">{error.message}</p>
      <p className="text-xl">
        It Seems we can't find the comments you're looking for.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
