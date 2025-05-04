"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "uz"

type I18nContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Simple translations for demonstration
const translations = {
  en: {
    dashboard: "Dashboard",
    patients: "Patients",
    calendar: "Calendar",
    reports: "Reports",
    settings: "Settings",
    logout: "Log out",
  },
  uz: {
    dashboard: "Boshqaruv paneli",
    patients: "Bemorlar",
    calendar: "Taqvim",
    reports: "Hisobotlar",
    settings: "Sozlamalar",
    logout: "Chiqish",
  },
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
