import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner@2.0.3";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    destination: "",
    travelDate: "",
    guests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      destination: "",
      travelDate: "",
      guests: "",
      message: ""
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-80 mb-12">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1621583628955-42fbc37bf424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW56aWJhciUyMGJlYWNofGVufDF8fHx8MTc2MzA5NDQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-2xl"
            >
              <Badge className="mb-4 bg-[--terracotta]">Contact Us</Badge>
              <h1 className="text-5xl md:text-6xl mb-4 text-white">
                Let's Plan Your Adventure
              </h1>
              <p className="text-xl text-white/90">
                Our travel experts are here to help create your perfect Tanzania
                experience
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2">Visit Our Office</h3>
                        <p className="text-sm text-muted-foreground">
                          Sokoine Road, Arusha
                          <br />
                          Tanzania, East Africa
                          <br />
                          P.O. Box 12345
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2">Call Us</h3>
                        <p className="text-sm text-muted-foreground">
                          Main: +255 782 206 905
                          <br />
                          WhatsApp: +255 782 206 905
                          <br />
                          24/7 Emergency: +255 987 654 321
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2">Email Us</h3>
                        <p className="text-sm text-muted-foreground">
                          General: info@laratours.com
                          <br />
                          Bookings: bookings@laratours.com
                          <br />
                          Support: support@laratours.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 - 18:00
                          <br />
                          Saturday: 9:00 - 15:00
                          <br />
                          Sunday: Closed
                          <br />
                          <span className="text-[--terracotta]">
                            (24/7 Emergency Support)
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6 bg-gradient-to-br from-[--terracotta] to-[--sunset-orange] text-white">
                  <CardContent className="pt-6 text-center">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="mb-2 text-white">
                      Quick Response on WhatsApp
                    </h3>
                    <p className="text-sm text-white/90 mb-4">
                      Chat with us instantly for immediate assistance
                    </p>
                    <Button
                      onClick={() =>
                        window.open("https://wa.me/255123456789", "_blank")}
                      className="bg-white text-[--terracotta] hover:bg-white/90"
                    >
                      Start WhatsApp Chat
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8">
                <CardContent className="pt-6">
                  <h2 className="text-3xl mb-2 text-[--earth-brown]">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Email Address *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2">Phone Number</label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Inquiry Type *</label>
                        <Select
                          value={formData.category}
                          onValueChange={value =>
                            setFormData({ ...formData, category: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="safari">Safari Tour</SelectItem>
                            <SelectItem value="kilimanjaro">
                              Kilimanjaro Climbing
                            </SelectItem>
                            <SelectItem value="beach">Beach Holiday</SelectItem>
                            <SelectItem value="cultural">
                              Cultural Experience
                            </SelectItem>
                            <SelectItem value="custom">
                              Custom Itinerary
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Travel Details */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block mb-2">Destination</label>
                        <Select
                          value={formData.destination}
                          onValueChange={value =>
                            setFormData({ ...formData, destination: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="serengeti">Serengeti</SelectItem>
                            <SelectItem value="kilimanjaro">
                              Kilimanjaro
                            </SelectItem>
                            <SelectItem value="zanzibar">Zanzibar</SelectItem>
                            <SelectItem value="ngorongoro">
                              Ngorongoro
                            </SelectItem>
                            <SelectItem value="multiple">
                              Multiple Destinations
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block mb-2">Travel Date</label>
                        <Input
                          name="travelDate"
                          type="date"
                          value={formData.travelDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Number of Guests</label>
                        <Input
                          name="guests"
                          type="number"
                          min="1"
                          value={formData.guests}
                          onChange={handleChange}
                          placeholder="2"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block mb-2">Your Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your dream Tanzania adventure..."
                        rows={6}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[--terracotta] hover:bg-[--sunset-orange]"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Card className="overflow-hidden">
                <div className="h-96 bg-[--sand] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Arusha, Tanzania</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
