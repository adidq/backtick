import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
 
export function ContentCard() {
  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-[250px]" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-5 w-[230px]" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[300px]" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-4 w-[250px]" />
      </CardFooter>
    </Card>
  )
}