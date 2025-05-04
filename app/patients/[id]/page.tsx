import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PatientHeader } from "@/components/patients/patient-header"
import { PatientOverview } from "@/components/patients/patient-overview"
import { PatientRecoveryPlan } from "@/components/patients/patient-recovery-plan"
import { PatientMedicalHistory } from "@/components/patients/patient-medical-history"
import { PatientAppointments } from "@/components/patients/patient-appointments"
import { PatientNotes } from "@/components/patients/patient-notes"

export const metadata: Metadata = {
  title: "Patient Details - Patient Recovery System",
  description: "View and manage individual patient details",
}

export default function PatientDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the patient data here
  // For now, we'll just check if the ID is valid
  if (params.id === "invalid") {
    notFound()
  }

  return (
    <div className="flex flex-col gap-6">
      <PatientHeader patientId={params.id} />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recovery-plan">Recovery Plan</TabsTrigger>
          <TabsTrigger value="medical-history">Medical History</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <PatientOverview patientId={params.id} />
        </TabsContent>

        <TabsContent value="recovery-plan" className="space-y-4">
          <PatientRecoveryPlan patientId={params.id} />
        </TabsContent>

        <TabsContent value="medical-history" className="space-y-4">
          <PatientMedicalHistory patientId={params.id} />
        </TabsContent>

        <TabsContent value="appointments" className="space-y-4">
          <PatientAppointments patientId={params.id} />
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <PatientNotes patientId={params.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
