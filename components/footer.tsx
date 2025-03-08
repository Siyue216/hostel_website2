import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="font-bold">Military Boys Hostel</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Providing discipline, education, and a nurturing environment for young minds to grow and excel.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-white transition-colors">
                  Rules
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-gray-400 hover:text-white transition-colors">
                  Admission
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Vita-Karad Road, Near Maharashtra Bank</p>
              <p>Saidapur, Karad 415124</p>
              <p>Phone: +91 8440983111</p>
              <p>Email: anuragwazarkar.mbh@gmail.com</p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Anurag Wazarkar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

