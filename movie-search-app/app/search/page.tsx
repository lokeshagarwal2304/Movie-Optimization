import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovieCard } from "@/components/movie-card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, this would come from your API
const searchResults = {
  movies: [
    {
      id: "3",
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      imageUrl: "/placeholder.svg?height=450&width=300",
      genres: ["Action", "Crime", "Drama"],
    },
    {
      id: "7",
      title: "The Dark Knight Rises",
      year: 2012,
      rating: 8.4,
      imageUrl: "/placeholder.svg?height=450&width=300",
      genres: ["Action", "Adventure"],
    },
  ],
  people: [
    {
      id: "p1",
      name: "Christopher Nolan",
      role: "Director",
      imageUrl: "/placeholder.svg?height=200&width=200",
      knownFor: ["Inception", "The Dark Knight", "Interstellar"],
    },
    {
      id: "p2",
      name: "Christian Bale",
      role: "Actor",
      imageUrl: "/placeholder.svg?height=200&width=200",
      knownFor: ["The Dark Knight", "American Psycho", "The Prestige"],
    },
  ],
  genres: [
    { name: "Dark Comedy", count: 156 },
    { name: "Film Noir", count: 89 },
  ],
}

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Search</h1>
          <div className="flex w-full max-w-3xl gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search for movies, actors, directors..." className="pl-10" defaultValue="dark" />
            </div>
            <Button>Search</Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Results</TabsTrigger>
            <TabsTrigger value="movies">Movies</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
            <TabsTrigger value="genres">Genres</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Movies</h2>
                <Button variant="link">View all</Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {searchResults.movies.map((movie) => (
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

            <Separator />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">People</h2>
                <Button variant="link">View all</Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {searchResults.people.map((person) => (
                  <div key={person.id} className="flex items-center gap-4 p-4 rounded-lg border">
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <img
                        src={person.imageUrl || "/placeholder.svg"}
                        alt={person.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">Known for: {person.knownFor.join(", ")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Genres</h2>
                <Button variant="link">View all</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {searchResults.genres.map((genre) => (
                  <Badge key={genre.name} variant="secondary" className="text-sm py-2 px-3">
                    {genre.name} ({genre.count})
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="movies">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {searchResults.movies.map((movie) => (
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
          </TabsContent>

          <TabsContent value="people">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchResults.people.map((person) => (
                <div key={person.id} className="flex items-center gap-4 p-4 rounded-lg border">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img
                      src={person.imageUrl || "/placeholder.svg"}
                      alt={person.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">Known for: {person.knownFor.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="genres">
            <div className="flex flex-wrap gap-2">
              {searchResults.genres.map((genre) => (
                <Badge key={genre.name} variant="secondary" className="text-sm py-2 px-3">
                  {genre.name} ({genre.count})
                </Badge>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

