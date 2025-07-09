"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Trophy, Music, Heart, Mail, Phone, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const events = [
    {
      id: 1,
      name: "Shazam",
      subtitle: "Sports Week",
      description:
        "TSEC's premier sports festival bringing together athletes from across the college. Experience the thrill of competition with various indoor and outdoor sports events.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 15-22, 2024",
      location: "TSEC Campus",
      highlights: ["Cricket Tournament", "Football Championship", "Basketball League", "Athletics Meet"],
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "TSEC Marathon",
      subtitle: "Run for a Cause",
      description:
        "Annual marathon event promoting fitness and community spirit. Join hundreds of participants in this charitable run supporting local causes.",
      image: "/placeholder.svg?height=300&width=500",
      date: "January 28, 2024",
      location: "Starting from TSEC Campus",
      highlights: ["5K Fun Run", "10K Challenge", "Half Marathon", "Charity Drive"],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Faisca",
      subtitle: "Cultural Week",
      description:
        "TSEC's vibrant cultural festival celebrating art, music, dance, and creativity. A week-long extravaganza showcasing student talents.",
      image: "/placeholder.svg?height=300&width=500",
      date: "February 10-17, 2024",
      location: "TSEC Auditorium & Campus",
      highlights: ["Dance Competition", "Music Concerts", "Drama Festival", "Art Exhibition"],
      icon: <Music className="w-6 h-6" />,
    },
  ]

  const councilMembers = [
    { name: "President", role: "Student Council President" },
    { name: "Vice President", role: "Student Council Vice President" },
    { name: "Secretary", role: "General Secretary" },
    { name: "Treasurer", role: "Finance Head" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900">TSEC Student Council</h1>
                <p className="text-xs text-gray-600">Thadomal Shahani Engineering College</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 transition-colors">
                Events
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              Welcome to TSEC Student Council
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Students,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Building Tomorrow
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The official student council of Thadomal Shahani Engineering College, dedicated to fostering academic
              excellence, cultural diversity, and student welfare through innovative events and initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About TSEC Student Council</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bridging the gap between students and administration while creating memorable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The TSEC Student Council serves as the voice of the student body at Thadomal Shahani Engineering
                College. We are committed to enhancing the overall college experience through organizing impactful
                events, addressing student concerns, and fostering a vibrant campus community.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From sports competitions to cultural festivals, from academic support to social initiatives, we strive
                to create opportunities that help students grow both personally and professionally.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600">50+</div>
                  <div className="text-sm text-gray-600">Events Annually</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Student Representation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Acting as the official voice of students, we represent your interests and concerns to the college
                    administration.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    Event Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Organizing diverse events including sports competitions, cultural festivals, and academic workshops
                    throughout the year.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    Community Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Leading social initiatives and charitable activities that make a positive impact on our community
                    and society.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Signature Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the best of TSEC through our flagship events that bring together sports, culture, and community
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {events.map((event) => (
                <CarouselItem key={event.id}>
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.name}
                          fill
                          className="object-cover rounded-l-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-l-lg" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="flex items-center gap-2 mb-2">
                            {event.icon}
                            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                              {event.subtitle}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold">{event.name}</h3>
                        </div>
                      </div>

                      <CardContent className="p-8">
                        <div className="space-y-6">
                          <p className="text-gray-600 leading-relaxed">{event.description}</p>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Event Highlights</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {event.highlights.map((highlight, index) => (
                                <Badge key={index} variant="outline" className="justify-center py-1">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get in touch via email</p>
                <Button variant="outline" className="w-full bg-transparent">
                  studentcouncil@tsec.edu
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with us</p>
                <Button variant="outline" className="w-full bg-transparent">
                  +91 98765 43210
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center gap-2 mb-4">
                  <Instagram className="w-6 h-6 text-pink-600" />
                  <Facebook className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                <p className="text-gray-600 mb-4">Stay updated on social media</p>
                <Button variant="outline" className="w-full bg-transparent">
                  @tsec_council
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">TSEC Student Council</h3>
                  <p className="text-sm text-gray-400">Thadomal Shahani Engineering College</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students and building a vibrant campus community through innovative events and meaningful
                initiatives.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Events</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Shazam - Sports Week</li>
                <li>TSEC Marathon</li>
                <li>Faisca - Cultural Week</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TSEC Student Council. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
