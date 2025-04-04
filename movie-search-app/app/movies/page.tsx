import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MovieCard } from "@/components/movie-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data - in a real app, this would come from your API
const movies = [
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
  {
    id: "7",
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: 8.9,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Adventure", "Drama", "Fantasy"],
  },
  {
    id: "8",
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Crime", "Drama"],
  },
  {
    id: "9",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.8,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Adventure", "Drama", "Fantasy"],
  },
  {
    id: "10",
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    rating: 8.8,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Western"],
  },
  {
    id: "11",
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Drama", "Romance"],
  },
  {
    id: "12",
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    imageUrl: "/placeholder.svg?height=450&width=300",
    genres: ["Drama"],
  },
]

export default function MoviesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="py-6 px-6 rounded-lg bg-gradient-to-r from-movoptix-700 to-movoptix-900 text-white">
          <h1 className="text-3xl font-bold mb-4">Explore Movies</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for movies..."
                className="pl-10 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="rating">
                <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating (High to Low)</SelectItem>
                  <SelectItem value="year-desc">Year (Newest)</SelectItem>
                  <SelectItem value="year-asc">Year (Oldest)</SelectItem>
                  <SelectItem value="title">Title (A-Z)</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-movoptix-500 hover:bg-movoptix-600 text-white h-12">Search</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
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

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-movoptix-300 text-movoptix-700 hover:bg-movoptix-50 hover:text-movoptix-800"
          >
            Load More
          </Button>
        </div>
      </div>
    </div>
  )
}

