import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-card mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                E
              </div>
              <span className="font-['Poppins'] text-xl font-bold">EduVision</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Learn. Teach. Earn.<br/>
              O'zbek kasblari uchun
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/courses" className="hover:text-foreground">Browse Courses</Link></li>
              <li><Link to="/teachers" className="hover:text-foreground">Find Teachers</Link></li>
              <li><Link to="/become-teacher" className="hover:text-foreground">Become a Teacher</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-foreground">Help Center</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 EduVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
