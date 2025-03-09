import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar, Search, Users, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-green-600 flex items-center justify-center">
              <MapPin className="size-5 text-white" />
            </div>
            <span className="text-xl font-bold">PlaySpot</span>
          </div>
          {/* <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-green-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-green-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-green-600 transition-colors">
              Pricing
            </Link>
          </nav> */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login" className="text-sm font-medium hover:text-green-600 transition-colors">
              Log in
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">Sign up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Book Sports Turfs Near You in Seconds
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Find and book the perfect turf for your game. No more phone calls or waiting. Just search, book, and
                    play.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=700&width=1200"
                    alt="Hero image of a football turf"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Book a Turf
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to find and book sports turfs in your area.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Search className="h-6 w-6 text-green-800" />
                </div>
                <h3 className="text-xl font-bold">Find Nearby Turfs</h3>
                <p className="text-center text-muted-foreground">
                  Discover sports turfs near you with our advanced search filters.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Calendar className="h-6 w-6 text-green-800" />
                </div>
                <h3 className="text-xl font-bold">Easy Booking</h3>
                <p className="text-center text-muted-foreground">
                  Book your preferred time slot with just a few clicks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Users className="h-6 w-6 text-green-800" />
                </div>
                <h3 className="text-xl font-bold">Team Management</h3>
                <p className="text-center text-muted-foreground">
                  Invite friends and manage your team all in one place.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Book a Turf in 3 Simple Steps</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed to make booking sports turfs as easy as possible.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">1</div>
                <h3 className="text-xl font-bold">Search</h3>
                <p className="text-center text-muted-foreground">Enter your location and find turfs near you.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">2</div>
                <h3 className="text-xl font-bold">Book</h3>
                <p className="text-center text-muted-foreground">Select your preferred date and time slot.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">3</div>
                <h3 className="text-xl font-bold">Play</h3>
                <p className="text-center text-muted-foreground">Receive confirmation and enjoy your game!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our users have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-green-500 text-green-500 dark:fill-green-400 dark:text-green-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "PlaySpot made it so easy to find and book a football turf for our weekly games. No more calling
                    around!"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="size-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-medium">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">Football Enthusiast</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-green-500 text-green-500 dark:fill-green-400 dark:text-green-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "I love how I can see all available time slots at once and book instantly. Saved me so much time!"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="size-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-medium">Sarah Miller</p>
                    <p className="text-xs text-muted-foreground">Basketball Coach</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-green-500 text-green-500 dark:fill-green-400 dark:text-green-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The team management feature is a game-changer. I can invite all my friends with just one link!"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="size-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Cricket Team Captain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Book Your First Turf?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of sports enthusiasts who book turfs through our platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-green-600 flex items-center justify-center">
              <MapPin className="size-5 text-white" />
            </div>
            <span className="text-xl font-bold">PlaySpot</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} PlaySpot. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-green-600">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-green-600">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-green-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

