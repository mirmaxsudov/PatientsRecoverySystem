import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"

export function PatientRecoveryPlan({ patientId }: { patientId: string }) {
  // Mock data for recovery plan
  const recoveryPlan = {
    startDate: "2023-06-01",
    estimatedEndDate: "2024-01-31",
    goals: [
      { id: "1", description: "Regain full range of motion in affected area", status: "in-progress", progress: 70 },
      { id: "2", description: "Reduce pain to manageable levels", status: "in-progress", progress: 80 },
      { id: "3", description: "Return to normal daily activities", status: "in-progress", progress: 60 },
      { id: "4", description: "Strengthen supporting muscles", status: "in-progress", progress: 50 },
      { id: "5", description: "Prevent future injuries through proper technique", status: "not-started", progress: 0 },
    ],
    exercises: [
      {
        id: "1",
        name: "Gentle Stretching",
        frequency: "Daily",
        duration: "15 minutes",
        completed: 24,
        total: 30,
        instructions: "Focus on slow, gentle movements. Stop if pain increases.",
      },
      {
        id: "2",
        name: "Resistance Band Training",
        frequency: "3x per week",
        duration: "20 minutes",
        completed: 10,
        total: 12,
        instructions: "Use the provided green resistance band. Perform 3 sets of 10 repetitions.",
      },
      {
        id: "3",
        name: "Balance Exercises",
        frequency: "2x per week",
        duration: "15 minutes",
        completed: 6,
        total: 8,
        instructions:
          "Perform exercises on stable surface initially, progressing to unstable surfaces as balance improves.",
      },
      {
        id: "4",
        name: "Cardiovascular Training",
        frequency: "3x per week",
        duration: "30 minutes",
        completed: 8,
        total: 12,
        instructions: "Low impact activities only: swimming, stationary bike, or elliptical.",
      },
    ],
    restrictions: [
      { id: "1", description: "No heavy lifting (>10 lbs)", until: "2024-01-01" },
      { id: "2", description: "Avoid high-impact activities", until: "2023-12-15" },
      { id: "3", description: "Limit standing/walking to 30 minutes at a time", until: "2023-11-01" },
    ],
    tasks: [
      { id: "1", description: "Schedule follow-up with specialist", dueDate: "2023-12-20", completed: false },
      { id: "2", description: "Refill medication prescription", dueDate: "2023-12-15", completed: true },
      { id: "3", description: "Submit progress report to insurance", dueDate: "2023-12-31", completed: false },
      { id: "4", description: "Acquire recommended assistive device", dueDate: "2023-11-15", completed: true },
    ],
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Recovery Plan</CardTitle>
              <CardDescription>
                Started on {new Date(recoveryPlan.startDate).toLocaleDateString()} • Estimated completion:{" "}
                {new Date(recoveryPlan.estimatedEndDate).toLocaleDateString()}
              </CardDescription>
            </div>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add to Plan
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="goals" className="space-y-4">
            <TabsList>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="exercises">Exercises</TabsTrigger>
              <TabsTrigger value="restrictions">Restrictions</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
            </TabsList>

            <TabsContent value="goals" className="space-y-4">
              {recoveryPlan.goals.map((goal) => (
                <div key={goal.id} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">{goal.description}</div>
                      <div className="flex items-center gap-2">
                        <Progress value={goal.progress} className="h-2 w-[200px]" />
                        <span className="text-sm font-medium">{goal.progress}%</span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        goal.status === "completed"
                          ? "default"
                          : goal.status === "in-progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {goal.status === "in-progress"
                        ? "In Progress"
                        : goal.status === "completed"
                          ? "Completed"
                          : "Not Started"}
                    </Badge>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="exercises" className="space-y-4">
              {recoveryPlan.exercises.map((exercise) => (
                <div key={exercise.id} className="rounded-lg border p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">{exercise.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {exercise.frequency} • {exercise.duration}
                      </div>
                      <div className="text-sm">{exercise.instructions}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant="outline">
                        {exercise.completed}/{exercise.total} sessions completed
                      </Badge>
                      <Progress value={(exercise.completed / exercise.total) * 100} className="h-2 w-[150px]" />
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="restrictions" className="space-y-4">
              {recoveryPlan.restrictions.map((restriction) => (
                <div key={restriction.id} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{restriction.description}</div>
                    <div className="text-sm text-muted-foreground">
                      Until {new Date(restriction.until).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="tasks" className="space-y-4">
              {recoveryPlan.tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-2 rounded-lg border p-4">
                  <Checkbox id={`task-${task.id}`} checked={task.completed} />
                  <div className="flex-1">
                    <label
                      htmlFor={`task-${task.id}`}
                      className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
                    >
                      {task.description}
                    </label>
                    <div className="text-sm text-muted-foreground">
                      Due by {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                  <Badge variant={task.completed ? "default" : "outline"}>
                    {task.completed ? "Completed" : "Pending"}
                  </Badge>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
