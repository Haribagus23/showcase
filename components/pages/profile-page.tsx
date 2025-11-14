"use client"

import { useEffect, useState } from "react"
import { Mail, MapPin, Phone, Calendar, Settings, LogOut } from "lucide-react"

export default function ProfilePage() {
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

      <div className="relative z-10 p-8 space-y-8 animate-fade-in-page">
        {/* Header */}
        <div className="fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Profile</h1>
          <p className="text-muted-foreground">Manage your account information and preferences.</p>
        </div>

        {/* Profile Card */}
        <div className="glass rounded-xl p-8 border border-border/30">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-accent">
                <span className="text-4xl font-bold text-white">AJ</span>
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-2">Alex Johnson</h2>
              <p className="text-muted-foreground mb-4">Premium User • Member since Jan 2023</p>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300">
                  Edit Profile
                </button>
                <button className="px-4 py-2 border border-border/30 text-foreground rounded-lg hover:bg-card/50 transition-all duration-300">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">alex.johnson@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Join Date</p>
                  <p className="text-foreground font-medium">January 15, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Account Preferences */}
          <div className="glass rounded-xl p-8 border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Preferences</h3>
            </div>
            <div className="space-y-4">
              {["Two-Factor Authentication", "Email Notifications", "Marketing Emails", "Data Privacy"].map(
                (pref, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-foreground">{pref}</span>
                    <div className="w-12 h-6 bg-primary/20 rounded-full p-1 cursor-pointer hover:bg-primary/30 transition-colors">
                      <div className="w-5 h-5 bg-primary rounded-full ml-auto transition-all" />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="glass rounded-xl p-8 border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <LogOut className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-semibold text-foreground">Account Actions</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 border border-destructive/30 text-destructive rounded-lg hover:bg-destructive/10 transition-all duration-300 font-medium">
                Logout
              </button>
              <button className="w-full px-4 py-3 border border-destructive/50 text-destructive rounded-lg hover:bg-destructive/10 transition-all duration-300 font-medium">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
