import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[--earth-brown] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] rounded-full flex items-center justify-center">
                <span className="text-white">L</span>
              </div>
              <div>
                <div className="tracking-tight">LARA Tours</div>
                <div className="text-xs text-white/70">Explore Tanzania</div>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Your trusted partner for unforgettable African adventures.
              Licensed tour operator serving clients worldwide since 2010.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[--terracotta] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[--terracotta] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[--terracotta] rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[--terracotta] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", value: "home" },
                { label: "About Us", value: "about" },
                { label: "Tours & Packages", value: "tours" },
                { label: "Destinations", value: "destinations" },
                { label: "Blog", value: "blog" },
                { label: "Contact", value: "contact" }
              ].map(link =>
                <li key={link.value}>
                  <button
                    onClick={() => onNavigate(link.value)}
                    className="text-white/80 hover:text-[--terracotta] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="mb-4">Popular Tours</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("tours")}
                  className="text-white/80 hover:text-[--terracotta] transition-colors"
                >
                  Serengeti Safari
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("tours")}
                  className="text-white/80 hover:text-[--terracotta] transition-colors"
                >
                  Kilimanjaro Climbing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("tours")}
                  className="text-white/80 hover:text-[--terracotta] transition-colors"
                >
                  Zanzibar Beach Escape
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("tours")}
                  className="text-white/80 hover:text-[--terracotta] transition-colors"
                >
                  Ngorongoro Crater Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("tours")}
                  className="text-white/80 hover:text-[--terracotta] transition-colors"
                >
                  Cultural Experience
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Arusha, Tanzania
                  <br />
                  East Africa
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-white/80">+255 782 206 905</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-white/80">
                  info@laratoursandtravels.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; 2025 LARA Tours. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-[--terracotta] transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-[--terracotta] transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-[--terracotta] transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
