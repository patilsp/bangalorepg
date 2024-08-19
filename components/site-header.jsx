import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
// import { MobileNav } from "@/components/mobile-nav"
// import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"
import Navbar from '@/components/Navbar'
import logo from '@/assets/images/logo-white.png';


export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container-fluid flex h-14 items-center">
       
        {/* <MobileNav /> */}

        <div className="flex justify-between items-center gap-2 w-full">
           
             <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <Navbar />
           </div>

        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  )
}
