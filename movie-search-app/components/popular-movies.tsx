"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MovieCard } from "@/components/movie-card"

// Mock data - in a real app, this would come from your API
const popularMovies = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Drama", "Crime"],
  },
  {
    id: "2",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Crime", "Drama"],
  },
  {
    id: "3",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: "4",
    title: "The Godfather Part II",
    year: 1974,
    rating: 9.0,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Crime", "Drama"],
  },
  {
    id: "5",
    title: "12 Angry Men",
    year: 1957,
    rating: 9.0,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Drama", "Crime"],
  },
  {
    id: "6",
    title: "Schindler's List",
    year: 1993,
    rating: 8.9,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Biography", "Drama", "History"],
  },
]

export function PopularMovies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const moviesPerPage = 3
  const totalPages = Math.ceil(popularMovies.length / moviesPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + moviesPerPage >= popularMovies.length ? 0 : prevIndex + moviesPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - moviesPerPage < 0 ? Math.max(0, popularMovies.length - moviesPerPage) : prevIndex - moviesPerPage,
    )
  }

  const currentMovies = popularMovies.slice(currentIndex, currentIndex + moviesPerPage)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            imageUrl={movie.imageUrl}
            genres={movie.genres}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-8 w-8 border-movoptix-300 text-movoptix-700 hover:bg-movoptix-50 hover:text-movoptix-800"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-8 w-8 border-movoptix-300 text-movoptix-700 hover:bg-movoptix-50 hover:text-movoptix-800"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

