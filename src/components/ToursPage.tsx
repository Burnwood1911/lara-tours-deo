import { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  SlidersHorizontal,
  Clock,
  Users,
  MapPin,
  Star,
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ToursPageProps {
  onNavigate: (page: string) => void;
}

export function ToursPage({ onNavigate }: ToursPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [duration, setDuration] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tours = [
    {
      id: 1,
      name: "Serengeti Great Migration Safari",
      category: "safari",
      duration: "7 days",
      price: "$2,499",
      priceValue: 2499,
      rating: 4.9,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1728891333203-9e920c7bf9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBzYWZhcmklMjB0YW56YW5pYXxlbnwxfHx8fDE3NjMxMzA3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Witness the incredible wildebeest migration in the Serengeti National Park",
      maxGuests: 6,
      includes: ["Accommodation", "Meals", "Game drives", "Guide"],
    },
    {
      id: 2,
      name: "Mount Kilimanjaro - Machame Route",
      category: "hiking",
      duration: "8 days",
      price: "$2,999",
      priceValue: 2999,
      rating: 4.8,
      reviews: 187,
      image:
        "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGtpbGltYW5qYXJvfGVufDF8fHx8MTc2MzExNDg4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Summit Africa's highest peak via the scenic Machame route",
      maxGuests: 12,
      includes: ["Porters", "Camping", "Meals", "Permits", "Guide"],
    },
    {
      id: 3,
      name: "Zanzibar Beach & Culture Escape",
      category: "beach",
      duration: "5 days",
      price: "$1,299",
      priceValue: 1299,
      rating: 4.7,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW56aWJhciUyMGJlYWNofGVufDF8fHx8MTc2MzA5NDQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Relax on pristine beaches and explore Stone Town's history",
      maxGuests: 8,
      includes: ["Beach resort", "Meals", "City tour", "Snorkeling"],
    },
    {
      id: 4,
      name: "Ngorongoro Crater Adventure",
      category: "safari",
      duration: "4 days",
      price: "$1,799",
      priceValue: 1799,
      rating: 4.9,
      reviews: 198,
      image:
        "https://images.unsplash.com/photo-1516494982030-fda424f96b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ29yb25nb3JvJTIwY3JhdGVyfGVufDF8fHx8MTc2MzA3OTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Explore the world's largest intact volcanic caldera",
      maxGuests: 6,
      includes: ["Accommodation", "Meals", "Game drives", "Crater fees"],
    },
    {
      id: 5,
      name: "Maasai Cultural Experience",
      category: "cultural",
      duration: "3 days",
      price: "$899",
      priceValue: 899,
      rating: 4.6,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1504634203593-d7967426d7f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhaSUyMHRyaWJlfGVufDF8fHx8MTc2MzEzMDcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Immerse yourself in traditional Maasai culture and customs",
      maxGuests: 10,
      includes: ["Village visits", "Meals", "Accommodation", "Guide"],
    },
    {
      id: 6,
      name: "Romantic Honeymoon Safari",
      category: "honeymoon",
      duration: "10 days",
      price: "$4,999",
      priceValue: 4999,
      rating: 5.0,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1489493887464-892be6d1daae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Vuc2V0JTIwc2FmYXJpfGVufDF8fHx8MTc2MzEzMDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Luxury safari and beach combination for couples",
      maxGuests: 2,
      includes: [
        "Luxury lodges",
        "All meals",
        "Safari & beach",
        "Romantic extras",
      ],
    },
    {
      id: 7,
      name: "Wildlife Photography Safari",
      category: "safari",
      duration: "6 days",
      price: "$2,199",
      priceValue: 2199,
      rating: 4.8,
      reviews: 145,
      image:
        "https://images.unsplash.com/photo-1667550507974-cc647990b75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc2MzEzMDcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Specialized safari for photography enthusiasts",
      maxGuests: 4,
      includes: ["Photo guide", "Extended game drives", "Meals", "Accommodation"],
    },
    {
      id: 8,
      name: "Arusha Day Trip & Coffee Tour",
      category: "day-trip",
      duration: "1 day",
      price: "$199",
      priceValue: 199,
      rating: 4.5,
      reviews: 267,
      image:
        "https://images.unsplash.com/photo-1586584535372-2ec07cdb83ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZWxlcGhhbnRzfGVufDF8fHx8MTc2MzEzMDcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Explore local markets and coffee plantations near Arusha",
      maxGuests: 15,
      includes: ["Transport", "Coffee tasting", "Lunch", "Guide"],
    },
  ];

  const categories = [
    { label: "All Tours", value: "all" },
    { label: "Safari", value: "safari" },
    { label: "Beach", value: "beach" },
    { label: "Hiking", value: "hiking" },
    { label: "Cultural", value: "cultural" },
    { label: "Honeymoon", value: "honeymoon" },
    { label: "Day Trips", value: "day-trip" },
  ];

  const filteredTours = tours.filter((tour) => {
    const categoryMatch =
      selectedCategory === "all" || tour.category === selectedCategory;
    const searchMatch =
      searchQuery === "" ||
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase());

    let priceMatch = true;
    if (priceRange === "budget") {
      priceMatch = tour.priceValue < 1000;
    } else if (priceRange === "mid") {
      priceMatch = tour.priceValue >= 1000 && tour.priceValue < 2500;
    } else if (priceRange === "luxury") {
      priceMatch = tour.priceValue >= 2500;
    }

    let durationMatch = true;
    const days = parseInt(tour.duration);
    if (duration === "short") {
      durationMatch = days <= 3;
    } else if (duration === "medium") {
      durationMatch = days > 3 && days <= 7;
    } else if (duration === "long") {
      durationMatch = days > 7;
    }

    return categoryMatch && searchMatch && priceMatch && durationMatch;
  });

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-80 mb-12">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1728891333203-9e920c7bf9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBzYWZhcmklMjB0YW56YW5pYXxlbnwxfHx8fDE3NjMxMzA3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tours & Packages"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-2xl"
            >
              <Badge className="mb-4 bg-[--terracotta]">Tours & Packages</Badge>
              <h1 className="text-5xl md:text-6xl mb-4 text-white">
                Find Your Perfect Adventure
              </h1>
              <p className="text-xl text-white/90">
                Choose from our curated collection of Tanzania experiences
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {/* Search and Filters */}
        <div className="mb-12">
          <Card className="p-6">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tours..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Price Range */}
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="budget">Budget (Under $1,000)</SelectItem>
                    <SelectItem value="mid">Mid-range ($1,000-$2,500)</SelectItem>
                    <SelectItem value="luxury">Luxury ($2,500+)</SelectItem>
                  </SelectContent>
                </Select>

                {/* Duration */}
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <Clock className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Duration</SelectItem>
                    <SelectItem value="short">1-3 Days</SelectItem>
                    <SelectItem value="medium">4-7 Days</SelectItem>
                    <SelectItem value="long">8+ Days</SelectItem>
                  </SelectContent>
                </Select>

                {/* Customize Trip Button */}
                <Button
                  onClick={() => onNavigate("contact")}
                  className="bg-[--golden] hover:bg-[--sunset-orange]"
                >
                  Customize Your Trip
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className={
                selectedCategory === category.value
                  ? "bg-[--terracotta] hover:bg-[--sunset-orange]"
                  : ""
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          Showing {filteredTours.length} tour{filteredTours.length !== 1 ? "s" : ""}
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-[--terracotta]" />
                  </button>
                  <Badge className="absolute top-4 left-4 bg-[--terracotta]">
                    {tour.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[--golden] text-[--golden]" />
                      <span className="text-sm">{tour.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({tour.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="mb-2 line-clamp-1">{tour.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {tour.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Max {tour.maxGuests}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {tour.includes.slice(0, 3).map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="text-xs"
                      >
                        {item}
                      </Badge>
                    ))}
                    {tour.includes.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{tour.includes.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-sm text-muted-foreground">From</div>
                      <div className="text-2xl text-[--terracotta]">
                        {tour.price}
                      </div>
                    </div>
                    <Button
                      onClick={() => onNavigate("contact")}
                      className="bg-[--terracotta] hover:bg-[--sunset-orange]"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-20">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl mb-2 text-muted-foreground">
              No tours found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("all");
                setPriceRange("all");
                setDuration("all");
                setSearchQuery("");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
