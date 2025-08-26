import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-800">Snippets</h1>
        <Link href="/snippets/new">
          <Button className="rounded-xl px-5">+ New</Button>
        </Link>
      </div>

      {/* Snippet List */}
      <div className="grid gap-6">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="p-5 rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {snippet.title}
              </h2>
              <Link href={`/snippets/${snippet.id}`}>
                <Button size="sm" className="rounded-lg">View</Button>
              </Link>
            </div>
            
          </div>
        ))}

        {/* If no snippets */}
        {snippets.length === 0 && (
          <p className="text-gray-500 text-center">No snippets yet. Add one!</p>
        )}
      </div>
    </div>
  );
}
