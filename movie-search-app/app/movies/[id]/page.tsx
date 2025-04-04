import Link from "next/link"
import { Star, Clock, Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MovieCard } from "@/components/movie-card"

// Mock data - in a real app, this would come from your API
const movieDetails = {
  id: "1",
  title: "The Shawshank Redemption",
  year: 1994,
  rating: 9.3,
  duration: "2h 22m",
  genres: ["Drama", "Crime"],
  director: "Frank Darabont",
  cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  plot: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
  imageUrl: "/placeholder.svg?height=600&width=400",
}

const similarMovies = [
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

export default function MovieDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the movie details based on the ID
  const movie = movieDetails

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/movies">
        <Button variant="ghost" className="mb-6 pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Movies
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="rounded-lg overflow-hidden">
            <img src={movie.imageUrl || "/placeholder.svg"} alt={movie.title} className="w-full object-cover" />
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div>
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <Badge variant="secondary" className="flex items-center gap-1 text-lg px-3 py-1">
                <Star className="h-4 w-4 fill-current" />
                {movie.rating.toFixed(1)}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-3 mt-3">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {movie.year}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {movie.duration}
              </div>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <Badge key={genre} variant="outline">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-muted-foreground">{movie.plot}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium">Director</h3>
              <p className="text-muted-foreground">{movie.director}</p>
            </div>
            <div>
              <h3 className="font-medium">Cast</h3>
              <p className="text-muted-foreground">{movie.cast.join(", ")}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button>Add to Watchlist</Button>
            <Button variant="outline">Rate Movie</Button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Similar Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {similarMovies.map((movie) => (
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
      </div>
    </div>
  )
}

