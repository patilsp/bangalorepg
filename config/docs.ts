import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "dashboard",
    },
    {
      title: "Products",
      href: "products",
    },
    {
      title: "Customers",
      href: "customers",
    },
    {
      title: "Users",
      href: "users",
    },
    
    
  ],
  sidebarNav: [
    {
      title: "General",
      items: [
        {
          title: "Help",
          href: "help",
          items: [],
        },
        {
          title: "Support",
          href: "support",
          items: [],
        },
        
       
      ],
    },
   
  
  ],
}
