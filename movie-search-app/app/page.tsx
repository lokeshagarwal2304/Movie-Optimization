import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MovieCard } from "@/components/movie-card"
import { PopularMovies } from "@/components/popular-movies"
import { RecentSearches } from "@/components/recent-searches"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="py-12 bg-gradient-to-r from-movoptix-700 to-movoptix-900 rounded-lg text-white text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MovOptix</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Find your perfect movie match with intelligent recommendations
          </p>

          <div className="flex w-full max-w-3xl mx-auto gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for movies..."
                className="pl-10 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <Button size="lg" className="bg-movoptix-500 hover:bg-movoptix-600 text-white px-6">
              Search
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Popular Movies</h2>
                <Link href="/movies">
                  <Button variant="link" className="text-movoptix-700 hover:text-movoptix-800">
                    View all
                  </Button>
                </Link>
              </div>
              <PopularMovies />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Recommended For You</h2>
                <Link href="/recommendations">
                  <Button variant="link" className="text-movoptix-700 hover:text-movoptix-800">
                    View all
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <MovieCard
                  id="1"
                  title="The Shawshank Redemption"
                  year={1994}
                  rating={9.3}
                  imageUrl="/placeholder.svg?height=450&width=300"
                />
                <MovieCard
                  id="2"
                  title="The Godfather"
                  year={1972}
                  rating={9.2}
                  imageUrl="/placeholder.svg?height=450&width=300"
                />
                <MovieCard
                  id="3"
                  title="The Dark Knight"
                  year={2008}
                  rating={9.0}
                  imageUrl="/placeholder.svg?height=450&width=300"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-movoptix-100 to-movoptix-200 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-movoptix-950">Why MovOptix?</h3>
              <ul className="space-y-2 text-movoptix-900">
                <li className="flex items-start">
                  <span className="bg-movoptix-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    ✓
                  </span>
                  <span>Advanced ML-powered recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-movoptix-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    ✓
                  </span>
                  <span>Personalized movie matching</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-movoptix-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    ✓
                  </span>
                  <span>Data-driven visualization tools</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-movoptix-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    ✓
                  </span>
                  <span>Smart search optimization</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Recent Searches</h2>
              <RecentSearches />
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Data Insights</h2>
              <div className="rounded-lg border hover:shadow-md transition-shadow bg-white dark:bg-card text-card-foreground p-4">
                <h3 className="font-medium mb-2">Rating Distribution</h3>
                <div className="aspect-[4/3] bg-muted rounded-md flex items-center justify-center">
                  <Link href="/visualizations">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Rating distribution chart"
                      className="rounded-md hover:opacity-80 transition-opacity"
                    />
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/visualizations">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-movoptix-300 text-movoptix-700 hover:bg-movoptix-50 hover:text-movoptix-800"
                    >
                      View All Visualizations
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

