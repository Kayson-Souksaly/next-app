import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main className="text-center p-4">
      <h1 className="font-bold text-4xl">Hello World!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
