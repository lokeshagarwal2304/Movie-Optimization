"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

// Mock data - in a real app, this would come from your API
const data = [
  { rating: "1", count: 120 },
  { rating: "2", count: 240 },
  { rating: "3", count: 380 },
  { rating: "4", count: 560 },
  { rating: "5", count: 890 },
  { rating: "6", count: 1200 },
  { rating: "7", count: 1800 },
  { rating: "8", count: 1400 },
  { rating: "9", count: 780 },
  { rating: "10", count: 560 },
]

export function RatingDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="rating" tickLine={false} axisLine={false} stroke="#888888" fontSize={12} />
        <YAxis tickLine={false} axisLine={false} stroke="#888888" fontSize={12} tickFormatter={(value) => `${value}`} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip
                  title={`Rating: ${payload[0].payload.rating}`}
                  content={[
                    {
                      label: "Number of Movies",
                      value: payload[0].value,
                    },
                  ]}
                />
              )
            }
            return null
          }}
        />
        <Bar dataKey="count" fill="#BE123C" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

