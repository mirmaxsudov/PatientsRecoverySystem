import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartGrid,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"

const data = [
  { date: "2023-01-01", patients: 120, recoveries: 80 },
  { date: "2023-02-01", patients: 140, recoveries: 90 },
  { date: "2023-03-01", patients: 160, recoveries: 100 },
  { date: "2023-04-01", patients: 180, recoveries: 110 },
  { date: "2023-05-01", patients: 200, recoveries: 130 },
  { date: "2023-06-01", patients: 220, recoveries: 150 },
  { date: "2023-07-01", patients: 240, recoveries: 170 },
  { date: "2023-08-01", patients: 260, recoveries: 190 },
  { date: "2023-09-01", patients: 280, recoveries: 210 },
  { date: "2023-10-01", patients: 300, recoveries: 230 },
  { date: "2023-11-01", patients: 320, recoveries: 250 },
  { date: "2023-12-01", patients: 340, recoveries: 270 },
]

export function Overview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recovery Progress</CardTitle>
        <CardDescription>Patient intake vs. successful recoveries over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer data={data}>
            <ChartLegend className="mb-6">
              <ChartLegendItem name="Patients" color="hsl(var(--chart-1))" />
              <ChartLegendItem name="Recoveries" color="hsl(var(--chart-2))" />
            </ChartLegend>
            <ChartGrid />
            <ChartXAxis
              dataKey="date"
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", { month: "short" })
              }}
            />
            <ChartYAxis />
            <ChartLine dataKey="patients" stroke="hsl(var(--chart-1))" />
            <ChartLine dataKey="recoveries" stroke="hsl(var(--chart-2))" />
            <ChartArea dataKey="patients" fill="hsl(var(--chart-1) / 0.1)" />
            <ChartArea dataKey="recoveries" fill="hsl(var(--chart-2) / 0.1)" />
            <ChartTooltip content={<ChartTooltipContent />} />
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
