"use client"

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

// Mock data - in a real app, this would come from your API
const data = [
  { year: "1950", avgRating: 7.2 },
  { year: "1960", avgRating: 7.4 },
  { year: "1970", avgRating: 7.6 },
  { year: "1980", avgRating: 7.1 },
  { year: "1990", avgRating: 7.3 },
  { year: "2000", avgRating: 7.0 },
  { year: "2010", avgRating: 6.8 },
  { year: "2020", avgRating: 6.5 },
]

export function YearlyRatingsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="year" tickLine={false} axisLine={false} stroke="#888888" fontSize={12} />
        <YAxis tickLine={false} axisLine={false} stroke="#888888" fontSize={12} domain={[6, 8]} tickCount={5} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip
                  title={`Year: ${payload[0].payload.year}`}
                  content={[
                    {
                      label: "Average Rating",
                      value: payload[0].value.toFixed(1),
                    },
                  ]}
                />
              )
            }
            return null
          }}
        />
        <Line
          type="monotone"
          dataKey="avgRating"
          stroke="#BE123C"
          strokeWidth={2}
          dot={{ r: 4, fill: "#BE123C" }}
          activeDot={{ r: 6, fill: "#BE123C" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

