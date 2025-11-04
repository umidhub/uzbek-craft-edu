import { Search, Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface HeaderProps {
  showAuth?: boolean;
}

export const Header = ({ showAuth = false }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
            E
          </div>
          <span className="font-['Poppins'] text-xl font-bold text-foreground">EduVision</span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses, teachers, skills..."
              className="pl-10 bg-background"
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {showAuth ? (
            <>
              <Link to="/login">
                <Button variant="outline" className="gap-2">
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              
              <Link to="/register">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
              </Button>
              
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
