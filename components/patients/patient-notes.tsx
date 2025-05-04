"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusCircle } from "lucide-react"

export function PatientNotes({ patientId }: { patientId: string }) {
  const [newNote, setNewNote] = useState("")

  // Mock data for patient notes
  const notes = [
    {
      id: "1",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Primary Physician",
      },
      date: "2023-11-15T14:30:00",
      content:
        "Patient showing good progress with physical therapy. Range of motion has improved by approximately 15 degrees since last assessment. Pain levels reported as 3/10, down from 5/10 previously. Continue with current exercise regimen and medication.",
    },
    {
      id: "2",
      author: {
        name: "John Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Physical Therapist",
      },
      date: "2023-11-01T10:15:00",
      content:
        "Completed therapy session today. Patient demonstrated improved strength in affected area. Introduced new exercises focusing on stability. Patient tolerated well with minimal discomfort. Recommended daily home exercises as discussed.",
    },
    {
      id: "3",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Primary Physician",
      },
      date: "2023-10-15T09:45:00",
      content:
        "Follow-up appointment. Patient reports occasional pain (4/10) with extended activity. Adjusted medication dosage slightly. Discussed importance of consistent physical therapy attendance. Overall recovery progressing as expected.",
    },
    {
      id: "4",
      author: {
        name: "Nurse Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Registered Nurse",
      },
      date: "2023-10-01T11:30:00",
      content:
        "Vital signs recorded: BP 122/78, HR 68, Temp 98.6°F. Patient reports sleeping better with less pain interruption. No adverse reactions to medications. Provided additional educational materials on recovery process.",
    },
  ]

  const handleSubmitNote = () => {
    if (newNote.trim()) {
      // In a real app, this would submit the note to the server
      console.log("Submitting note:", newNote)
      setNewNote("")
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Patient Notes</CardTitle>
          <CardDescription>Clinical notes and observations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Card className="border-dashed">
              <CardContent className="p-4">
                <Textarea
                  placeholder="Add a new note..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="mb-4 min-h-[100px] resize-none"
                />
                <div className="flex justify-end">
                  <Button onClick={handleSubmitNote} disabled={!newNote.trim()}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Note
                  </Button>
                </div>
              </CardContent>
            </Card>

            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-4">
                {notes.map((note) => (
                  <Card key={note.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={note.author.avatar || "/placeholder.svg"} alt={note.author.name} />
                          <AvatarFallback>
                            {note.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <div className="font-medium">{note.author.name}</div>
                              <div className="text-xs text-muted-foreground">{note.author.role}</div>
                            </div>
                            <div className="text-sm text-muted-foreground">{new Date(note.date).toLocaleString()}</div>
                          </div>
                          <div className="mt-2 whitespace-pre-wrap">{note.content}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
