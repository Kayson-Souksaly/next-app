// app/posts/loading.tsx
export default function LoadingPosts() {
  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col">
      <h1 className="animate-pulse font-bold text-5xl p-4">
        Loading Posts
        <span className="loading loading-dots loading-xl"></span>
      </h1>
      <p className="text-xl">Fetching latest posts</p>
    </div>
  );
}
