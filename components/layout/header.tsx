"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Bell, Search, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">PRS</span>
          </Link>

          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/patients"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname.startsWith("/patients") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Patients
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/calendar" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/reports" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Reports
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-64 rounded-md pl-8" />
          </div>

          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>

          <ModeToggle />

          <LanguageToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="User menu">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
