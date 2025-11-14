"use client"

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const revenueData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 5200 },
  { month: "Mar", value: 4800 },
  { month: "Apr", value: 6100 },
  { month: "May", value: 5900 },
  { month: "Jun", value: 7200 },
]

const userGrowthData = [
  { month: "Jan", users: 1200 },
  { month: "Feb", users: 1400 },
  { month: "Mar", users: 1600 },
  { month: "Apr", users: 1800 },
  { month: "May", users: 2100 },
  { month: "Jun", users: 2400 },
]

const performanceData = [
  { day: "Mon", performance: 85 },
  { day: "Tue", performance: 88 },
  { day: "Wed", performance: 82 },
  { day: "Thu", performance: 90 },
  { day: "Fri", performance: 92 },
  { day: "Sat", performance: 87 },
  { day: "Sun", performance: 89 },
]

export default function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Chart */}
      <div className="fade-in" style={{ animationDelay: "100ms" }}>
        <div className="glass rounded-xl p-6 border-border/30 hover-lift">
          <h3 className="text-lg font-bold text-foreground mb-6">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--color-primary))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--color-primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" style={{ fontSize: "12px" }} />
              <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(10,10,30,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                }}
                cursor={{ stroke: "rgba(255,255,255,0.2)" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--color-primary))"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* User Growth Chart */}
      <div className="fade-in" style={{ animationDelay: "200ms" }}>
        <div className="glass rounded-xl p-6 border-border/30 hover-lift">
          <h3 className="text-lg font-bold text-foreground mb-6">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" style={{ fontSize: "12px" }} />
              <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(10,10,30,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                }}
                cursor={{ stroke: "rgba(255,255,255,0.2)" }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="hsl(var(--color-accent))"
                dot={{ fill: "hsl(var(--color-accent))", r: 6 }}
                activeDot={{ r: 8 }}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="fade-in lg:col-span-2" style={{ animationDelay: "300ms" }}>
        <div className="glass rounded-xl p-6 border-border/30 hover-lift">
          <h3 className="text-lg font-bold text-foreground mb-6">Weekly Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" style={{ fontSize: "12px" }} />
              <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(10,10,30,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="performance" fill="hsl(var(--color-chart-1))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
