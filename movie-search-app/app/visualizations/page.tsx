import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RatingDistributionChart } from "@/components/charts/rating-distribution-chart"
import { GenrePopularityChart } from "@/components/charts/genre-popularity-chart"
import { YearlyRatingsChart } from "@/components/charts/yearly-ratings-chart"

export default function VisualizationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Data Visualizations</h1>
          <p className="text-muted-foreground">
            Explore insights from our movie database through interactive visualizations
          </p>
        </div>

        <Tabs defaultValue="ratings" className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="ratings">Ratings</TabsTrigger>
              <TabsTrigger value="genres">Genres</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Movies</SelectItem>
                  <SelectItem value="popular">Popular Movies</SelectItem>
                  <SelectItem value="recent">Recent Movies</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export Data</Button>
            </div>
          </div>

          <TabsContent value="ratings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rating Distribution</CardTitle>
                <CardDescription>Distribution of movie ratings across our database</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <RatingDistributionChart />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Rated Movies</CardTitle>
                  <CardDescription>Movies with the highest average ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Top rated movies chart"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rating Comparison by Genre</CardTitle>
                  <CardDescription>Average ratings across different movie genres</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Rating by genre chart"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="genres" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Genre Popularity</CardTitle>
                <CardDescription>Distribution of movies across different genres</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <GenrePopularityChart />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Genre Trends Over Time</CardTitle>
                  <CardDescription>How genre popularity has changed over decades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Genre trends chart"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Genre Combinations</CardTitle>
                  <CardDescription>Most common genre combinations in movies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Genre combinations chart"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Yearly Ratings Trend</CardTitle>
                <CardDescription>How movie ratings have changed over the years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <YearlyRatingsChart />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Movie Production by Year</CardTitle>
                  <CardDescription>Number of movies produced each year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Movie production chart"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Runtime Trends</CardTitle>
                  <CardDescription>How movie durations have changed over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Runtime trends chart"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

