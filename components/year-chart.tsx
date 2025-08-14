"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Thermo chart";

const chartData = [
  { month: "January", min: 1, max: 5 },
  { month: "February", min: 3, max: 7 },
  { month: "March", min: 5, max: 12 },
  { month: "April", min: 9, max: 17 },
  { month: "May", min: 10, max: 20 },
  { month: "June", min: 12, max: 34 },
  { month: "July", min: 20, max: 46 },
  { month: "August", min: 25, max: 39 },
  { month: "September", min: 17, max: 28 },
  { month: "October", min: 11, max: 22 },
  { month: "November", min: 3, max: 15 },
  { month: "December", min: 2, max: 14 },
];

const chartConfig = {
  min: {
    label: "Min",
    color: "var(--chart-1)",
  },
  max: {
    label: "Max",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartAreaYear() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Year</CardTitle>
        <CardDescription>
          Showing thermo change for the last 12 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 10,
              right: 10,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillMin" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-min)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-min)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMax" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-max)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-max)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="max"
              type="natural"
              fill="url(#fillMax)"
              fillOpacity={0.4}
              stroke="var(--color-max)"
              stackId="a"
            />
            <Area
              dataKey="min"
              type="natural"
              fill="url(#fillMin)"
              fillOpacity={0.4}
              stroke="var(--color-min)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Diff ___ % <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - December
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
