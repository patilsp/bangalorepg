"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent"
        >
          <AlignJustify className="bg-transparent hover:bg-gray-200 rounded border shadow p-1" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col p-0 bg-white transform transition-transform duration-500 ease-in-out"
      >
        <ScrollArea className="flex-1 my-4 h-[calc(100vh-12rem)] pl-6">
          <div className="flex flex-col space-y-4">
            <Link href="/" onClick={handleLinkClick} className={cn(
                  "transition-colors hover:text-blue-600 hover:underline",
                  pathname === "/" ? "text-black" : "text-gray-600"
                )}
              >
                Home
            </Link>
            <Link href="/properties" onClick={handleLinkClick} className={cn(
                  "transition-colors hover:text-blue-600 hover:underline",
                  pathname === "/properties" ? "text-black" : "text-gray-600"
                )}
              >
                Properties
            </Link>
            <Link href="/add-property" onClick={handleLinkClick} className={cn(
                  "transition-colors hover:text-blue-600 hover:underline",
                  pathname === "/add-property" ? "text-black" : "text-gray-600"
                )}
              >
                Add Property
            </Link>
            <Link href="/contact-us" onClick={handleLinkClick} className={cn(
                  "transition-colors hover:text-blue-600 hover:underline",
                  pathname === "/contact-us" ? "text-black" : "text-gray-600"
                )}
              >
                Contact Us
            </Link>
            <Link href="#help" onClick={handleLinkClick} className={cn(
                  "transition-colors hover:text-blue-600 hover:underline",
                  pathname === "#help" ? "text-black" : "text-gray-600"
                )}
              >
                Help
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
