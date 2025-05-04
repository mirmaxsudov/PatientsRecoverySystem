import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EyeIcon } from "lucide-react"
import Link from "next/link"

const patients = [
  {
    id: "1",
    name: "John Doe",
    age: 45,
    condition: "Post-surgery",
    status: "Active",
    progress: 75,
    lastVisit: "2023-12-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    age: 32,
    condition: "Physical therapy",
    status: "Active",
    progress: 60,
    lastVisit: "2023-12-03",
  },
  {
    id: "3",
    name: "Robert Johnson",
    age: 58,
    condition: "Cardiac rehabilitation",
    status: "Critical",
    progress: 40,
    lastVisit: "2023-12-05",
  },
  {
    id: "4",
    name: "Emily Davis",
    age: 29,
    condition: "Sports injury",
    status: "Stable",
    progress: 85,
    lastVisit: "2023-12-02",
  },
  {
    id: "5",
    name: "Michael Wilson",
    age: 51,
    condition: "Stroke recovery",
    status: "Improving",
    progress: 65,
    lastVisit: "2023-12-04",
  },
]

export function RecentPatients() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Patients</CardTitle>
          <CardDescription>Showing the 5 most recently updated patients</CardDescription>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/patients">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={patient.name} />
                      <AvatarFallback>
                        {patient.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div>{patient.name}</div>
                      <div className="text-xs text-muted-foreground">{patient.age} years</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${patient.progress}%` }} />
                    </div>
                    <span className="text-xs font-medium">{patient.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>{new Date(patient.lastVisit).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/patients/${patient.id}`}>
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">View patient</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
