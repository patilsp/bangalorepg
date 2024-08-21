"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DialogProps } from "@radix-ui/react-alert-dialog";
import {
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export default function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        variant="outline"
        className={cn(
          "relative hover:bg-gray-200 rounded-lg"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
      
      <Search className="text-black hover:fill-black ml-1" size={20}/>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {docsConfig.mainNav
              .filter((navItem) => !navItem.external)
              .map((navItem) => (
                <CommandItem
                  className="p-2"
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <FileIcon className="mr-2 size-4" />
                  {navItem.title}
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            {/* Replace theme handling with your preferred method */}
            <CommandItem
              className="p-2"
              onSelect={() => alert("Switch to Light theme")}
            >
              <SunIcon className="mr-2 size-4" />
              Light
            </CommandItem>
            <CommandItem
              className="p-2"
              onSelect={() => alert("Switch to Dark theme")}
            >
              <MoonIcon className="mr-2 size-4" />
              Dark
            </CommandItem>
            <CommandItem
              className="p-2"
              onSelect={() => alert("Switch to System theme")}
            >
              <LaptopIcon className="mr-2 size-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
