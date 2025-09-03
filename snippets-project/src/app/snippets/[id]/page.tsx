import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import { DeleteSnippet } from '@/actions'

export const revalidate = 60 // re-generate every 60 seconds (ISR)

const SnippetDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id)

  // ⚠️ Remove this artificial delay if you don’t want `loading`
  // await new Promise((r) => setTimeout(r, 2000))

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  })

  if (!snippet) return <h1>Snippet not found</h1>

  const DeleteEventHandler = DeleteSnippet.bind(null, snippet.id)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-4xl">{snippet.title}</h1>
        <div className="flex items-center gap-5">
          <Link href={`/snippets/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={DeleteEventHandler}>
            <Button variant="destructive">Delete</Button>
          </form>
        </div>
      </div>
      <pre className="p-4 bg-[#ffffff] border-2 rounded-sm">
        <code>{snippet.code}</code>
      </pre>
    </div>
  )
}

export default SnippetDetailPage

export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany()
  return snippets.map((snippet) => ({
    id: snippet.id.toString(),
  }))
}
