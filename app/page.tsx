import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold tracking-tight text-gray-400">
        Welcome
      </h1>
      <h2 className="text-3xl tracking-tight text-gray-500">
        Let's get started, shall we?
      </h2>
      <Link href="/auth">
        <button className="bg-green-500 border-4 border-green-400 hover:border-green-800 hover:bg-transparent mt-5 rounded-lg py-2 px-4">Get Started</button>
      </Link>
    </main>
  );
}
