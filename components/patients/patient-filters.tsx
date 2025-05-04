"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { FilterIcon, XIcon } from "lucide-react"

export function PatientFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<string>("")
  const [condition, setCondition] = useState<string>("")
  const [progressRange, setProgressRange] = useState<number[]>([0, 100])

  const resetFilters = () => {
    setStatus("")
    setCondition("")
    setProgressRange([0, 100])
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
          <FilterIcon className="h-4 w-4" />
          Filters
          {(status || condition || progressRange[0] > 0 || progressRange[1] < 100) && (
            <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">Active</span>
          )}
        </Button>

        {(status || condition || progressRange[0] > 0 || progressRange[1] < 100) && (
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 px-2 text-xs">
            <XIcon className="mr-1 h-3 w-3" />
            Clear filters
          </Button>
        )}
      </div>

      {isOpen && (
        <Card>
          <CardContent className="p-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="stable">Stable</SelectItem>
                    <SelectItem value="improving">Improving</SelectItem>
                    <SelectItem value="recovered">Recovered</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Condition</label>
                <Select value={condition} onValueChange={setCondition}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any condition</SelectItem>
                    <SelectItem value="post-surgery">Post-surgery</SelectItem>
                    <SelectItem value="physical-therapy">Physical therapy</SelectItem>
                    <SelectItem value="cardiac">Cardiac rehabilitation</SelectItem>
                    <SelectItem value="sports-injury">Sports injury</SelectItem>
                    <SelectItem value="stroke">Stroke recovery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Recovery Progress</label>
                  <span className="text-xs text-muted-foreground">
                    {progressRange[0]}% - {progressRange[1]}%
                  </span>
                </div>
                <Slider
                  value={progressRange}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={setProgressRange}
                  className="py-2"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Reset
              </Button>
              <Button size="sm">Apply Filters</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
