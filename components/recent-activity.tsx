"use client"

import { cn } from "@/lib/utils"
import { Clock, CheckCircle, AlertCircle, TrendingUp } from "lucide-react"

const activities = [
  {
    id: 1,
    title: "New user registration",
    description: "User #2847 just signed up",
    time: "2 minutes ago",
    icon: CheckCircle,
    color: "text-green-400",
  },
  {
    id: 2,
    title: "System update completed",
    description: "Database optimization finished successfully",
    time: "15 minutes ago",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    id: 3,
    title: "High traffic alert",
    description: "Traffic spike detected - 240% above average",
    time: "1 hour ago",
    icon: AlertCircle,
    color: "text-yellow-400",
  },
  {
    id: 4,
    title: "Revenue milestone",
    description: "Reached $100,000 monthly revenue",
    time: "3 hours ago",
    icon: TrendingUp,
    color: "text-accent",
  },
]

export default function RecentActivity() {
  return (
    <div className="fade-in" style={{ animationDelay: "400ms" }}>
      <div className="glass rounded-xl p-6 border-border/30 hover-lift">
        <h3 className="text-lg font-bold text-foreground mb-6">Recent Activity</h3>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300"
            >
              <div className={cn("flex-shrink-0 mt-1", activity.color)}>
                <activity.icon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm">{activity.title}</p>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </div>

              <div className="flex items-center gap-1 text-muted-foreground text-xs flex-shrink-0">
                <Clock className="w-4 h-4" />
                <span>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
