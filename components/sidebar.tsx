"use client"

import Link from "next/link"
import { useState } from "react"
import { LayoutDashboard, BarChart3, Users, Settings, Bell, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  onNavigate: (page: string) => void
  currentPage: string
}

export default function Sidebar({ isOpen, onNavigate, currentPage }: SidebarProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, id: "dashboard" },
    { label: "Analytics", icon: BarChart3, id: "analytics" },
    { label: "Profile", icon: Users, id: "profile" },
  ]

  const bottomItems = [
    { label: "Notifications", icon: Bell, href: "#" },
    { label: "Settings", icon: Settings, href: "#" },
  ]

  const toggleMenu = (item: string) => {
    setExpandedMenu(expandedMenu === item ? null : item)
  }

  return (
    <>
      {/* Desktop Sidebar - visible on lg screens */}
      <aside
        className={cn(
          "glass hidden lg:flex fixed left-0 top-0 h-screen overflow-y-auto border-r border-border/30",
          "flex-col transition-all duration-300 z-40",
          isOpen ? "w-64" : "w-20",
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20 border-b border-border/30 fade-in">
          <div className={cn("flex items-center gap-3", !isOpen && "justify-center")}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-accent">
              <Zap className="w-6 h-6 text-white" />
            </div>
            {isOpen && (
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DashHub
              </span>
            )}
          </div>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "group w-full flex items-center gap-3 px-4 py-3 rounded-lg",
                "transition-all duration-300 hover-lift text-left",
                currentPage === item.id
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-primary",
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium truncate">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom Menu */}
        <nav className="px-4 py-4 space-y-2 border-t border-border/30">
          {bottomItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 px-4 py-3 rounded-lg",
                "transition-all duration-300 hover-lift",
                "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-primary",
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium truncate">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar - visible on mobile, slides in from left */}
      <aside
        className={cn(
          "glass lg:hidden fixed left-0 top-0 h-screen overflow-y-auto border-r border-border/30",
          "flex flex-col transition-all duration-300 z-50 w-64",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo with Close Button */}
        <div className="flex items-center justify-between h-20 border-b border-border/30 fade-in px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-accent">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DashHub
            </span>
          </div>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "group w-full flex items-center gap-3 px-4 py-3 rounded-lg",
                "transition-all duration-300 hover-lift text-left",
                currentPage === item.id
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-primary",
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium truncate">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom Menu */}
        <nav className="px-4 py-4 space-y-2 border-t border-border/30">
          {bottomItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 px-4 py-3 rounded-lg",
                "transition-all duration-300 hover-lift",
                "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-primary",
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium truncate">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
