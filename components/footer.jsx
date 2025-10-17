import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">EduLearn</h3>
            <p className="text-sm opacity-90">
              Empowering learners worldwide with premium online education and professional development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:opacity-80 transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@edulearn.com" className="hover:opacity-80 transition">
                  info@edulearn.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:opacity-80 transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Education St, Learning City</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <div className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <button className="px-6 py-2 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition font-medium">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 EduLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
