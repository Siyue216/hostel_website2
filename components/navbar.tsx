"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Shield className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Military Boys Hostel</span>
        </Link>
        <nav className="hidden md:flex gap-6 flex-1">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/rules" className="text-sm font-medium transition-colors hover:text-primary">
            Rules
          </Link>
          <Link href="/admission" className="text-sm font-medium transition-colors hover:text-primary">
            Admission
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild className="hidden md:flex">
            <Link href="/admission">Apply Now</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link
                  href="/"
                  onClick={closeSheet}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/gallery"
                  onClick={closeSheet}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Gallery
                </Link>
                <Link
                  href="/rules"
                  onClick={closeSheet}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Rules
                </Link>
                <Link
                  href="/admission"
                  onClick={closeSheet}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Admission
                </Link>
                <Link
                  href="/contact"
                  onClick={closeSheet}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Contact
                </Link>
                <Button asChild>
                  <Link href="/admission" onClick={closeSheet}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

