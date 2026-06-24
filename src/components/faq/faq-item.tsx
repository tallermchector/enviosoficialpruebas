"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Card className={cn(
      "rounded-none overflow-hidden transition-all duration-300 border-white/10 glassmorphism shadow-crate",
      isOpen ? "border-primary/50" : "hover:border-primary/30"
    )}>
      <CardContent className="p-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-6 flex items-center justify-between transition-colors duration-200 group"
          aria-expanded={isOpen}
        >
          <h3 className={cn(
            "text-xl font-bold font-bebas uppercase tracking-wider pr-4 transition-colors duration-200",
            isOpen ? "text-secondary" : "text-white group-hover:text-secondary"
          )}>{question}</h3>
          <div className={cn(
            "w-8 h-8 rounded-none flex items-center justify-center transition-all duration-300",
            isOpen ? "bg-primary text-white rotate-180" : "bg-primary/10 text-secondary"
          )}>
            <ChevronDown className="w-5 h-5 flex-shrink-0" />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed font-sans text-lg">{answer}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
