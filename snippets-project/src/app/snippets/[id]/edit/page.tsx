import React from 'react'
import EditSnippet from '@/components/EditSnippet'
import { prisma } from '@/lib/prisma'

const EditPageSnippet = async ({params}:{params:Promise<{id:string}>}) => {
  const id = Number((await params).id)
  const snippet = await prisma.snippet.findUnique({
    where:{
      id,
    },
  })

  if(!snippet) return <h1>Snippet not found</h1>
  return (
    <div>
      <EditSnippet snippet={snippet}/>
    </div>
  )
}

export default EditPageSnippet
