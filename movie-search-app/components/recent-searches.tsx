"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - in a real app, this would be stored in localStorage or a database
const initialSearches = ["Inception", "Christopher Nolan", "Sci-fi movies", "Best movies 2023", "Action thriller"]

export function RecentSearches() {
  const [searches, setSearches] = useState(initialSearches)

  const removeSearch = (index: number) => {
    setSearches(searches.filter((_, i) => i !== index))
  }

  const clearAllSearches = () => {
    setSearches([])
  }

  if (searches.length === 0) {
    return (
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
        <p className="text-muted-foreground text-sm">No recent searches</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border bg-white dark:bg-card text-card-foreground shadow-sm">
      <div className="flex items-center justify-between p-4 border-b bg-movoptix-50 dark:bg-movoptix-900/20">
        <h3 className="font-medium flex items-center gap-2 text-movoptix-800 dark:text-movoptix-200">
          <Clock className="h-4 w-4" />
          Recent Searches
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllSearches}
          className="h-8 text-xs text-movoptix-700 hover:text-movoptix-800 hover:bg-movoptix-100"
        >
          Clear All
        </Button>
      </div>
      <ul className="divide-y">
        {searches.map((search, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 hover:bg-movoptix-50/50 dark:hover:bg-movoptix-900/10"
          >
            <Link href={`/search?q=${encodeURIComponent(search)}`} className="text-sm flex-1 truncate">
              {search}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeSearch(index)}
              className="h-6 w-6 text-movoptix-600 hover:text-movoptix-700 hover:bg-movoptix-100"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

