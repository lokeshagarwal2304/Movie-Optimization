"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

// Mock data - in a real app, this would come from your API
const data = [
  { name: "Drama", value: 2800 },
  { name: "Comedy", value: 1800 },
  { name: "Action", value: 1600 },
  { name: "Thriller", value: 1400 },
  { name: "Sci-Fi", value: 1200 },
  { name: "Horror", value: 1000 },
  { name: "Romance", value: 900 },
  { name: "Adventure", value: 850 },
  { name: "Fantasy", value: 700 },
  { name: "Other", value: 1500 },
]

const COLORS = [
  "#BE123C",
  "#E11D48",
  "#F43F5E",
  "#FB7185",
  "#FDA4AE",
  "#FFE2E5",
  "#881337",
  "#9F1239",
  "#500820",
  "#FFF1F2",
]

export function GenrePopularityChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={120} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip
                  title={payload[0].name}
                  content={[
                    {
                      label: "Number of Movies",
                      value: payload[0].value,
                    },
                    {
                      label: "Percentage",
                      value: `${((payload[0].value / data.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%`,
                    },
                  ]}
                />
              )
            }
            return null
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

