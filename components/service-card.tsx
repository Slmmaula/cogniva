import type { ReactNode } from "react"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

