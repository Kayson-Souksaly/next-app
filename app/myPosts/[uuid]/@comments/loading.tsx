// app/posts/[id]/comments/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col">
      <h1 className="animate-pulse font-bold text-6xl p-4">
        Loading Comments
        <span className="loading loading-dots loading-xl"></span>
      </h1>
      <p className="text-2xl">Fetching latest Comments</p>
    </div>
  );
}
