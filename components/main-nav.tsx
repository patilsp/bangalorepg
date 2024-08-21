"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"

const MainNav = () => {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          Namma PG
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/properties"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/properties")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Properties
        </Link>
        <Link
          href="/properties/add"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/properties/add")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Add Property
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Contact Us
        </Link>
        <Link
          href="#help"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          Help
        </Link>
      </nav>
    </div>
  )
}
export default MainNav