"use client"

import { useEffect, useState } from "react"
import { BarChart3, TrendingUp, Users, Activity } from "lucide-react"

export default function AnalyticsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const analyticsMetrics = [
    {
      title: "Total Page Views",
      value: "2.4M",
      change: "+14.2%",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "User Engagement",
      value: "68.5%",
      change: "+8.3%",
      icon: Activity,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "New Visitors",
      value: "184K",
      change: "+23.1%",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Conversion Rate",
      value: "12.4%",
      change: "+2.5%",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <main className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-card/10">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 p-8 space-y-8 animate-fade-in-page">
        {/* Header */}
        <div className="fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground">Detailed insights and performance metrics.</p>
        </div>

        {/* Analytics Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 border border-border/30 hover-lift transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{metric.title}</p>
                    <h3 className="text-2xl font-bold text-foreground mt-2">{metric.value}</h3>
                  </div>
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${metric.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm font-medium text-green-400">{metric.change} from last month</p>
              </div>
            )
          })}
        </div>

        {/* Detailed Analytics Section */}
        <div className="glass rounded-xl p-8 border border-border/30">
          <h2 className="text-2xl font-bold text-foreground mb-6">Top Traffic Sources</h2>
          <div className="space-y-4">
            {[
              { source: "Organic Search", visitors: "1.2M", percentage: 45 },
              { source: "Direct Traffic", visitors: "680K", percentage: 28 },
              { source: "Social Media", visitors: "420K", percentage: 18 },
              { source: "Referral", visitors: "95K", percentage: 9 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-foreground font-medium mb-2">{item.source}</p>
                  <div className="w-full bg-secondary/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
                <div className="ml-6 text-right">
                  <p className="text-foreground font-semibold">{item.visitors}</p>
                  <p className="text-sm text-muted-foreground">{item.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
