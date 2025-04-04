import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 bg-movoptix-950 text-white">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-white/70">&copy; {new Date().getFullYear()} MovOptix. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-sm text-white/70 hover:text-white">
            About
          </Link>
          <Link
            href="https://github.com/yourusername/movie-search-optimization"
            className="text-sm text-white/70 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

