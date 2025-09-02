'use client'
import { useState } from 'react';
import { Button } from './ui/button';
import MonacoEditor from '@monaco-editor/react';
import type { Snippet } from '@/generated/prisma';
import { SaveSnippet } from '@/actions' // Adjusted the path based on the assumed location of the 'actions' file

const EditSnippet = ({ snippet }: { snippet: Snippet }) => {

  const [code, setCode] = useState(snippet.code)
  const onChangeHandler = (value:string="")=>[
    setCode(value)
  ]

  const SaveSnippetAction = SaveSnippet.bind(null, snippet.id, code)
  return (
    <div className='flex flex-col gap-5'>
      <form action={SaveSnippetAction} className='flex flex-row justify-between'>
        <h1 className='font-bold text-2xl'>Your Code Editor</h1>
        <Button type="submit">Save</Button>
      </form>
      <MonacoEditor
        width="80wh"
        height="80vh"
        language="c++"
        theme="vs-dark"
        defaultValue={code}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default EditSnippet
