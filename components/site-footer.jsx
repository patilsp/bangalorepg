"use client";

import Link from "next/link";
import { Home, Search, Heart, Map, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="fixed bottom-0 z-50 w-[98%] ml-1 rounded-full bg-black mb-1 py-2 dark:border-gray-600 dark:bg-black dark:text-white md:hidden">
      <div className="mx-auto grid h-full max-w-lg grid-cols-5">
        
        <motion.a
          href="/"
          className="group inline-flex flex-col items-center justify-center p-2 dark:hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}  // Scale up on hover
          whileTap={{ scale: 0.9 }}  // Scale down on click
        >
          <Home className="mb-1 size-6 text-gray-50 dark:group-hover:text-blue-500" />
          <span className="sr-only">Home</span>
        </motion.a>

        <motion.a
          href="/"
          className="group inline-flex flex-col items-center justify-center p-2 dark:hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Search className="mb-1 size-6 text-gray-50 dark:group-hover:text-orange-500" />
          <span className="sr-only">Search</span>
        </motion.a>

        <motion.a
          href="/properties"
          className="group inline-flex flex-col items-center justify-center p-2 dark:hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className="mb-1 size-6 text-gray-50 dark:group-hover:text-orange-500" />
          <span className="sr-only">Shortlisted</span>
        </motion.a>

        <motion.a
          href="/forms"
          className="group inline-flex flex-col items-center justify-center p-2 dark:hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Map className="mb-1 size-6 text-gray-50 dark:group-hover:text-orange-500" />
          <span className="sr-only">Map</span>
        </motion.a>

        <motion.a
          href="/forms"
          className="group inline-flex flex-col items-center justify-center p-2 dark:hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Settings className="mb-1 size-6 text-gray-50 dark:group-hover:text-orange-500" />
          <span className="sr-only">Settings</span>
        </motion.a>
        
      </div>
    </footer>
  );
}
