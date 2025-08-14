import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Sample menu
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "All silos",
          url: "/dashboard",
          isActive: true,
        },
      ],
    },
    {
      title: "Silos row 1",
      url: "#",
      items: [
        {
          title: "silo 8.1",
          url: "#",
        },
        {
          title: "silo 8.2",
          url: "#",
        },
        {
          title: "silo 8.3",
          url: "#",
        },
        {
          title: "silo 10.1",
          url: "#",
        },
        {
          title: "silo 10.2",
          url: "#",
        },
        {
          title: "silo 10.3",
          url: "#",
        },
        {
          title: "silo 10.4",
          url: "#",
        },
      ],
    },
    {
      title: "Silos row 2",
      url: "#",
      items: [
        {
          title: "silo 8.4",
          url: "#",
        },
        {
          title: "silo 8.5",
          url: "#",
        },
        {
          title: "silo 8.6",
          url: "#",
        },
        {
          title: "silo 8.7",
          url: "#",
        },
        {
          title: "silo 10.5",
          url: "#",
        },
        {
          title: "silo 10.6",
          url: "#",
        },
        {
          title: "silo 10.7",
          url: "#",
        },
        {
          title: "silo 10.8",
          url: "#",
        },
      ],
    },
    {
      title: "History",
      url: "#",
      items: [
        {
          title: "Archive",
          url: "#",
        },
        {
          title: "Trends",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Auth",
          url: "#",
        },
        {
          title: "Roles",
          url: "#",
        },
        {
          title: "Users",
          url: "#",
        },
        {
          title: "Addresses",
          url: "#",
        },
        {
          title: "Network",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1>LOGO</h1>
      </SidebarHeader>
      <SidebarContent>
        {/* SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
