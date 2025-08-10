"use client"

import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  MessageCircle,
  ExternalLink,
  MapPin,
  Calendar,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Avatar from "@/assets/ImRaffyDev.jpg"
import { useState } from "react"

export default function NFCCard() {
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyToClipboard = async (text: string, type: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === "phone") {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      } else {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      }
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-zinc-800/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-zinc-700/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Card className="w-full max-w-md bg-gradient-to-b from-zinc-900/95 to-black/95 border border-zinc-800/50 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
        {/* Card glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="p-8 text-center relative z-10">
          {/* Profile Section */}
          <div className="mb-8">
            <div className="relative mx-auto mb-6">
              {/* Rotating glow rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-36 h-36 rounded-full bg-gradient-to-r from-transparent via-silver-400/30 to-transparent blur-sm"></div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="w-32 h-32 rounded-full bg-gradient-to-l from-transparent via-zinc-300/20 to-transparent blur-md mx-auto mt-2"></div>
              </div>

              {/* Pulsing outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-silver-400/20 via-zinc-300/30 to-silver-400/20 rounded-full blur-xl animate-pulse-glow"></div>

              {/* Main avatar */}
              <div className="w-28 h-28 bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800 rounded-full mx-auto flex items-center justify-center shadow-2xl ring-4 ring-zinc-800/50 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                <Image
                  src={Avatar || "/placeholder.svg"}
                  alt="Raffy Uanan"
                  className="w-full h-full object-cover rounded-full shadow-lg"
                  priority
                />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Raffy Uanan
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 rounded-full border border-zinc-600/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <p className="text-zinc-300 text-sm font-medium">Fullstack Developer</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 mb-8">
            <button
              onClick={() => copyToClipboard("09458014737", "phone")}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-zinc-800/60 to-zinc-700/60 hover:from-zinc-700/80 hover:to-zinc-600/80 rounded-xl transition-all duration-300 group border border-zinc-700/30 hover:border-zinc-600/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-600/50 transition-colors">
                  <Phone className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                </div>
                <span className="text-white font-medium">09458014737</span>
              </div>
              {copiedPhone ? (
                <Check className="w-4 h-4 text-green-400 transition-colors" />
              ) : (
                <Copy className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              )}
            </button>

            <button
              onClick={() => copyToClipboard("raffysolis123@gmail.com", "email")}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-zinc-800/60 to-zinc-700/60 hover:from-zinc-700/80 hover:to-zinc-600/80 rounded-xl transition-all duration-300 group border border-zinc-700/30 hover:border-zinc-600/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-600/50 transition-colors">
                  <Mail className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                </div>
                <span className="text-white font-medium">raffysolis123@gmail.com</span>
              </div>
              {copiedEmail ? (
                <Check className="w-4 h-4 text-green-400 transition-colors" />
              ) : (
                <Copy className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
              <h3 className="text-zinc-400 text-xs uppercase tracking-widest font-semibold">Connect</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12 bg-gradient-to-r from-zinc-800/60 to-zinc-700/60 border-zinc-600/30 hover:from-blue-900/40 hover:to-blue-800/40 hover:border-blue-600/50 text-white hover:text-white transition-all duration-300 group"
                asChild
              >
                <a href="https://www.facebook.com/raffy.uanan.10/" className="flex items-center justify-center gap-2">
                  <Facebook className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              </Button>

              <Button
                variant="outline"
                className="h-12 bg-gradient-to-r from-zinc-800/60 to-zinc-700/60 border-zinc-600/30 hover:from-pink-900/40 hover:to-purple-800/40 hover:border-pink-600/50 text-white hover:text-white transition-all duration-300 group"
                asChild
              >
                <a href="https://www.instagram.com/raffyuanan" className="flex items-center justify-center gap-2">
                  <Instagram className="w-4 h-4 group-hover:text-pink-400 transition-colors" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </Button>

              <Button
                variant="outline"
                className="h-12 bg-gradient-to-r from-zinc-800/60 to-zinc-700/60 border-zinc-600/30 hover:from-indigo-900/40 hover:to-indigo-800/40 hover:border-indigo-600/50 text-white hover:text-white transition-all duration-300 group"
                asChild
              >
                <a
                  href="https://discordapp.com/users/402317453935378445"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
                  <span className="text-sm font-medium">Discord</span>
                </a>
              </Button>

              <Button
                className="h-12 bg-gradient-to-r from-white to-zinc-200 text-black hover:from-zinc-200 hover:to-zinc-300 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                asChild
              >
                <a href="https://imraffydev.com" className="flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Portfolio</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Stats or Additional Info */}
          <div className="mt-8 pt-6 border-t border-zinc-800/50">
            <div className="flex items-center justify-center gap-6 text-xs text-zinc-500">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Philippines</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>2025</span>
              </div>
            </div>
            <p className="text-zinc-600 text-xs mt-3 font-medium">NFC Digital Card | ImRaffyDev</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
