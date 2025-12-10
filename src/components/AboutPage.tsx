import { motion } from "motion/react";
import { Target, Heart, Users, Leaf, Award, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const team = [
    {
      name: "John Mwangi",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "15+ years of experience in African tourism",
    },
    {
      name: "Sarah Ndlovu",
      role: "Safari Operations Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Expert in wildlife conservation and safari logistics",
    },
    {
      name: "David Kimani",
      role: "Lead Mountain Guide",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Kilimanjaro specialist with 200+ successful summits",
    },
    {
      name: "Amina Hassan",
      role: "Cultural Tourism Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Passionate about authentic cultural experiences",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Africa",
      description:
        "We are deeply passionate about showcasing the beauty and diversity of Tanzania to the world.",
    },
    {
      icon: Leaf,
      title: "Sustainable Tourism",
      description:
        "Committed to eco-friendly practices and supporting local conservation efforts.",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "We work closely with local communities, creating jobs and supporting education.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Dedicated to providing world-class service and unforgettable experiences.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96 mb-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1504634203593-d7967426d7f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhaSUyMHRyaWJlfGVufDF8fHx8MTc2MzEzMDcwNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="About LARA Tours"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-2xl"
            >
              <Badge className="mb-4 bg-[--terracotta]">About Us</Badge>
              <h1 className="text-5xl md:text-6xl mb-4 text-white">
                Your Gateway to Authentic Tanzania
              </h1>
              <p className="text-xl text-white/90">
                Creating unforgettable African adventures since 2010
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[--secondary]">Our Story</Badge>
              <h2 className="text-4xl mb-6 text-[--earth-brown]">
                Born from a Love of Tanzania
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  LARA Tours was founded in 2010 by a group of passionate Tanzanian
                  travel enthusiasts who wanted to share the incredible beauty of
                  their homeland with the world. What started as a small operation
                  with a single safari vehicle has grown into one of Tanzania's most
                  trusted tour operators.
                </p>
                <p>
                  Over the years, we've had the privilege of introducing thousands
                  of travelers to the magic of the Serengeti, the challenge of
                  Kilimanjaro, the tranquility of Zanzibar, and the rich cultural
                  heritage of our people.
                </p>
                <p>
                  Today, we operate a fleet of modern safari vehicles, employ over 50
                  local guides and staff, and maintain partnerships with the finest
                  lodges and camps across Tanzania. But despite our growth, we've
                  never lost sight of our original mission: to provide authentic,
                  personalized, and responsible travel experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667550507974-cc647990b75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc2MzEzMDcwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tanzania Wildlife"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-[--sand]/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-[--terracotta] mb-4" />
                  <h3 className="text-3xl mb-4 text-[--earth-brown]">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To create transformative travel experiences that connect people
                    with Tanzania's extraordinary wildlife, landscapes, and cultures
                    while promoting sustainable tourism and supporting local
                    communities.
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
              <Card className="p-8 h-full">
                <CardContent className="pt-6">
                  <Globe className="w-12 h-12 text-[--terracotta] mb-4" />
                  <h3 className="text-3xl mb-4 text-[--earth-brown]">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be recognized as Africa's leading tour operator, setting the
                    standard for excellence, authenticity, and responsible tourism
                    while preserving Tanzania's natural and cultural heritage for
                    future generations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[--golden]">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl mb-4 text-[--earth-brown]">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gradient-to-b from-white to-[--sand]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[--secondary]">Our Team</Badge>
            <h2 className="text-4xl md:text-5xl mb-4 text-[--earth-brown]">
              Meet the Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of local experts is dedicated to making your
              African adventure unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-80">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl mb-1 text-white">{member.name}</h3>
                      <p className="text-sm text-[--golden] mb-2">{member.role}</p>
                      <p className="text-sm text-white/90">{member.bio}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586584535372-2ec07cdb83ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZWxlcGhhbnRzfGVufDF8fHx8MTc2MzEzMDcwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Conservation"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[--deep-green] text-white">
                Sustainability & Community
              </Badge>
              <h2 className="text-4xl mb-6 text-[--earth-brown]">
                Committed to Conservation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We believe that tourism should benefit not only our guests but
                  also the wildlife, environment, and local communities that make
                  Tanzania so special.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-[--deep-green] mt-0.5 flex-shrink-0" />
                    <span>
                      5% of all profits donated to wildlife conservation projects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-[--deep-green] mt-0.5 flex-shrink-0" />
                    <span>
                      Eco-friendly safari vehicles and carbon offset programs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-[--deep-green] mt-0.5 flex-shrink-0" />
                    <span>
                      Direct employment of local guides, drivers, and staff
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-[--deep-green] mt-0.5 flex-shrink-0" />
                    <span>
                      Support for local schools and community development projects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-[--deep-green] mt-0.5 flex-shrink-0" />
                    <span>
                      Partnerships with responsible lodges and eco-camps
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
