"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
      <AlertCircle className="h-16 w-16 text-destructive" />
      <h2 className="text-2xl font-semibold">Something went wrong!</h2>
      <p className="text-muted-foreground">An error occurred while loading this page. Please try again.</p>
      <Button onClick={() => reset()}>
        <RefreshCw className="mr-2 h-4 w-4" />
        Try again
      </Button>
    </div>
  )
}
