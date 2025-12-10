import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Users,
  Shield,
  MapPin,
  Calendar,
  Compass,
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1728891333203-9e920c7bf9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBzYWZhcmklMjB0YW56YW5pYXxlbnwxfHx8fDE3NjMxMzA3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Experience Wild Tanzania",
      subtitle: "Discover the untamed beauty of the Serengeti",
    },
    {
      url: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGtpbGltYW5qYXJvfGVufDF8fHx8MTc2MzExNDg4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Conquer Kilimanjaro",
      subtitle: "Reach the roof of Africa with expert guides",
    },
    {
      url: "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW56aWJhciUyMGJlYWNofGVufDF8fHx8MTc2MzA5NDQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Relax in Zanzibar",
      subtitle: "Paradise beaches and turquoise waters await",
    },
    {
      url: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Vuc2V0JTIwc2FmYXJpfGVufDF8fHx8MTc2MzEzMDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Unforgettable Sunsets",
      subtitle: "Create memories that last a lifetime",
    },
  ];

  const destinations = [
    {
      name: "Serengeti",
      image:
        "https://images.unsplash.com/photo-1728891333203-9e920c7bf9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBzYWZhcmklMjB0YW56YW5pYXxlbnwxfHx8fDE3NjMxMzA3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Witness the Great Migration",
      price: "From $1,299",
    },
    {
      name: "Kilimanjaro",
      image:
        "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGtpbGltYW5qYXJvfGVufDF8fHx8MTc2MzExNDg4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Summit Africa's highest peak",
      price: "From $2,499",
    },
    {
      name: "Zanzibar",
      image:
        "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW56aWJhciUyMGJlYWNofGVufDF8fHx8MTc2MzA5NDQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Pristine beaches & culture",
      price: "From $899",
    },
    {
      name: "Ngorongoro",
      image:
        "https://images.unsplash.com/photo-1516494982030-fda424f96b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ29yb25nb3JvJTIwY3JhdGVyfGVufDF8fHx8MTc2MzA3OTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "World's largest caldera",
      price: "From $1,099",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      rating: 5,
      text: "The most incredible safari experience! LARA Tours exceeded all expectations. Our guide was knowledgeable and passionate about wildlife.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Marco Rossi",
      country: "Italy",
      rating: 5,
      text: "Climbing Kilimanjaro with LARA Tours was a dream come true. The team was professional, supportive, and made safety a priority.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Emma Watson",
      country: "United Kingdom",
      rating: 5,
      text: "Zanzibar was paradise! From the accommodation to the cultural tours, everything was perfectly organized. Highly recommend!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        {heroImages.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{ pointerEvents: index === currentSlide ? "auto" : "none" }}
          >
            <div className="relative h-full">
              <ImageWithFallback
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: index === currentSlide ? 0 : 20,
                      opacity: index === currentSlide ? 1 : 0,
                    }}
                    transition={{ delay: 0.3 }}
                  >
                    <h1 className="text-5xl md:text-7xl mb-4 text-white font-bold">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        onClick={() => onNavigate("tours")}
                        className="bg-[--terracotta] hover:bg-[--sunset-orange] text-lg px-8"
                      >
                        Explore Tours
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => onNavigate("contact")}
                        className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[--earth-brown] text-lg px-8"
                      >
                        Plan Your Trip
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-20 bg-gradient-to-b from-white to-[--sand]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[--terracotta]">Popular Destinations</Badge>
            <h2 className="text-4xl md:text-5xl mb-4 text-[--earth-brown]">
              Explore Tanzania's Wonders
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From wildlife safaris to mountain adventures and beach escapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-2xl mb-1 text-white">{destination.name}</h3>
                      <p className="text-sm text-white/90 mb-2">
                        {destination.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[--golden]">{destination.price}</span>
                        <Button
                          size="sm"
                          onClick={() => onNavigate("destinations")}
                          className="bg-[--terracotta] hover:bg-[--sunset-orange]"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[--secondary]">Why Choose LARA Tours</Badge>
            <h2 className="text-4xl md:text-5xl mb-4 text-[--earth-brown]">
              Your Trusted Travel Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Over 15 years of excellence in African tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Licensed & Certified",
                description:
                  "Fully licensed tour operator with international certifications",
              },
              {
                icon: Users,
                title: "Expert Guides",
                description:
                  "Professional, multilingual guides with deep local knowledge",
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Comprehensive insurance and 24/7 emergency support",
              },
              {
                icon: Heart,
                title: "5000+ Happy Clients",
                description:
                  "Trusted by travelers from over 60 countries worldwide",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5000+", label: "Happy Travelers" },
              { value: "50+", label: "Tour Packages" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-[--terracotta] mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-[--sand]/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[--golden]">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl mb-4 text-[--earth-brown]">
              What Our Travelers Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <ImageWithFallback
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-[--golden] text-[--golden]"
                          />
                        )
                      )}
                    </div>
                    <h4 className="text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].country}
                    </p>
                  </div>
                </div>
                <p className="text-lg italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-[--terracotta] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[--terracotta] to-[--sunset-orange] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Ready for Your African Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let us create a personalized itinerary just for you. Contact our
            travel experts today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("contact")}
              className="bg-white text-[--terracotta] hover:bg-white/90 text-lg px-8"
            >
              Book Your Safari
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("tours")}
              className="border-white text-white hover:bg-white/10 text-lg px-8"
            >
              View All Tours
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
