import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { columns, Events } from "@/lib/data-table-cols";
import { DataTable } from "@/lib/data-table";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

async function getData(): Promise<Events[]> {
  // Fetch data here...
  return [
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:04.723",
      event: "Begin polling",
      deviceType: "Net controller",
      deviceId: 8,
      parentType: "",
      parentId: 0,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:04.723",
      event: "Change status",
      deviceType: "Net controller",
      deviceId: 8,
      parentType: "RS-485 net",
      parentId: 0,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:04.727",
      event: "Begin polling",
      deviceType: "Sensor line",
      deviceId: 84,
      parentType: "",
      parentId: 0,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:04.727",
      event: "Change status",
      deviceType: "Sensor line",
      deviceId: 84,
      parentType: "Net controller",
      parentId: 0,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:04.74",
      event: "Create request",
      deviceType: "RS-485 port",
      deviceId: 0,
      parentType: "",
      parentId: 0,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:37.483",
      event: "Receive response",
      deviceType: "RS-485 port",
      deviceId: 0,
      parentType: "",
      parentId: 0,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:37.487",
      event: "Change status",
      deviceType: "Net controller",
      deviceId: 8,
      parentType: "RS-485 net",
      parentId: 0,
      isConnected: true,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:37.487",
      event: "Has connected",
      deviceType: "Net controller",
      deviceId: 8,
      parentType: "RS-485 net",
      parentId: 0,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:37.487",
      event: "Change status",
      deviceType: "Sensor line",
      deviceId: 84,
      parentType: "Net controller",
      parentId: 8,
      isConnected: true,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:37.487",
      event: "Has connected",
      deviceType: "Sensor line",
      deviceId: 85,
      parentType: "Net controller",
      parentId: 8,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:37.487",
      event: "Has connected",
      deviceType: "Sensor line",
      deviceId: 85,
      parentType: "Net controller",
      parentId: 8,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
    {
      guid: "b091d1c7-af34-4850-a3c0-d2296b529d7c",
      dt: "2025-08-08T09:48:37.487",
      event: "Has connected",
      deviceType: "Sensor line",
      deviceId: 85,
      parentType: "Net controller",
      parentId: 8,
      isConnected: false,
      wasConnecter: false,
      message: "",
    },
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="flex flex-1 flex-col gap-4 p-4">
          {siloData.rows.map((item) => (
            <div key={item.title} className="flex flex-row gap-2 rounded-xl">
              {item.silo.map((item) => (
                <Card
                  key={item.id}
                  className={cn(
                    "bg-secondary w-full max-w-sm",
                    item.temp <= 10 &&
                      "bg-gradient-to-b from-chart-2 to-var(--chart-2)",
                    item.temp >= 50 &&
                      "bg-gradient-to-b from-chart-1 to-var(--chart-1)"
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

          <div className="flex">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Events data table</CardTitle>
              </CardHeader>
              <CardContent>
                <DataTable columns={columns} data={data} />
              </CardContent>
            </Card>
          </div>

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
