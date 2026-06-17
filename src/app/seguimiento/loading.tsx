import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="h-16 w-full border-b border-border bg-card/50" />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-8">
        <div className="flex justify-center">
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="max-w-md mx-auto p-6 bg-card rounded-lg border border-border space-y-4">
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-60 w-full" />
          </div>
          <Skeleton className="h-[400px] lg:h-full w-full" />
        </div>
      </main>
    </div>
  )
}
