'use server'
import React from 'react'
import { prisma } from '@/lib/prisma'
import {redirect} from 'next/navigation'


const SaveSnippet = async (id:number, code:string) => {
  await prisma.snippet.update({
    where:{
      id,
    },
    data:{
      code,
    }
  })
  redirect(`/snippets/${id}`)
}

const DeleteSnippet = async (id:number) => {
  await prisma.snippet.delete({
    where:{
      id,
    }
  })
  redirect('/')
}

export {SaveSnippet, DeleteSnippet}

