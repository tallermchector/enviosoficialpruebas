import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="h-16 w-full border-b border-border bg-card/50" />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Skeleton className="h-12 w-64" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skeleton className="h-80 w-full" />
            <Skeleton className="h-80 w-full" />
          </div>
          <Skeleton className="h-40 w-full" />
        </div>
      </main>
    </div>
  )
}
