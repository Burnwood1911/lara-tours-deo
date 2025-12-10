import { motion } from "motion/react";
import { MapPin, Calendar, Thermometer, Camera } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DestinationsPageProps {
  onNavigate: (page: string) => void;
}

export function DestinationsPage({ onNavigate }: DestinationsPageProps) {
  const destinations = [
    {
      name: "Serengeti National Park",
      region: "Northern Tanzania",
      image:
        "https://images.unsplash.com/photo-1728891333203-9e920c7bf9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBzYWZhcmklMjB0YW56YW5pYXxlbnwxfHx8fDE3NjMxMzA3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Home to the Great Migration and Africa's highest concentration of wildlife",
      bestTime: "June - October",
      highlights: ["Great Migration", "Big Five", "Endless plains", "Hot air balloons"],
    },
    {
      name: "Mount Kilimanjaro",
      region: "Northern Tanzania",
      image:
        "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGtpbGltYW5qYXJvfGVufDF8fHx8MTc2MzExNDg4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Africa's highest peak and the world's tallest free-standing mountain",
      bestTime: "January - March, June - October",
      highlights: [
        "5,895m summit",
        "7 climbing routes",
        "UNESCO site",
        "Glaciers",
      ],
    },
    {
      name: "Zanzibar Archipelago",
      region: "Indian Ocean",
      image:
        "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW56aWJhciUyMGJlYWNofGVufDF8fHx8MTc2MzA5NDQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Pristine beaches, spice plantations, and rich Swahili culture",
      bestTime: "June - October, December - February",
      highlights: ["White beaches", "Stone Town", "Spice tours", "Diving & snorkeling"],
    },
    {
      name: "Ngorongoro Crater",
      region: "Northern Tanzania",
      image:
        "https://images.unsplash.com/photo-1516494982030-fda424f96b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ29yb25nb3JvJTIwY3JhdGVyfGVufDF8fHx8MTc2MzA3OTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "World's largest intact volcanic caldera with incredible wildlife density",
      bestTime: "Year-round",
      highlights: [
        "Crater floor wildlife",
        "Black rhinos",
        "Maasai culture",
        "UNESCO site",
      ],
    },
  ];

  const seasons = [
    {
      name: "Dry Season (June - October)",
      description:
        "Best for wildlife viewing as animals gather around water sources. Clear skies perfect for photography.",
      temp: "20-30°C",
    },
    {
      name: "Short Rains (November - December)",
      description:
        "Lush green landscapes, fewer tourists, and excellent bird watching. Great value season.",
      temp: "22-28°C",
    },
    {
      name: "Long Rains (March - May)",
      description:
        "Dramatic landscapes, lowest prices, and wildebeest calving season. Some camps may close.",
      temp: "20-26°C",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96 mb-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Vuc2V0JTIwc2FmYXJpfGVufDF8fHx8MTc2MzEzMDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tanzania Destinations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-2xl"
            >
              <Badge className="mb-4 bg-[--terracotta]">Destinations</Badge>
              <h1 className="text-5xl md:text-6xl mb-4 text-white">
                Discover Tanzania's Treasures
              </h1>
              <p className="text-xl text-white/90">
                From wildlife-rich savannas to pristine beaches and towering peaks
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <Badge className="mb-4 bg-[--secondary]">
                      {destination.region}
                    </Badge>
                    <h2 className="text-4xl mb-4 text-[--earth-brown]">
                      {destination.name}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {destination.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-[--terracotta] mt-0.5" />
                        <div>
                          <div className="text-sm text-muted-foreground">
                            Best Time to Visit
                          </div>
                          <div>{destination.bestTime}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-muted-foreground mb-2">
                        Highlights
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight) => (
                          <Badge key={highlight} variant="outline">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => onNavigate("tours")}
                      className="bg-[--terracotta] hover:bg-[--sunset-orange]"
                    >
                      Explore Tours
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <ImageWithFallback
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Travel Guide */}
      <section className="py-20 bg-gradient-to-b from-[--sand]/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[--golden]">Travel Planning</Badge>
            <h2 className="text-4xl md:text-5xl mb-4 text-[--earth-brown]">
              Best Time to Visit
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tanzania offers incredible experiences year-round
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seasons.map((season, index) => (
              <motion.div
                key={season.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Thermometer className="w-10 h-10 text-[--terracotta] mb-4" />
                    <h3 className="mb-2">{season.name}</h3>
                    <div className="text-sm text-[--golden] mb-4">
                      Temperature: {season.temp}
                    </div>
                    <p className="text-muted-foreground">{season.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-[--terracotta] to-[--sunset-orange] text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <Camera className="w-16 h-16 mx-auto mb-6 text-white" />
              <h2 className="text-4xl mb-4 text-white">
                Ready to Explore Tanzania?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us craft the perfect itinerary for your adventure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => onNavigate("tours")}
                  className="bg-white text-[--terracotta] hover:bg-white/90"
                >
                  Browse Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("contact")}
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
