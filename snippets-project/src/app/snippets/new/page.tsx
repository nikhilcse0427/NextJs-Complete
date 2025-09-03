"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormState } from "react-dom"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import * as actions from "@/actions"

const SnippetForm = () => {
  const [formStateData, formAction] = useFormState(actions.createSnippet, { message: "" })
  return (
    <>
      <p className='text-4xl font-bold text-center underline underline-offset-15'>Create new Snippets</p>
      <form className="h-screen p-10 flex flex-col gap-6" action={formAction}>
        {/* Title Field */}
        <div className="flex flex-col gap-2">
          <Label className='text-2xl' htmlFor="title">Title</Label>
          <Input id="title" type="text" placeholder="Enter title of snippet" name="title" />

        </div>

        {/* Code Field */}
        <div className="flex flex-col gap-2">
          <Label className='text-2xl' htmlFor="code">Code</Label>
          <Textarea id="code" placeholder="Enter code snippet" name="code" className="min-h-[150px]" />
        </div>
        {formStateData.message && <div className="border-2 border-solid font-bold text-red-600 text-xl h-8px">{formStateData.message}</div>}

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-15">
          Create
        </Button>
      </form>
    </>

  )
}

export default SnippetForm
