import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8 text-purple-200"
          >
            <path
              d="M10 11H6.5C5.97 11 5.5 10.52 5.5 10V9.5C5.5 7.02 7.52 5 10 5H10.5C10.98 5 11.5 5.5 11.5 6V10.5C11.5 10.98 11.02 11.5 10.5 11.5H10V11ZM10 11V14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 11H15.5C14.97 11 14.5 10.52 14.5 10V9.5C14.5 7.02 16.52 5 19 5H19.5C19.98 5 20.5 5.5 20.5 6V10.5C20.5 10.98 20.02 11.5 19.5 11.5H19V11ZM19 11V14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mb-6 italic text-muted-foreground">{quote}</p>
        <div className="flex items-center gap-3">
          <Image
            src={image || "/placeholder.svg"}
            alt={author}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

