import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, MapPin, Phone, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
              {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
              >
                <source src="/videos/drill.mp4" type="video/mp4" /> */}
                {/* Fallback to image if video fails to load */}
                <Image
                  src="/images/shijyanti_group.jpg"
                  alt="Military Boys Hostel Karad - Shijyanti Group"
                  fill
                  className="object-cover"
                  priority
                />
              {/* </video> */}
            </div>
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative container mx-auto px-4 py-32 sm:py-48 lg:py-56">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Military Boys Hostel Karad
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Providing discipline, education, and a nurturing environment for young minds to grow and excel.
              </p>
              <div className="mt-10 flex gap-4">
                <Button asChild size="lg">
                  <Link href="/admission">Apply for Admission</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Our Hostel</h2>
              <p className="mt-4 text-lg text-gray-600">
                Military Boys Hostel Karad is dedicated to providing a disciplined and supportive environment for
                students to thrive academically and personally.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Quality Education</h3>
                    <p className="text-gray-600">
                      We provide an environment conducive to learning with dedicated study hours and academic support.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Discipline & Character</h3>
                    <p className="text-gray-600">
                      We instill military-style discipline and values that help shape character and build leadership
                      skills.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Location</h3>
                    <p className="text-gray-600">
                      Located on Vita-Karad Road near Maharashtra Bank, Saidapur, Karad, our hostel offers a peaceful
                      environment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hostel Life</h2>
              <p className="mt-4 text-lg text-gray-600">
                Take a glimpse into the daily activities and special moments at our hostel.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/shivjyanti.jpg"
                  alt="Festival Celebration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors flex items-end">
                  <p className="text-white p-2 font-medium">Festival Celebrations</p>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/videos/drill.mp4?height=300&width=300"
                  alt="PT Sessions"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors flex items-end">
                  <p className="text-white p-2 font-medium">PT Sessions</p>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Study Rooms"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors flex items-end">
                  <p className="text-white p-2 font-medium">Study Rooms</p>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/game.jpg?height=300&width=300"
                  alt="Play Time"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors flex items-end">
                  <p className="text-white p-2 font-medium">Play Time</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get in Touch</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Have questions about admissions or want to learn more about our hostel? Contact us today.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mt-0.5 mr-3" />
                      <p className="text-gray-700">
                        Vita-Karad Road, Near Maharashtra Bank
                        <br />
                        Saidapur, Karad 415124
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary mt-0.5 mr-3" />
                      <div>
                        <p className="text-gray-700">+91 8440983111</p>
                        <p className="text-gray-700">+91 7875456896</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Hostel Building"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

