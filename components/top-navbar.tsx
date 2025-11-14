"use client"

import { Menu, Search, Bell, Settings, User, LogOut, Sliders, UserCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"

interface TopNavbarProps {
  onToggleSidebar: () => void
  isSidebarOpen: boolean
}

export default function TopNavbar({ onToggleSidebar, isSidebarOpen }: TopNavbarProps) {
  const [searchFocused, setSearchFocused] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const notificationRef = useRef<HTMLDivElement>(null)
  const settingsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationOpen(false)
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setSettingsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="glass h-20 border-b border-border/30 flex items-center justify-between px-6 lg:px-8 z-40 relative">
      {/* Left Side */}
      <div className="flex items-center gap-4 lg:gap-6 flex-1">
        <button
          onClick={onToggleSidebar}
          className={cn(
            "p-2 rounded-lg transition-all duration-300 hover-lift",
            "text-sidebar-foreground hover:bg-sidebar-accent/50",
            "flex-shrink-0",
          )}
          aria-label="Toggle sidebar"
          aria-expanded={isSidebarOpen}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search Bar - hidden on mobile, visible on md and up */}
        <div
          className={cn(
            "glass hidden md:flex items-center gap-3 px-4 py-2 rounded-lg",
            "transition-all duration-300 flex-1 max-w-xs lg:max-w-md",
            searchFocused ? "ring-2 ring-primary" : "",
          )}
        >
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search analytics..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
          />
        </div>
      </div>

      {/* Right Side - User Profile & Actions */}
      <div className="flex items-center gap-2 lg:gap-4">
        {/* Notification Icon with Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className={cn(
              "p-2 rounded-lg transition-all duration-300",
              "text-sidebar-foreground hover:bg-sidebar-accent/50",
              "relative flex-shrink-0",
              notificationOpen ? "bg-sidebar-accent/50" : "",
            )}
            aria-label="Notifications"
            aria-expanded={notificationOpen}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full pulse-glow" />
          </button>

          {notificationOpen && (
            <div
              className={cn(
                "absolute right-0 mt-2 w-80 glass rounded-lg border border-border/30",
                "shadow-lg z-50 animate-fade-in",
              )}
            >
              <div className="p-4 border-b border-border/20">
                <h3 className="font-semibold text-foreground text-sm">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {[
                  {
                    id: 1,
                    title: "New User Signup",
                    message: "Sarah Johnson just signed up",
                    time: "2 min ago",
                    unread: true,
                  },
                  {
                    id: 2,
                    title: "Revenue Alert",
                    message: "Monthly revenue exceeded target",
                    time: "1 hour ago",
                    unread: true,
                  },
                  {
                    id: 3,
                    title: "System Update",
                    message: "Scheduled maintenance completed",
                    time: "3 hours ago",
                    unread: false,
                  },
                  {
                    id: 4,
                    title: "User Activity",
                    message: "Suspicious login detected",
                    time: "5 hours ago",
                    unread: false,
                  },
                ].map((notification) => (
                  <button
                    key={notification.id}
                    className={cn(
                      "w-full px-4 py-3 text-left border-b border-border/10",
                      "hover:bg-sidebar-accent/30 transition-colors duration-200",
                      notification.unread ? "bg-primary/5" : "",
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-foreground">{notification.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 truncate">{notification.message}</p>
                      </div>
                      {notification.unread && <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1" />}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                  </button>
                ))}
              </div>
              <div className="p-3 border-t border-border/20 text-center">
                <button className="text-xs text-primary hover:underline font-medium">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* Settings Icon with Dropdown */}
        <div className="relative" ref={settingsRef}>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={cn(
              "p-2 rounded-lg transition-all duration-300",
              "text-sidebar-foreground hover:bg-sidebar-accent/50",
              "hidden sm:block flex-shrink-0",
              settingsOpen ? "bg-sidebar-accent/50" : "",
            )}
            aria-label="Settings"
            aria-expanded={settingsOpen}
          >
            <Settings className="w-5 h-5" />
          </button>

          {settingsOpen && (
            <div
              className={cn(
                "absolute right-0 mt-2 w-56 glass rounded-lg border border-border/30",
                "shadow-lg z-50 animate-fade-in",
              )}
            >
              <div className="p-3 space-y-1">
                <button
                  onClick={() => setSettingsOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm",
                    "text-foreground hover:bg-sidebar-accent/50 transition-colors duration-200",
                  )}
                >
                  <UserCircle className="w-4 h-4" />
                  Profile
                </button>
                <button
                  onClick={() => setSettingsOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm",
                    "text-foreground hover:bg-sidebar-accent/50 transition-colors duration-200",
                  )}
                >
                  <Sliders className="w-4 h-4" />
                  Preferences
                </button>
                <div className="my-1 h-px bg-border/20" />
                <button
                  onClick={() => setSettingsOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm",
                    "text-destructive hover:bg-destructive/10 transition-colors duration-200",
                  )}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile - hidden on mobile, visible on md and up */}
        <div className="hidden md:flex items-center gap-3 pl-4 border-l border-border/30">
          <div className="text-right">
            <p className="text-sm font-semibold text-foreground">Alex Chen</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <button
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              "bg-gradient-to-br from-primary to-accent glow-accent",
              "transition-all duration-300 hover-lift flex-shrink-0",
            )}
            aria-label="User profile"
          >
            <User className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Mobile User Avatar Only */}
        <button
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center md:hidden",
            "bg-gradient-to-br from-primary to-accent glow-accent",
            "transition-all duration-300 hover-lift flex-shrink-0",
          )}
          aria-label="User profile"
        >
          <User className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  )
}
