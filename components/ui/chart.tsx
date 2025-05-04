"use client"

import * as React from "react"
import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { cn } from "@/lib/utils"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    data: any[]
  }
>(({ className, children, data, ...props }, ref) => (
  <div ref={ref} className={cn("h-full w-full", className)} {...props}>
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>{children}</ComposedChart>
    </ResponsiveContainer>
  </div>
))
ChartContainer.displayName = "ChartContainer"

const ChartPieContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    data: any[]
  }
>(({ className, children, data, ...props }, ref) => (
  <div ref={ref} className={cn("h-full w-full", className)} {...props}>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${(index % 5) + 1}))`} />
          ))}
        </Pie>
        {children}
      </PieChart>
    </ResponsiveContainer>
  </div>
))
ChartPieContainer.displayName = "ChartPieContainer"

const ChartTooltip = React.forwardRef<React.ElementRef<typeof Tooltip>, React.ComponentPropsWithoutRef<typeof Tooltip>>(
  ({ className, ...props }, ref) => (
    <Tooltip ref={ref} content={<ChartTooltipContent />} cursor={{ fill: "hsl(var(--muted))" }} {...props} />
  ),
)
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-lg border bg-background p-2 shadow-md", className)} {...props} />
  ),
)
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = React.forwardRef<React.ElementRef<typeof Legend>, React.ComponentPropsWithoutRef<typeof Legend>>(
  ({ className, ...props }, ref) => (
    <Legend ref={ref} layout="horizontal" verticalAlign="top" align="center" {...props} />
  ),
)
ChartLegend.displayName = "ChartLegend"

const ChartLegendItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    name: string
    color: string
  }
>(({ className, name, color, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center gap-2", className)} {...props}>
    <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
    <span className="text-sm font-medium">{name}</span>
  </div>
))
ChartLegendItem.displayName = "ChartLegendItem"

const ChartGrid = React.forwardRef<
  React.ElementRef<typeof CartesianGrid>,
  React.ComponentPropsWithoutRef<typeof CartesianGrid>
>(({ className, ...props }, ref) => (
  <CartesianGrid ref={ref} strokeDasharray="3 3" stroke="hsl(var(--border))" {...props} />
))
ChartGrid.displayName = "ChartGrid"

const ChartLine = React.forwardRef<React.ElementRef<typeof Line>, React.ComponentPropsWithoutRef<typeof Line>>(
  ({ className, ...props }, ref) => (
    <Line
      ref={ref}
      type="monotone"
      strokeWidth={2}
      activeDot={{ r: 6, style: { fill: "hsl(var(--primary))" } }}
      {...props}
    />
  ),
)
ChartLine.displayName = "ChartLine"

const ChartBar = React.forwardRef<React.ElementRef<typeof Bar>, React.ComponentPropsWithoutRef<typeof Bar>>(
  ({ className, ...props }, ref) => <Bar ref={ref} {...props} />,
)
ChartBar.displayName = "ChartBar"

const ChartArea = React.forwardRef<React.ElementRef<typeof Area>, React.ComponentPropsWithoutRef<typeof Area>>(
  ({ className, ...props }, ref) => <Area ref={ref} type="monotone" strokeWidth={2} {...props} />,
)
ChartArea.displayName = "ChartArea"

const ChartScatter = React.forwardRef<React.ElementRef<typeof Scatter>, React.ComponentPropsWithoutRef<typeof Scatter>>(
  ({ className, ...props }, ref) => <Scatter ref={ref} {...props} />,
)
ChartScatter.displayName = "ChartScatter"

const ChartXAxis = React.forwardRef<React.ElementRef<typeof XAxis>, React.ComponentPropsWithoutRef<typeof XAxis>>(
  ({ className, ...props }, ref) => (
    <XAxis
      ref={ref}
      stroke="hsl(var(--border))"
      tickLine={false}
      axisLine={false}
      tick={{ fill: "hsl(var(--foreground))" }}
      {...props}
    />
  ),
)
ChartXAxis.displayName = "ChartXAxis"

const ChartYAxis = React.forwardRef<React.ElementRef<typeof YAxis>, React.ComponentPropsWithoutRef<typeof YAxis>>(
  ({ className, ...props }, ref) => (
    <YAxis
      ref={ref}
      stroke="hsl(var(--border))"
      tickLine={false}
      axisLine={false}
      tick={{ fill: "hsl(var(--foreground))" }}
      {...props}
    />
  ),
)
ChartYAxis.displayName = "ChartYAxis"

export {
  ChartContainer,
  ChartPieContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartGrid,
  ChartLine,
  ChartBar,
  ChartArea,
  ChartScatter,
  ChartXAxis,
  ChartYAxis,
}
