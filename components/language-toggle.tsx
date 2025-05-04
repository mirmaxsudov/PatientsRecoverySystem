"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useI18n } from "@/hooks/use-i18n"

export function LanguageToggle() {
  // const { setLanguage } = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change language">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => {}}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>Uzbek</DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem> */}
        {/* <DropdownMenuItem onClick={() => setLanguage("uz")}>Uzbek</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
