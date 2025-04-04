import Link from "next/link"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MovieCardProps {
  id: string
  title: string
  year: number
  rating: number
  imageUrl: string
  genres?: string[]
}

export function MovieCard({ id, title, year, rating, imageUrl, genres }: MovieCardProps) {
  return (
    <Link href={`/movies/${id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md group">
        <div className="aspect-[2/3] relative overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge className="bg-movoptix-600 hover:bg-movoptix-700 text-white flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" />
              {rating.toFixed(1)}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center">
            <div className="p-3 text-white text-center w-full">
              <span className="text-sm font-medium">View Details</span>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{year}</p>
        </CardContent>
        {genres && genres.length > 0 && (
          <CardFooter className="p-4 pt-0 flex flex-wrap gap-1">
            {genres.slice(0, 2).map((genre) => (
              <Badge
                key={genre}
                variant="outline"
                className="text-xs bg-movoptix-50 text-movoptix-700 border-movoptix-200 hover:bg-movoptix-100"
              >
                {genre}
              </Badge>
            ))}
            {genres.length > 2 && (
              <Badge
                variant="outline"
                className="text-xs bg-movoptix-50 text-movoptix-700 border-movoptix-200 hover:bg-movoptix-100"
              >
                +{genres.length - 2}
              </Badge>
            )}
          </CardFooter>
        )}
      </Card>
    </Link>
  )
}

