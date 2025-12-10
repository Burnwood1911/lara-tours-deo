import { useState, useEffect } from "react";
import { Menu, X, Globe, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", value: "home" },
    { label: "About Us", value: "about" },
    { label: "Tours & Packages", value: "tours" },
    { label: "Destinations", value: "destinations" },
    { label: "Travel Planning", value: "planning" },
    { label: "Blog", value: "blog" },
    { label: "Contact", value: "contact" },
  ];

  const languages = {
    en: "English",
    fr: "Français",
    es: "Español",
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onNavigate("home")}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] rounded-full flex items-center justify-center">
                <span className="text-white text-xl">L</span>
              </div>
              <div>
                <div className="text-xl tracking-tight text-[--earth-brown]">
                  LARA Tours
                </div>
                <div className="text-xs text-muted-foreground">
                  Explore Tanzania
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => onNavigate(item.value)}
                  className={`transition-colors relative group ${
                    currentPage === item.value
                      ? "text-[--terracotta]"
                      : "text-foreground hover:text-[--terracotta]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[--terracotta] transition-all ${
                      currentPage === item.value
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[120px] border-none bg-transparent hidden md:flex">
                  <Globe className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(languages).map(([code, name]) => (
                    <SelectItem key={code} value={code}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Book Now Button */}
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-[--terracotta] hover:bg-[--sunset-orange] hidden md:flex"
              >
                Book Now
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Top Bar with Contact Info */}
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden md:flex items-center gap-6 mt-2 pt-2 border-t border-border/50 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+255 782 206 905</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@laratours.com</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl z-40 lg:hidden"
          >
            <div className="flex flex-col gap-2 p-6 mt-20">
              {menuItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded-lg transition-colors ${
                    currentPage === item.value
                      ? "bg-[--sand] text-[--terracotta]"
                      : "hover:bg-accent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onNavigate("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[--terracotta] hover:bg-[--sunset-orange] mt-4"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
