"use client"

import { TrendingUp, Users, Zap, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

const cards = [
  {
    title: "Total Revenue",
    value: "$12,584",
    change: "+12.5%",
    icon: TrendingUp,
    gradient: "from-primary/20 to-transparent",
    color: "text-primary",
  },
  {
    title: "Active Users",
    value: "2,847",
    change: "+8.2%",
    icon: Users,
    gradient: "from-accent/20 to-transparent",
    color: "text-accent",
  },
  {
    title: "Performance",
    value: "94.2%",
    change: "+3.1%",
    icon: Zap,
    gradient: "from-secondary/20 to-transparent",
    color: "text-secondary",
  },
  {
    title: "Engagement",
    value: "7.24h",
    change: "+2.4%",
    icon: Activity,
    gradient: "from-green-500/20 to-transparent",
    color: "text-green-400",
  },
]

export default function AnalyticsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div key={card.title} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <div
            className={cn(
              "glass rounded-xl p-6 border-border/30 overflow-hidden",
              "hover-lift glow-accent group relative",
            )}
          >
            {/* Gradient Background */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100",
                "transition-opacity duration-500",
                card.gradient,
              )}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-lg mb-4",
                  "bg-gradient-to-br flex items-center justify-center",
                  "from-current/30 to-current/10",
                  card.color,
                )}
              >
                <card.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm mb-2">{card.title}</p>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{card.value}</h3>
                </div>
                <span className="text-green-400 text-sm font-semibold">{card.change}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
