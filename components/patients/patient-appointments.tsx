"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle } from "lucide-react"

export function PatientAppointments({ patientId }: { patientId: string }) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Mock data for appointments
  const pastAppointments = [
    {
      id: "1",
      type: "Initial Consultation",
      date: "2023-06-01T10:00:00",
      provider: "Dr. Sarah Johnson",
      location: "Main Clinic",
      notes: "Initial assessment and recovery plan creation",
    },
    {
      id: "2",
      type: "Physical Therapy",
      date: "2023-06-15T14:30:00",
      provider: "John Smith, PT",
      location: "Rehabilitation Center",
      notes: "First therapy session, baseline measurements taken",
    },
    {
      id: "3",
      type: "Follow-up",
      date: "2023-07-01T11:15:00",
      provider: "Dr. Sarah Johnson",
      location: "Main Clinic",
      notes: "Progress review, medication adjustment",
    },
    {
      id: "4",
      type: "Physical Therapy",
      date: "2023-07-15T14:30:00",
      provider: "John Smith, PT",
      location: "Rehabilitation Center",
      notes: "Continued exercises, slight improvement noted",
    },
    {
      id: "5",
      type: "Physical Therapy",
      date: "2023-08-01T14:30:00",
      provider: "John Smith, PT",
      location: "Rehabilitation Center",
      notes: "Increased exercise intensity, good progress",
    },
    {
      id: "6",
      type: "Follow-up",
      date: "2023-09-01T11:15:00",
      provider: "Dr. Sarah Johnson",
      location: "Main Clinic",
      notes: "Significant improvement, recovery plan updated",
    },
    {
      id: "7",
      type: "Physical Therapy",
      date: "2023-10-01T14:30:00",
      provider: "John Smith, PT",
      location: "Rehabilitation Center",
      notes: "Advanced exercises introduced",
    },
    {
      id: "8",
      type: "Follow-up",
      date: "2023-11-01T11:15:00",
      provider: "Dr. Sarah Johnson",
      location: "Main Clinic",
      notes: "On track for full recovery, continue current plan",
    },
  ]

  const upcomingAppointments = [
    {
      id: "9",
      type: "Physical Therapy",
      date: "2023-12-15T14:30:00",
      provider: "John Smith, PT",
      location: "Rehabilitation Center",
      status: "Confirmed",
    },
    {
      id: "10",
      type: "Follow-up",
      date: "2024-01-01T11:15:00",
      provider: "Dr. Sarah Johnson",
      location: "Main Clinic",
      status: "Scheduled",
    },
    {
      id: "11",
      type: "Final Assessment",
      date: "2024-01-31T10:00:00",
      provider: "Dr. Sarah Johnson",
      location: "Main Clinic",
      status: "Pending",
    },
  ]

  // Highlight dates with appointments on the calendar
  const appointmentDates = [...pastAppointments, ...upcomingAppointments].map(
    (appointment) => new Date(appointment.date),
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>Appointments</CardTitle>
            <CardDescription>View and manage patient appointments</CardDescription>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Schedule Appointment
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming" className="space-y-4">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingAppointments.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        No upcoming appointments.
                      </TableCell>
                    </TableRow>
                  ) : (
                    upcomingAppointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{appointment.type}</TableCell>
                        <TableCell>
                          {new Date(appointment.date).toLocaleDateString()}{" "}
                          {new Date(appointment.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </TableCell>
                        <TableCell>{appointment.provider}</TableCell>
                        <TableCell>{appointment.location}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              appointment.status === "Confirmed"
                                ? "default"
                                : appointment.status === "Scheduled"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive">
                              Cancel
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="past">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pastAppointments.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        No past appointments.
                      </TableCell>
                    </TableRow>
                  ) : (
                    pastAppointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{appointment.type}</TableCell>
                        <TableCell>
                          {new Date(appointment.date).toLocaleDateString()}{" "}
                          {new Date(appointment.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </TableCell>
                        <TableCell>{appointment.provider}</TableCell>
                        <TableCell>{appointment.location}</TableCell>
                        <TableCell>{appointment.notes}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="calendar">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-[300px]">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date("2023-01-01")}
                    modifiers={{
                      appointment: appointmentDates,
                    }}
                    modifiersStyles={{
                      appointment: {
                        fontWeight: "bold",
                        backgroundColor: "hsl(var(--primary) / 0.1)",
                        color: "hsl(var(--primary))",
                      },
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {date
                          ? date.toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "Select a date"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {date && (
                        <div className="space-y-4">
                          {[...upcomingAppointments, ...pastAppointments]
                            .filter((appointment) => {
                              const appointmentDate = new Date(appointment.date)
                              return (
                                appointmentDate.getDate() === date.getDate() &&
                                appointmentDate.getMonth() === date.getMonth() &&
                                appointmentDate.getFullYear() === date.getFullYear()
                              )
                            })
                            .map((appointment) => (
                              <div key={appointment.id} className="rounded-lg border p-4">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                  <div>
                                    <div className="font-medium">{appointment.type}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {new Date(appointment.date).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}{" "}
                                      • {appointment.provider}
                                    </div>
                                  </div>
                                  {"status" in appointment ? (
                                    <Badge
                                      variant={
                                        appointment.status === "Confirmed"
                                          ? "default"
                                          : appointment.status === "Scheduled"
                                            ? "secondary"
                                            : "outline"
                                      }
                                    >
                                      {appointment.status}
                                    </Badge>
                                  ) : (
                                    <Badge variant="secondary">Completed</Badge>
                                  )}
                                </div>
                              </div>
                            ))}
                          {![...upcomingAppointments, ...pastAppointments].some((appointment) => {
                            const appointmentDate = new Date(appointment.date)
                            return (
                              appointmentDate.getDate() === date.getDate() &&
                              appointmentDate.getMonth() === date.getMonth() &&
                              appointmentDate.getFullYear() === date.getFullYear()
                            )
                          }) && (
                            <div className="text-center text-muted-foreground">
                              No appointments scheduled for this date.
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
