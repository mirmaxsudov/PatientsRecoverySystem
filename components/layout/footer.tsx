import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex h-14 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Patient Recovery System. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
            Help
          </Link>
        </div>
      </div>
    </footer>
  )
}
