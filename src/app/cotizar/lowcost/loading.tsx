import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="h-16 w-full border-b border-border bg-card/50" />
      <main className="flex-grow">
        <Skeleton className="h-[400px] w-full" />
        <div className="container mx-auto px-4 py-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <Skeleton className="h-[500px] w-full" />
             <Skeleton className="h-[500px] w-full" />
          </div>
        </div>
      </main>
    </div>
  )
}
