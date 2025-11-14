"use client"

import { useEffect, useState } from "react"
import AnalyticsCards from "./analytics-cards"
import AnalyticsCharts from "./analytics-charts"
import RecentActivity from "./recent-activity"

export default function MainContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-card/10">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 p-8 space-y-8">
        {/* Header */}
        <div className="fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your analytics overview.</p>
        </div>

        {/* Analytics Cards */}
        <AnalyticsCards />

        {/* Charts Section */}
        <AnalyticsCharts />

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </main>
  )
}
