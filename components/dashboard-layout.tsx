"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import TopNavbar from "./top-navbar"
import DashboardPage from "./pages/dashboard-page"
import AnalyticsPage from "./pages/analytics-page"
import ProfilePage from "./pages/profile-page"

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
    setSidebarOpen(false)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onNavigate={handleNavigation} currentPage={currentPage} />

      {/* Mobile Overlay - closes sidebar when clicked */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Top Navbar */}
        <TopNavbar onToggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />

        {/* Page Content with Routing */}
        {currentPage === "dashboard" && <DashboardPage />}
        {currentPage === "analytics" && <AnalyticsPage />}
        {currentPage === "profile" && <ProfilePage />}
      </div>
    </div>
  )
}
