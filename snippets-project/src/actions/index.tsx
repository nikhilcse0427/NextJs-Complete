'use server'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

// Update snippet
const SaveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  })
  revalidatePath(`/snippets/${id}`) // on demand cashing
  redirect(`/snippets/${id}`)
}

// Delete snippet
const DeleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: { id }
  })
  revalidatePath('/')
  redirect('/')
}

// Create snippet
async function createSnippet(prevState: { message: string }, formdata: FormData) {
  const title = formdata.get("title")
  const code = formdata.get("code")

  try {
    if (typeof title !== "string" || title.length < 4) {
      return { message: "Title is required and must be at least 4 characters" }
    }
    if (typeof code !== "string" || code.length < 4) {
      return { message: "Code is required and must be at least 4 characters" }
    }

    const snippet = await prisma.snippet.create({
      data: { title, code },
    })
    throw new Error("Oops somenthing went wrong")
    revalidatePath('/')

  } catch (error) {
    console.error("Error creating snippet:", error)
    return { message: "Something went wrong while creating snippet" }
  }
  redirect('/snippets')
}

export { DeleteSnippet, createSnippet, SaveSnippet }
