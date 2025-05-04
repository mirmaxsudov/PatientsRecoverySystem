import type { Metadata } from "next"
import { PatientList } from "@/components/patients/patient-list"
import { PatientFilters } from "@/components/patients/patient-filters"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Patients - Patient Recovery System",
  description: "Manage and view all patients in the recovery system",
}

export default function PatientsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Patient
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <PatientFilters />
        <PatientList />
      </div>
    </div>
  )
}
