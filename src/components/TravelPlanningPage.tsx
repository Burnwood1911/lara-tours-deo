import { motion } from "motion/react";
import {
  FileText,
  Plane,
  Briefcase,
  Shield,
  Sun,
  MapPin,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TravelPlanningPage() {
  const essentials = [
    {
      icon: FileText,
      title: "Visa Requirements",
      content: [
        "Tourist visa available on arrival at major airports ($50-$100 USD)",
        "Valid passport with 6+ months validity required",
        "Visa can also be obtained online before travel",
        "Some nationalities exempt from visa fees",
      ],
    },
    {
      icon: Shield,
      title: "Health & Safety",
      content: [
        "Yellow fever vaccination certificate required",
        "Malaria prophylaxis recommended",
        "Travel insurance strongly advised",
        "Tanzania is generally safe for tourists",
      ],
    },
    {
      icon: Briefcase,
      title: "What to Pack",
      content: [
        "Lightweight, neutral-colored clothing for safari",
        "Sun protection: hat, sunglasses, sunscreen",
        "Binoculars and camera with zoom lens",
        "Comfortable walking shoes and sandals",
      ],
    },
    {
      icon: Sun,
      title: "Best Time to Visit",
      content: [
        "Dry season (June-October): Best wildlife viewing",
        "Calving season (January-February): Baby animals",
        "Migration river crossings (July-August): Dramatic",
        "Beach season (December-February): Warm & dry",
      ],
    },
  ];

  const packingList = {
    Clothing: [
      "Light, breathable clothing in neutral colors",
      "Long-sleeved shirts and pants (sun & mosquito protection)",
      "Fleece or jacket for cool mornings",
      "Swimwear for beach/pool",
      "Comfortable walking shoes",
      "Sandals or flip-flops",
      "Wide-brimmed hat and sunglasses",
    ],
    "Safari Gear": [
      "Binoculars for wildlife viewing",
      "Camera with telephoto lens",
      "Extra batteries and memory cards",
      "Headlamp or flashlight",
      "Daypack for game drives",
    ],
    "Health & Safety": [
      "Sunscreen (SPF 50+)",
      "Insect repellent (DEET)",
      "Personal medications",
      "First aid kit",
      "Hand sanitizer",
      "Water purification tablets",
    ],
    Documents: [
      "Passport (valid 6+ months)",
      "Visa confirmation",
      "Travel insurance documents",
      "Flight tickets",
      "Hotel/safari confirmations",
      "Vaccination certificates",
    ],
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96 mb-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGtpbGltYW5qYXJvfGVufDF8fHx8MTc2MzExNDg4OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel Planning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-2xl"
            >
              <Badge className="mb-4 bg-[--terracotta]">Travel Planning</Badge>
              <h1 className="text-5xl md:text-6xl mb-4 text-white">
                Plan Your Tanzania Trip
              </h1>
              <p className="text-xl text-white/90">
                Everything you need to know before you go
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-[--earth-brown]">
              Essential Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {essentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-4">{item.title}</h3>
                        <ul className="space-y-2">
                          {item.content.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-[--deep-green] mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Packing List */}
      <section className="py-20 bg-gradient-to-b from-[--sand]/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[--secondary]">Packing Guide</Badge>
            <h2 className="text-4xl md:text-5xl mb-4 text-[--earth-brown]">
              What to Pack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive checklist for your Tanzania adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(packingList).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-[--earth-brown]">{category}</h3>
                    <ul className="space-y-2">
                      {items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-[--terracotta] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] text-white">
                <CardContent className="p-6">
                  <Plane className="w-10 h-10 mb-4 text-white" />
                  <h3 className="mb-2 text-white">Getting There</h3>
                  <p className="text-sm text-white/90">
                    Kilimanjaro International Airport (JRO) and Julius Nyerere
                    International Airport (DAR) are the main entry points. Major
                    airlines offer connections from Europe, Middle East, and other
                    African cities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[--secondary] to-[--earth-brown] text-white">
                <CardContent className="p-6">
                  <MapPin className="w-10 h-10 mb-4 text-white" />
                  <h3 className="mb-2 text-white">Currency & Money</h3>
                  <p className="text-sm text-white/90">
                    Tanzanian Shilling (TZS) is the local currency. US Dollars
                    are widely accepted for tourism services. ATMs available in
                    major cities. Credit cards accepted in hotels and lodges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[--golden] to-[--sunset-orange] text-white">
                <CardContent className="p-6">
                  <AlertCircle className="w-10 h-10 mb-4 text-white" />
                  <h3 className="mb-2 text-white">Important Tips</h3>
                  <p className="text-sm text-white/90">
                    Respect local customs and wildlife. Stay hydrated and use sun
                    protection. Follow your guide's instructions on safari. Tipping
                    is customary for good service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
