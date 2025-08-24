import Link from "next/link"

const NavBar = () => {
  return (
    <header>
      <nav className="container h-14 text-2xl text-white absolute z-10 flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-extrabold">
          Home
        </Link>
        <div className="flex flex-row gap-6">
          <Link href="/performance" className="hover:text-blue-600">
            Performance
          </Link>
          <Link href="/reliability" className="hover:text-blue-600">
            Reliability
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
