import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const activities = [
  {
    id: "1",
    user: {
      name: "Dr. Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "updated the recovery plan for",
    patient: "John Doe",
    timestamp: "2023-12-10T14:32:00",
  },
  {
    id: "2",
    user: {
      name: "Dr. Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "added a new note for",
    patient: "Emily Davis",
    timestamp: "2023-12-10T13:45:00",
  },
  {
    id: "3",
    user: {
      name: "Nurse Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "recorded vital signs for",
    patient: "Robert Johnson",
    timestamp: "2023-12-10T11:20:00",
  },
  {
    id: "4",
    user: {
      name: "Dr. Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "scheduled a follow-up appointment for",
    patient: "Jane Smith",
    timestamp: "2023-12-10T10:15:00",
  },
  {
    id: "5",
    user: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "added a new patient",
    patient: "Michael Wilson",
    timestamp: "2023-12-10T09:30:00",
  },
  {
    id: "6",
    user: {
      name: "Dr. Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "updated the medication for",
    patient: "John Doe",
    timestamp: "2023-12-09T16:45:00",
  },
  {
    id: "7",
    user: {
      name: "Nurse Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "completed therapy session with",
    patient: "Emily Davis",
    timestamp: "2023-12-09T15:30:00",
  },
]

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions in the system</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                  <AvatarFallback>
                    {activity.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
                    <span className="font-medium">{activity.patient}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{new Date(activity.timestamp).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
