interface StatsCardProps {
  value: string
  label: string
}

export function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-purple-200">{label}</div>
    </div>
  )
}

