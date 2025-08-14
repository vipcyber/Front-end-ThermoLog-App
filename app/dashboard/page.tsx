import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartAreaYear } from "@/components/year-chart";

import { siloData } from "@/lib/silo_data";
import { SensorLines } from "@/lib/test_data";
import { cn } from "@/lib/utils";
import { BadgeCheck, ThermometerSnowflake, ThermometerSun } from "lucide-react";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">TERMOLOG App</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Fetching data...</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {siloData.rows.map((item) => (
            <div key={item.title} className="flex flex-row gap-2 rounded-xl">
              {item.silo.map((item) => (
                <Card
                  key={item.id}
                  className={cn(
                    "bg-gray-200 w-full max-w-sm",
                    item.temp <= 10 &&
                      "bg-gradient-to-b from-blue-200 to-var(--chart-2)",
                    item.temp >= 50 &&
                      "bg-gradient-to-b from-red-200 to-var(--chart-1)"
                  )}
                >
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {item.temp}
                      <sup>o</sup>C
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p>
                      {item.temp <= 10 ? (
                        <ThermometerSnowflake />
                      ) : item.temp >= 50 ? (
                        <ThermometerSun />
                      ) : (
                        <BadgeCheck />
                      )}
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ))}

          <div className="grid grid-cols-2 gap-2">
            <ChartAreaYear />
            <Card>
              <CardHeader>
                <CardTitle>Row data</CardTitle>
              </CardHeader>
              <CardContent>
                {SensorLines.map((item) => (
                  <Table key={item.rootDeviceId}>
                    <TableCaption>
                      SL {item.rootDeviceId} | {item.date} | {item.time} |
                      {item.requestGuid}
                    </TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">SensorId</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {item.values.map((item) => (
                        <TableRow key={item.sensorId}>
                          <TableCell className="font-medium">
                            {item.sensorId}
                          </TableCell>
                          <TableCell>OK</TableCell>
                          <TableCell className="text-right">
                            {item.value}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
