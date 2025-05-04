import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartGrid,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function PatientOverview({ patientId }: { patientId: string }) {
  // Mock data for patient progress over time
  const progressData = [
    { date: "2023-06-01", progress: 10, pain: 8 },
    { date: "2023-07-01", progress: 25, pain: 7 },
    { date: "2023-08-01", progress: 35, pain: 6 },
    { date: "2023-09-01", progress: 45, pain: 5 },
    { date: "2023-10-01", progress: 60, pain: 4 },
    { date: "2023-11-01", progress: 70, pain: 3 },
    { date: "2023-12-01", progress: 75, pain: 2 },
  ]

  // Mock data for vital signs
  const vitalSigns = [
    { date: "2023-12-01", heartRate: 72, bloodPressure: "120/80", temperature: 98.6, respiratoryRate: 16 },
    { date: "2023-11-15", heartRate: 75, bloodPressure: "122/82", temperature: 98.8, respiratoryRate: 18 },
    { date: "2023-11-01", heartRate: 78, bloodPressure: "125/85", temperature: 99.0, respiratoryRate: 17 },
    { date: "2023-10-15", heartRate: 80, bloodPressure: "130/85", temperature: 99.2, respiratoryRate: 18 },
    { date: "2023-10-01", heartRate: 82, bloodPressure: "128/84", temperature: 99.0, respiratoryRate: 18 },
  ]

  // Mock data for medications
  const medications = [
    {
      name: "Ibuprofen",
      dosage: "400mg",
      frequency: "Twice daily",
      startDate: "2023-06-01",
      endDate: "2023-12-31",
      status: "Active",
    },
    {
      name: "Acetaminophen",
      dosage: "500mg",
      frequency: "As needed",
      startDate: "2023-06-01",
      endDate: "2023-12-31",
      status: "Active",
    },
    {
      name: "Cyclobenzaprine",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "2023-06-01",
      endDate: "2023-09-01",
      status: "Completed",
    },
    {
      name: "Vitamin D",
      dosage: "1000 IU",
      frequency: "Once daily",
      startDate: "2023-06-01",
      endDate: "2023-12-31",
      status: "Active",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Recovery Progress</CardTitle>
          <CardDescription>Tracking progress and pain levels over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer data={progressData}>
              <ChartLegend className="mb-6">
                <ChartLegendItem name="Progress %" color="hsl(var(--chart-1))" />
                <ChartLegendItem name="Pain Level" color="hsl(var(--chart-2))" />
              </ChartLegend>
              <ChartGrid />
              <ChartXAxis
                dataKey="date"
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", { month: "short" })
                }}
              />
              <ChartYAxis />
              <ChartLine dataKey="progress" stroke="hsl(var(--chart-1))" />
              <ChartLine dataKey="pain" stroke="hsl(var(--chart-2))" />
              <ChartArea dataKey="progress" fill="hsl(var(--chart-1) / 0.1)" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vital Signs</CardTitle>
            <CardDescription>Recent measurements</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Heart Rate</TableHead>
                  <TableHead>Blood Pressure</TableHead>
                  <TableHead>Temperature</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vitalSigns.map((vital, index) => (
                  <TableRow key={index}>
                    <TableCell>{new Date(vital.date).toLocaleDateString()}</TableCell>
                    <TableCell>{vital.heartRate} bpm</TableCell>
                    <TableCell>{vital.bloodPressure} mmHg</TableCell>
                    <TableCell>{vital.temperature}°F</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Medications</CardTitle>
            <CardDescription>Current and past medications</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Medication</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medications.map((medication, index) => (
                  <TableRow key={index}>
                    <TableCell>{medication.name}</TableCell>
                    <TableCell>{medication.dosage}</TableCell>
                    <TableCell>{medication.frequency}</TableCell>
                    <TableCell>
                      <Badge variant={medication.status === "Active" ? "default" : "secondary"}>
                        {medication.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
