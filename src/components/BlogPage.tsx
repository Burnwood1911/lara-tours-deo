import { motion } from "motion/react";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "10 Essential Tips for Your First Safari",
      excerpt:
        "Everything you need to know before embarking on your first African safari adventure...",
      image:
        "https://images.unsplash.com/photo-1728891333203-9e920c7bf9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBzYWZhcmklMjB0YW56YW5pYXxlbnwxfHx8fDE3NjMxMzA3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Safari Tips",
      author: "Sarah Ndlovu",
      date: "November 10, 2025",
    },
    {
      id: 2,
      title: "Climbing Kilimanjaro: A Complete Guide",
      excerpt:
        "From choosing the right route to preparing physically, here's everything you need to summit successfully...",
      image:
        "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGtpbGltYW5qYXJvfGVufDF8fHx8MTc2MzExNDg4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Adventure",
      author: "David Kimani",
      date: "November 8, 2025",
    },
    {
      id: 3,
      title: "The Great Migration: Nature's Greatest Show",
      excerpt:
        "Witness millions of wildebeest and zebras on their annual journey across the Serengeti...",
      image:
        "https://images.unsplash.com/photo-1667550507974-cc647990b75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc2MzEzMDcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Wildlife",
      author: "John Mwangi",
      date: "November 5, 2025",
    },
    {
      id: 4,
      title: "Zanzibar: Beyond the Beaches",
      excerpt:
        "Discover the rich culture, history, and hidden gems of the Spice Islands...",
      image:
        "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW56aWJhciUyMGJlYWNofGVufDF8fHx8MTc2MzA5NDQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Culture",
      author: "Amina Hassan",
      date: "November 2, 2025",
    },
    {
      id: 5,
      title: "Photography Safari: Capturing the Perfect Shot",
      excerpt:
        "Expert tips on camera settings, timing, and composition for stunning wildlife photos...",
      image:
        "https://images.unsplash.com/photo-1586584535372-2ec07cdb83ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZWxlcGhhbnRzfGVufDF8fHx8MTc2MzEzMDcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Photography",
      author: "Sarah Ndlovu",
      date: "October 28, 2025",
    },
    {
      id: 6,
      title: "Sustainable Safari: Traveling Responsibly",
      excerpt:
        "How to minimize your environmental impact while maximizing your African adventure...",
      image:
        "https://images.unsplash.com/photo-1489493887464-892be6d1daae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Vuc2V0JTIwc2FmYXJpfGVufDF8fHx8MTc2MzEzMDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Sustainability",
      author: "John Mwangi",
      date: "October 25, 2025",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96 mb-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1504634203593-d7967426d7f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhaSUyMHRyaWJlfGVufDF8fHx8MTc2MzEzMDcwNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel Stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-2xl"
            >
              <Badge className="mb-4 bg-[--terracotta]">Travel Stories</Badge>
              <h1 className="text-5xl md:text-6xl mb-4 text-white">
                Tales from Tanzania
              </h1>
              <p className="text-xl text-white/90">
                Expert insights, travel tips, and inspiring stories from the field
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[400px]">
                <ImageWithFallback
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="mb-4 bg-[--terracotta] w-fit">Featured</Badge>
                <h2 className="text-3xl mb-4 text-[--earth-brown]">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                </div>
                <Button className="bg-[--terracotta] hover:bg-[--sunset-orange] w-fit">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-[--secondary]">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date.split(",")[0]}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-[--terracotta] group-hover:text-white group-hover:border-[--terracotta]"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
