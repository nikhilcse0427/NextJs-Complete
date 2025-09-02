import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import { DeleteSnippet } from '@/actions'

const SnippetDetailPage = async ({params}:{params:Promise<{id:string}>}) => {
const id = Number((await params).id)
const snippet = await prisma.snippet.findUnique({
  where:{
    id,
  },
})
if(!snippet) return <h1>Snippet not found</h1>
const DeleteEventHandler = DeleteSnippet.bind(null, snippet.id)
  return (
    <>
    <div className="flex flex-col gap-8">
    <div className="flex items-center justify-between">
      <h1 className='font-bold text-4xl'>{snippet.title}</h1>
      <div className="flex items-center gap-5">
        <Link href={`/snippets/${snippet.id}/edit`}>
        <Button>Edit</Button>
        </Link>
        <form action={DeleteEventHandler}>
        <Button variant={'destructive'}>Delete</Button>
        </form>
      </div>
    </div>
    <pre className='p-4 bg-[#ffffff] border-2 rounded-sm'>
      <h1>{snippet.code}</h1>
    </pre>
    </div>
    </>
  )
}

export default SnippetDetailPage
