"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Film, BarChart3, Search, Home, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Movies",
      href: "/movies",
      icon: Film,
    },
    {
      name: "Search",
      href: "/search",
      icon: Search,
    },
    {
      name: "Visualizations",
      href: "/visualizations",
      icon: BarChart3,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-movoptix-700 text-white">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Film className="h-7 w-7" />
            <span className="font-bold text-xl hidden sm:inline-block">MovOptix</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-2 lg:space-x-4 mx-6">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "text-white/80 hover:text-white hover:bg-movoptix-600",
                pathname === item.href && "text-white bg-movoptix-600",
              )}
            >
              <Link href={item.href} className="flex items-center gap-1">
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline-block">{item.name}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-movoptix-600">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

