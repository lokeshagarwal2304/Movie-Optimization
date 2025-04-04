import { NextResponse } from "next/server"

// This would connect to your Python backend in a real implementation
export async function GET(request: Request) {
  // Mock data - in a real app, this would come from your Python backend
  const movies = [
    {
      id: "1",
      title: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      genres: ["Drama", "Crime"],
    },
    {
      id: "2",
      title: "The Godfather",
      year: 1972,
      rating: 9.2,
      genres: ["Crime", "Drama"],
    },
    {
      id: "3",
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      genres: ["Action", "Crime", "Drama"],
    },
    // More movies would be here
  ]

  // In a real app, you would parse query parameters and filter accordingly
  const url = new URL(request.url)
  const query = url.searchParams.get("q") || ""
  const genre = url.searchParams.get("genre") || ""
  const year = url.searchParams.get("year") || ""

  let filteredMovies = movies

  if (query) {
    filteredMovies = filteredMovies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
  }

  if (genre) {
    filteredMovies = filteredMovies.filter((movie) => movie.genres.some((g) => g.toLowerCase() === genre.toLowerCase()))
  }

  if (year) {
    filteredMovies = filteredMovies.filter((movie) => movie.year === Number.parseInt(year))
  }

  return NextResponse.json({ movies: filteredMovies })
}

