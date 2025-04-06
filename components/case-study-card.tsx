import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  image: string
  title: string
  client: string
  stats: { label: string; value: string }[]
  description: string
}

export function CaseStudyCard({ image, title, client, stats, description }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-2 text-sm text-muted-foreground">{client}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-purple-600 font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href="#" className="group inline-flex items-center text-sm font-medium text-purple-600">
          View Case Study
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}

