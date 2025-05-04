import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar, MoreHorizontal, PencilIcon, Printer, Share2, Trash2Icon } from "lucide-react"
import { usePatientService } from "@/hooks/use-patient-service"

export function PatientHeader({ patientId }: { patientId: string }) {
  const { getPatientById } = usePatientService()
  const patient = getPatientById(patientId)

  if (!patient) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-destructive">Patient not found</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt={patient.name} />
              <AvatarFallback>
                {patient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{patient.name}</h1>
                <Badge
                  variant={
                    patient.status === "Critical"
                      ? "destructive"
                      : patient.status === "Active"
                        ? "default"
                        : patient.status === "Stable"
                          ? "secondary"
                          : "outline"
                  }
                >
                  {patient.status}
                </Badge>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <div>ID: {patient.id}</div>
                <div>{patient.age} years old</div>
                <div>{patient.condition}</div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Calendar className="h-4 w-4" />
              Schedule
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button size="sm" className="gap-1">
              <PencilIcon className="h-4 w-4" />
              Edit
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View medical records</DropdownMenuItem>
                <DropdownMenuItem>Send message</DropdownMenuItem>
                <DropdownMenuItem>Export data</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash2Icon className="mr-2 h-4 w-4" />
                  Delete patient
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">Recovery Progress</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 w-full rounded-full bg-secondary">
                <div className="h-full rounded-full bg-primary" style={{ width: `${patient.progress}%` }} />
              </div>
              <span className="font-medium">{patient.progress}%</span>
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">Next Appointment</div>
            <div className="mt-1 font-medium">Dec 15, 2023</div>
            <div className="text-xs text-muted-foreground">10:00 AM - Check-up</div>
          </div>

          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">Primary Doctor</div>
            <div className="mt-1 font-medium">Dr. Sarah Johnson</div>
            <div className="text-xs text-muted-foreground">Rehabilitation Specialist</div>
          </div>

          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">Insurance</div>
            <div className="mt-1 font-medium">MediCare Plus</div>
            <div className="text-xs text-muted-foreground">Policy #12345678</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
