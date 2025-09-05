// src/app/page.tsx - Homepage animat cu Framer Motion
import type { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Clock, Phone, Coffee,  Star } from "lucide-react"

// Import client components
import MobileNavigation from "../components/interactive/MobileNavigation"
import ReservationDialog from "../components/interactive/ReservationDialog"
import ContactDialog from "../components/interactive/ContactDialog"
import MenuTabs from "../components/interactive/MenuTabs"

// Import animation components
import FadeIn from "../components/animations/FadeIn"
import SlideUp from "../components/animations/SlideUp"
import SlideInLeft from "../components/animations/SlideInLeft"
import SlideInRight from "../components/animations/SlideInRight"
import StaggerContainer from "../components/animations/StaggerContainer"
import StaggerItem from "../components/animations/StaggerItem"
import ScrollReveal from "../components/animations/ScrollReveal"
import HoverLift from "../components/animations/HoverLift"
import FloatingElements from "../components/animations/FloatingElements"

import CoffeeBreath from "../components/animations/CoffeeBreath"
import SteamEffect from "../components/animations/SteamEffect"
import TypeWriterText from "../components/animations/TypeWritterText";

export const metadata: Metadata = {
  title: 'Zuma Coffee Focsani - Cafenea cu Spatiu de Lucru | Carrefour Focsani',
  description: 'Cea mai buna cafenea din Focsani cu spatiu coworking. Cafea de specialitate, wifi gratuit, zona laptop-friendly langa Carrefour Focsani. Program 7-22.',
  keywords: 'cafenea Focsani, coffee shop Focsani, coworking Focsani, cafenea Carrefour Focsani, spatiu de lucru Focsani, cafea specialitate Focsani, breakfast Focsani',
  openGraph: {
    title: 'Zuma Coffee - Cafenea Premium Focsani',
    description: 'Cafenea cu spatiu de coworking in Focsani. Cafea de specialitate si atmosfera perfecta pentru lucru.',
    locale: 'ro_RO',
  }
}

export default function Home() {
  return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <FadeIn duration={0.8}>
          <nav className="bg-white border-b border-stone-100 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/95">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                  <CoffeeBreath>
                    <h1 className="text-2xl font-bold text-stone-700 relative">
                      ☕ Zuma Coffee
                      <SteamEffect className="absolute -top-2 left-0" />
                    </h1>
                  </CoffeeBreath>
                </div>

                {/* Desktop Navigation */}
                <SlideInRight delay={0.3}>
                  <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">
                      Acasa
                    </a>
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">
                      Meniu
                    </a>
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">
                      Coworking
                    </a>
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">
                      Despre
                    </a>
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">
                      Contact
                    </a>
                  </div>
                </SlideInRight>

                {/* CTA Button */}
                <SlideInRight delay={0.5}>
                  <div className="hidden md:flex">
                    <ReservationDialog />
                  </div>
                </SlideInRight>

                {/* Mobile menu */}
                <MobileNavigation />
              </div>
            </div>
          </nav>
        </FadeIn>

        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-br from-white to-stone-50 py-16 lg:py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Hero Text */}
              <div className="space-y-6">
                <SlideInLeft delay={0.2}>
                  <div className="space-y-4">
                    <FloatingElements intensity={8} duration={6}>
                      <Badge variant="secondary" className="w-fit">
                        <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                        Cel mai bun rating Focsani
                      </Badge>
                    </FloatingElements>

                    <SlideUp delay={0.4}>
                      <h1 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
                        Cafenea Premium in
                        <span className="text-coffee-primary block mt-2">
                        <TypeWriterText text="Focsani" delay={1200} speed={80} />
                      </span>
                      </h1>
                    </SlideUp>
                  </div>
                </SlideInLeft>

                <SlideInLeft delay={0.8}>
                  <p className="text-xl text-stone-600 leading-relaxed">
                    Descopera cea mai buna <strong>cafenea din Focsani</strong> cu spatiu de coworking modern.
                    Cafea de specialitate, wifi gratuit si atmosfera perfecta pentru lucru sau relaxare.
                  </p>
                </SlideInLeft>

                <SlideUp delay={1.0}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <HoverLift scale={1.05}>
                      <Button size="lg" className="bg-coffee-primary hover:bg-coffee-accent text-white" asChild>
                        <a href="#">
                          <Coffee className="w-5 h-5 mr-2" />
                          Vezi Meniul
                        </a>
                      </Button>
                    </HoverLift>

                    <HoverLift scale={1.02}>
                      <ReservationDialog variant="outline" />
                    </HoverLift>
                  </div>
                </SlideUp>

                {/* Local SEO Info */}
                <SlideUp delay={1.2}>
                  <Alert className="border-coffee-primary/20 bg-coffee-light/50">
                    <MapPin className="h-4 w-4 text-coffee-primary" />
                    <AlertDescription className="text-stone-700">
                      <strong>Langa Carrefour Focsani</strong> - usor de gasit, parcare gratuita. Program 7:00-22:00
                    </AlertDescription>
                  </Alert>
                </SlideUp>
              </div>

              {/* Hero Image Card */}
              <SlideInRight delay={0.6}>
                <HoverLift lift={-12} scale={1.03}>
                  <Card className="border-stone-200 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-gradient-to-br from-coffee-light to-stone-100 flex items-center justify-center relative">
                        <FloatingElements intensity={5} duration={8}>
                          <div className="text-center text-stone-600">
                            <CoffeeBreath>
                              <div className="text-6xl mb-4 relative">
                                ☕
                                <SteamEffect className="absolute top-0 left-1/2 -translate-x-1/2" />
                              </div>
                            </CoffeeBreath>
                            <p className="text-lg font-medium">Interior cafenea<br />Zuma Coffee Focsani</p>
                          </div>
                        </FloatingElements>
                      </div>
                    </CardContent>
                  </Card>
                </HoverLift>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <ScrollReveal>
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <SlideUp delay={0.2}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                    De ce Zuma Coffee este cea mai buna cafenea din Focsani?
                  </h2>
                  <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                    Combinam cafeaua de specialitate cu serviciile moderne de coworking
                  </p>
                </div>
              </SlideUp>

              <StaggerContainer delayChildren={0.4} staggerChildren={0.2}>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Feature Cards */}
                  <StaggerItem>
                    <HoverLift lift={-10} scale={1.03}>
                      <Card className="border-stone-200 hover:shadow-xl transition-all duration-300 h-full">
                        <CardHeader className="text-center">
                          <CoffeeBreath>
                            <div className="text-5xl mb-4 relative">
                              ☕
                              <SteamEffect />
                            </div>
                          </CoffeeBreath>
                          <CardTitle className="text-2xl">Cafea de Specialitate</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          <CardDescription className="text-stone-600 leading-relaxed">
                            Boabe premium proaspat prajite si preparate de baristii nostri experimentati.
                            Cea mai buna <strong>cafea din Focsani</strong> te asteapta.
                          </CardDescription>
                          <div className="mt-4 flex justify-center gap-2">
                            <Badge variant="outline">Premium</Badge>
                            <Badge variant="outline">Fresh</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverLift>
                  </StaggerItem>

                  <StaggerItem>
                    <HoverLift lift={-10} scale={1.03}>
                      <Card className="border-stone-200 hover:shadow-xl transition-all duration-300 h-full">
                        <CardHeader className="text-center">
                          <FloatingElements intensity={6} duration={5}>
                            <div className="text-5xl mb-4">💻</div>
                          </FloatingElements>
                          <CardTitle className="text-2xl">Coworking Modern</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          <CardDescription className="text-stone-600 leading-relaxed">
                            <strong>Spatiu de lucru Focsani</strong> cu wifi de mare viteza, prize la fiecare masa
                            si atmosfera linistita pentru productivitate maxima.
                          </CardDescription>
                          <div className="mt-4 flex justify-center gap-2">
                            <Badge variant="outline">WiFi Rapid</Badge>
                            <Badge variant="outline">Liniste</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverLift>
                  </StaggerItem>

                  <StaggerItem>
                    <HoverLift lift={-10} scale={1.03}>
                      <Card className="border-stone-200 hover:shadow-xl transition-all duration-300 h-full">
                        <CardHeader className="text-center">
                          <FloatingElements intensity={4} duration={7}>
                            <div className="text-5xl mb-4">📍</div>
                          </FloatingElements>
                          <CardTitle className="text-2xl">Locatie Perfecta</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          <CardDescription className="text-stone-600 leading-relaxed">
                            Situata strategic <strong>langa Carrefour Focsani</strong>, cu parcare usor accesibila
                            si transport public in apropiere.
                          </CardDescription>
                          <div className="mt-4 flex justify-center gap-2">
                            <Badge variant="outline">Parcare</Badge>
                            <Badge variant="outline">Transport</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverLift>
                  </StaggerItem>
                </div>
              </StaggerContainer>

              {/* Additional SEO Content */}
              <SlideUp delay={1.0}>
                <div className="mt-16 text-center">
                  <p className="text-stone-600 max-w-4xl mx-auto">
                    Fie ca lucrezi de acasa sau ai nevoie de un <strong>coffee shop Focsani</strong> pentru intalniri business,
                    Zuma Coffee ofera experienta completa: breakfast fresh, pranz rapid si desert delicios,
                    toate intr-o atmosfera laptop-friendly.
                  </p>
                </div>
              </SlideUp>
            </div>
          </section>
        </ScrollReveal>

        {/* Menu Section with Tabs */}
        <ScrollReveal>
          <section id="meniu" className="py-20 bg-gradient-to-b from-stone-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <SlideUp>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                    Meniul Cafenelei Zuma Coffee Focsani
                  </h2>
                  <p className="text-xl text-stone-600">
                    De la espresso perfect la <strong>breakfast Focsani</strong> si deserturi artizanale
                  </p>
                </div>
              </SlideUp>

              {/* Client Component for Tabs with animations applied inside */}
              <SlideUp delay={0.3}>
                <MenuTabs />
              </SlideUp>

              <SlideUp delay={0.5}>
                <div className="text-center mt-12">
                  <HoverLift scale={1.05}>
                    <Button size="lg" className="bg-coffee-primary hover:bg-coffee-accent text-white">
                      <Coffee className="w-5 h-5 mr-2" />
                      Vezi Meniul Complet
                    </Button>
                  </HoverLift>
                  <p className="mt-4 text-stone-600">
                    Preturi accesibile pentru cea mai buna calitate in <strong>Focsani</strong>
                  </p>
                </div>
              </SlideUp>
            </div>
          </section>
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal>
          <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <SlideUp>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                    Viziteaza Zuma Coffee Focsani
                  </h2>
                  <p className="text-xl text-stone-600">
                    Te asteptam in cea mai moderna <strong>cafenea din Focsani</strong>
                  </p>
                </div>
              </SlideUp>

              <div className="grid md:grid-cols-2 gap-16">
                {/* Contact Info Cards */}
                <SlideInLeft delay={0.3}>
                  <div className="space-y-6">
                    <HoverLift lift={-5} scale={1.02}>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-coffee-primary" />
                            Adresa
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-stone-700 font-medium">Str. Republicii Nr. 45, Focsani</p>
                          <p className="text-sm text-stone-600 mt-1">Langa Carrefour Focsani - parcare gratuita</p>
                        </CardContent>
                      </Card>
                    </HoverLift>

                    <HoverLift lift={-5} scale={1.02}>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-coffee-primary" />
                            Program
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-stone-700 font-medium">Luni - Duminica: 7:00 - 22:00</p>
                          <p className="text-sm text-stone-600 mt-1">Breakfast de la 7:00, ultima comanda 21:30</p>
                        </CardContent>
                      </Card>
                    </HoverLift>

                    <HoverLift lift={-5} scale={1.02}>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-coffee-primary" />
                            Contact
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-stone-700 font-medium">0237 123 456</p>
                          <p className="text-sm text-stone-600 mt-1">Rezervari spatiu coworking</p>
                        </CardContent>
                      </Card>
                    </HoverLift>

                    <HoverLift scale={1.02}>
                      <ContactDialog />
                    </HoverLift>

                    {/* SEO Local Business Info */}
                    <HoverLift lift={-5} scale={1.02}>
                      <Card className="border-coffee-primary/20">
                        <CardHeader>
                          <CardTitle className="text-stone-800">De ce sa alegi Zuma Coffee?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm text-stone-600">
                            <div className="flex items-center gap-2">
                              <FloatingElements intensity={2} duration={3}>
                                <Badge variant="outline" className="text-xs">4.8/5</Badge>
                              </FloatingElements>
                              <span>Cea mai buna <strong>cafenea Focsani</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">Modern</Badge>
                              <span><strong>Coworking space Focsani</strong> confortabil</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">Free</Badge>
                              <span>WiFi gratuit de mare viteza pentru laptop</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverLift>
                  </div>
                </SlideInLeft>

                {/* Map Card */}
                <SlideInRight delay={0.5}>
                  <HoverLift lift={-8} scale={1.02}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Locatie</CardTitle>
                        <CardDescription>Ne gasesti aici in Focsani</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-stone-100 rounded-lg h-80 flex items-center justify-center">
                          <FloatingElements intensity={3} duration={6}>
                            <div className="text-center text-stone-600">
                              <div className="text-5xl mb-4">🗺️</div>
                              <p className="font-medium">Harta Google Maps</p>
                              <p className="text-sm mt-2">Zuma Coffee Focsani<br />langa Carrefour</p>
                            </div>
                          </FloatingElements>
                        </div>

                        <Separator className="my-4" />

                        <div className="space-y-2 text-sm text-stone-600">
                          <div className="flex justify-between">
                            <span><strong>Transport public:</strong></span>
                            <span>Statii la 2 minute</span>
                          </div>
                          <div className="flex justify-between">
                            <span><strong>Parcare:</strong></span>
                            <span>Gratuita Carrefour</span>
                          </div>
                          <div className="flex justify-between">
                            <span><strong>Acces:</strong></span>
                            <span>Rampa dizabilitati</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverLift>
                </SlideInRight>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Footer */}
        <FadeIn>
          <footer className="bg-stone-50 border-t border-stone-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Brand */}
                <SlideUp delay={0.2}>
                  <Card className="border-none shadow-none bg-transparent">
                    <CardHeader className="px-0">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <CoffeeBreath>
                        <span className="relative">
                          ☕
                          <SteamEffect className="absolute top-0 left-0" />
                        </span>
                        </CoffeeBreath>
                        Zuma Coffee
                      </CardTitle>
                      <CardDescription>
                        Cea mai buna <strong>cafenea din Focsani</strong> cu spatiu de coworking modern.
                        Cafea premium si atmosfera perfecta pentru lucru.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                      <div className="flex gap-2">
                        <HoverLift scale={1.05}>
                          <Button variant="outline" size="sm" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                          </Button>
                        </HoverLift>
                        <HoverLift scale={1.05}>
                          <Button variant="outline" size="sm" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                          </Button>
                        </HoverLift>
                        <HoverLift scale={1.05}>
                          <Button variant="outline" size="sm" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">Google</a>
                          </Button>
                        </HoverLift>
                      </div>
                    </CardContent>
                  </Card>
                </SlideUp>

                {/* Quick Links */}
                <SlideUp delay={0.4}>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4">Link-uri Rapide</h4>
                    <div className="space-y-2">
                      <HoverLift scale={1.02}>
                        <Button variant="link" className="h-auto p-0 text-stone-600 justify-start" asChild>
                          <a href="#">Meniu Cafenea</a>
                        </Button>
                      </HoverLift>
                      <HoverLift scale={1.02}>
                        <Button variant="link" className="h-auto p-0 text-stone-600 justify-start" asChild>
                          <a href="#">Spatiu Coworking</a>
                        </Button>
                      </HoverLift>
                      <HoverLift scale={1.02}>
                        <Button variant="link" className="h-auto p-0 text-stone-600 justify-start" asChild>
                          <a href="#">Contact Focsani</a>
                        </Button>
                      </HoverLift>
                      <HoverLift scale={1.02}>
                        <Button variant="link" className="h-auto p-0 text-stone-600 justify-start">
                          Rezervari Online
                        </Button>
                      </HoverLift>
                    </div>
                  </div>
                </SlideUp>

                {/* Local SEO Info */}
                <SlideUp delay={0.6}>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4">Servicii Focsani</h4>
                    <div className="space-y-2">
                      <div className="flex gap-2 items-center">
                        <FloatingElements intensity={2} duration={4}>
                          <Badge variant="outline" className="text-xs">Premium</Badge>
                        </FloatingElements>
                        <span className="text-sm text-stone-600"><strong>Coffee shop Focsani</strong></span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <FloatingElements intensity={1} duration={5}>
                          <Badge variant="outline" className="text-xs">Modern</Badge>
                        </FloatingElements>
                        <span className="text-sm text-stone-600"><strong>Coworking space</strong></span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <FloatingElements intensity={3} duration={3}>
                          <Badge variant="outline" className="text-xs">Fresh</Badge>
                        </FloatingElements>
                        <span className="text-sm text-stone-600"><strong>Breakfast Focsani</strong></span>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>

              <Separator className="my-8" />

              <FadeIn delay={0.8}>
                <div className="text-center">
                  <p className="text-stone-600">
                    © 2024 Zuma Coffee Focsani. Toate drepturile rezervate.
                    | <strong>Cafenea Carrefour Focsani</strong> | Coworking Space Modern
                  </p>
                </div>
              </FadeIn>
            </div>
          </footer>
        </FadeIn>
      </div>
  )
}