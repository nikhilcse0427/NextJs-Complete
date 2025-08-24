
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div>
        <p className='font-bold text-4xl'>Home</p>
        <div className="flex justify-between">
          <h1>Snippets</h1>
          <Button>New</Button>
        </div>
      </div>
    </>
  );
}
