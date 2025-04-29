"use client"

interface ProgressProps {
  value?: number
  className?: string
}

export function Progress({ value = 0, className = "" }: ProgressProps) {
  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}>
      <div className="h-full bg-red-600 transition-all" style={{ width: `${value}%` }} />
    </div>
  )
}
