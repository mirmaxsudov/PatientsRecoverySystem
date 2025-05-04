import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

const appointments = [
  {
    id: "1",
    patientId: "1",
    patientName: "John Doe",
    type: "Check-up",
    date: "2023-12-15T10:00:00",
    duration: 30,
    location: "Room 101",
  },
  {
    id: "2",
    patientId: "2",
    patientName: "Jane Smith",
    type: "Physical Therapy",
    date: "2023-12-15T11:00:00",
    duration: 45,
    location: "Therapy Center",
  },
  {
    id: "3",
    patientId: "3",
    patientName: "Robert Johnson",
    type: "Cardiac Evaluation",
    date: "2023-12-15T13:30:00",
    duration: 60,
    location: "Cardiology Dept",
  },
  {
    id: "4",
    patientId: "4",
    patientName: "Emily Davis",
    type: "Follow-up",
    date: "2023-12-16T09:15:00",
    duration: 30,
    location: "Room 205",
  },
]

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>Your schedule for the next few days</CardDescription>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/calendar">View Calendar</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-start gap-4 rounded-lg border p-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={appointment.patientName} />
                <AvatarFallback>
                  {appointment.patientName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{appointment.patientName}</div>
                  <Badge>{appointment.type}</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>
                      {new Date(appointment.date).toLocaleDateString()} at{" "}
                      {new Date(appointment.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{appointment.duration} minutes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{appointment.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/patients/${appointment.patientId}`}>View Patient</Link>
                </Button>
                <Button size="sm">Confirm</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
