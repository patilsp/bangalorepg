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
      title: "Properties",
      href: "/properties",
    },
    {
      title: "Add Properties",
      href: "/properties/add",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
    {
      title: "Help",
      href: "/help",
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
