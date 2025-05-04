import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export function PatientMedicalHistory({ patientId }: { patientId: string }) {
  // Mock data for medical history
  const conditions = [
    { name: "Hypertension", diagnosedDate: "2018-05-12", status: "Active", notes: "Controlled with medication" },
    {
      name: "Type 2 Diabetes",
      diagnosedDate: "2019-03-22",
      status: "Active",
      notes: "Diet-controlled, regular monitoring",
    },
    {
      name: "Asthma",
      diagnosedDate: "2010-11-05",
      status: "Resolved",
      notes: "Childhood asthma, resolved in adulthood",
    },
  ]

  const surgeries = [
    {
      procedure: "Appendectomy",
      date: "2015-07-18",
      hospital: "Memorial Hospital",
      surgeon: "Dr. Robert Chen",
      notes: "No complications",
    },
    {
      procedure: "ACL Reconstruction",
      date: "2023-05-30",
      hospital: "Sports Medicine Center",
      surgeon: "Dr. Emily Wilson",
      notes: "Current recovery in progress",
    },
  ]

  const allergies = [
    {
      allergen: "Penicillin",
      severity: "Severe",
      reaction: "Hives, difficulty breathing",
      notes: "Avoid all penicillin-based antibiotics",
    },
    {
      allergen: "Peanuts",
      severity: "Moderate",
      reaction: "Skin rash, swelling",
      notes: "Carries epinephrine auto-injector",
    },
    {
      allergen: "Latex",
      severity: "Mild",
      reaction: "Contact dermatitis",
      notes: "Use latex-free gloves and equipment",
    },
  ]

  const familyHistory = [
    { condition: "Coronary Artery Disease", relation: "Father", age: 65, notes: "Father had heart attack at age 65" },
    { condition: "Type 2 Diabetes", relation: "Mother", age: 58, notes: "Mother diagnosed at age 58" },
    { condition: "Hypertension", relation: "Paternal Grandfather", age: 60, notes: "Lifelong hypertension" },
    { condition: "Breast Cancer", relation: "Maternal Aunt", age: 49, notes: "Diagnosed at age 49, in remission" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Medical History</CardTitle>
          <CardDescription>Comprehensive medical history record</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="conditions" className="space-y-4">
            <TabsList>
              <TabsTrigger value="conditions">Conditions</TabsTrigger>
              <TabsTrigger value="surgeries">Surgeries</TabsTrigger>
              <TabsTrigger value="allergies">Allergies</TabsTrigger>
              <TabsTrigger value="family">Family History</TabsTrigger>
            </TabsList>

            <TabsContent value="conditions">
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Condition</TableHead>
                      <TableHead>Diagnosed</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {conditions.map((condition, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{condition.name}</TableCell>
                        <TableCell>{new Date(condition.diagnosedDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge variant={condition.status === "Active" ? "default" : "secondary"}>
                            {condition.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{condition.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="surgeries">
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Procedure</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Hospital</TableHead>
                      <TableHead>Surgeon</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {surgeries.map((surgery, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{surgery.procedure}</TableCell>
                        <TableCell>{new Date(surgery.date).toLocaleDateString()}</TableCell>
                        <TableCell>{surgery.hospital}</TableCell>
                        <TableCell>{surgery.surgeon}</TableCell>
                        <TableCell>{surgery.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="allergies">
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Allergen</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Reaction</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allergies.map((allergy, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{allergy.allergen}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              allergy.severity === "Severe"
                                ? "destructive"
                                : allergy.severity === "Moderate"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {allergy.severity}
                          </Badge>
                        </TableCell>
                        <TableCell>{allergy.reaction}</TableCell>
                        <TableCell>{allergy.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="family">
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Condition</TableHead>
                      <TableHead>Relation</TableHead>
                      <TableHead>Age at Onset</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {familyHistory.map((history, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{history.condition}</TableCell>
                        <TableCell>{history.relation}</TableCell>
                        <TableCell>{history.age}</TableCell>
                        <TableCell>{history.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
