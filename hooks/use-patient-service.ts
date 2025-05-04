"use client"

import { useState, useEffect } from "react"

// Mock data for patients
const mockPatients = [
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
  {
    id: "6",
    name: "Sarah Thompson",
    age: 42,
    condition: "Back pain",
    status: "Active",
    progress: 50,
    lastVisit: "2023-12-06",
  },
  {
    id: "7",
    name: "David Martinez",
    age: 37,
    condition: "Knee replacement",
    status: "Stable",
    progress: 80,
    lastVisit: "2023-12-07",
  },
  {
    id: "8",
    name: "Jennifer Lee",
    age: 63,
    condition: "Hip fracture",
    status: "Improving",
    progress: 70,
    lastVisit: "2023-12-08",
  },
]

// This is a mock implementation of the gRPC client
// In a real application, this would use the actual gRPC client
export function usePatientService() {
  const [data, setData] = useState<typeof mockPatients>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Simulate fetching data from gRPC
    const fetchPatients = async () => {
      try {
        // In a real implementation, this would be:
        // const client = new PatientServiceClient('http://localhost:8080')
        // const request = new ListPatientsRequest()
        // client.listPatients(request, {}, (err, response) => {
        //   if (err) {
        //     setError(err)
        //     setIsLoading(false)
        //     return
        //   }
        //   const patients = response.getPatientsList().map(p => ({
        //     id: p.getId(),
        //     name: p.getName(),
        //     age: p.getAge(),
        //     condition: p.getCondition(),
        //     status: p.getStatus(),
        //     progress: p.getProgress(),
        //     lastVisit: p.getLastVisit(),
        //   }))
        //   setData(patients)
        //   setIsLoading(false)
        // })

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        setData(mockPatients)
        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"))
        setIsLoading(false)
      }
    }

    fetchPatients()
  }, [])

  const getPatientById = (id: string) => {
    return mockPatients.find((patient) => patient.id === id)
  }

  return {
    data,
    isLoading,
    error,
    getPatientById,
  }
}
