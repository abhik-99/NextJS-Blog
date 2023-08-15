import Link from "next/link";
import React from "react";
import StyledButton from "./components/ui/StyledButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold tracking-tight text-gray-400">
        Welcome
      </h1>
      <h2 className="text-3xl tracking-tight text-gray-500">
        Let's get started, shall we?
      </h2>
      <Link href="/auth" className="mt-4">
        <StyledButton color="green">Get Started</StyledButton>
      </Link>
    </main>
  );
}
