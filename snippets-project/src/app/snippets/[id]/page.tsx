import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import React from 'react';

const PageSnippet = async ({ params }: { params: { id: string } }) => {
  // Convert `id` from string → number
  const id = parseInt(params.id);

  // Fetch snippet
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return <div>Snippet not found</div>;
  }

  return (
    <div>
      <h1>{snippet.title}</h1>
      <Button>Edit</Button>
      <Button>Delete</Button>
      <pre>{snippet.code}</pre>
    </div>
  );
};

export default PageSnippet;
