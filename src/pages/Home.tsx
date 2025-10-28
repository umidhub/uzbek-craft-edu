import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { TeacherCard } from "@/components/TeacherCard";
import { ArrowRight, Video, Users, Calendar, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  // Mock data
  const topTeachers = [
    {
      id: "1",
      name: "Aziz Rahimov",
      avatar: "/placeholder.svg",
      specialization: "IT & Programming",
      rating: 4.9,
      coursesCount: 12,
      studentsCount: 2400
    },
    {
      id: "2",
      name: "Nodira Karimova",
      avatar: "/placeholder.svg",
      specialization: "Design & Creativity",
      rating: 4.8,
      coursesCount: 8,
      studentsCount: 1800
    },
    {
      id: "3",
      name: "Jamshid Alimov",
      avatar: "/placeholder.svg",
      specialization: "Auto Repair",
      rating: 4.9,
      coursesCount: 15,
      studentsCount: 3200
    },
    {
      id: "4",
      name: "Malika Yusupova",
      avatar: "/placeholder.svg",
      specialization: "Sewing & Crafts",
      rating: 4.7,
      coursesCount: 10,
      studentsCount: 1500
    }
  ];

  const discountedCourses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp 2025",
      teacher: "Aziz Rahimov",
      thumbnail: "/placeholder.svg",
      price: 199000,
      originalPrice: 399000,
      rating: 4.9,
      students: 2400,
      duration: "24h",
      isTop: true
    },
    {
      id: "2",
      title: "Professional Auto Mechanics Course",
      teacher: "Jamshid Alimov",
      thumbnail: "/placeholder.svg",
      price: 299000,
      originalPrice: 499000,
      rating: 4.8,
      students: 1800,
      duration: "32h"
    },
    {
      id: "3",
      title: "Modern Sewing & Fashion Design",
      teacher: "Malika Yusupova",
      thumbnail: "/placeholder.svg",
      price: 149000,
      originalPrice: 299000,
      rating: 4.7,
      students: 1200,
      duration: "18h",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
          {/* Subtle Uzbek pattern decoration */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ 
                 backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                 color: 'hsl(var(--primary))'
               }} 
          />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Learn. Teach. Earn.
              </h1>
              <p className="text-xl text-muted-foreground">
                O'zbekistondagi eng yaxshi o'qituvchilardan kasbiy ko'nikmalarni o'rganing. 
                Video darslar, jonli efirlar va shaxsiy maslahatlar.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/register?role=student">
                  <Button size="lg" className="text-lg px-8 gap-2 bg-primary hover:bg-primary/90">
                    Join as Student
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/register?role=teacher">
                  <Button size="lg" variant="outline" className="text-lg px-8 gap-2">
                    Become a Teacher
                    <Users className="h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12,000+</div>
                  <div className="text-muted-foreground">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">450+</div>
                  <div className="text-muted-foreground">Expert Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">800+</div>
                  <div className="text-muted-foreground">Video Courses</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Local Expert Teachers</h3>
              <p className="text-muted-foreground">
                Learn from experienced professionals in your region who understand local context
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="h-16 w-16 mx-auto rounded-2xl bg-secondary/20 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Earn While Teaching</h3>
              <p className="text-muted-foreground">
                Share your skills and earn income through video courses and live sessions
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Live Classes & Mentoring</h3>
              <p className="text-muted-foreground">
                Schedule one-on-one sessions and join live interactive workshops
              </p>
            </div>
          </div>
        </section>

        {/* Top Teachers */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Top Teachers</h2>
              <Link to="/teachers">
                <Button variant="ghost" className="gap-2">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} {...teacher} />
              ))}
            </div>
          </div>
        </section>

        {/* Discounted Courses */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Special Offers</h2>
              <Link to="/courses">
                <Button variant="ghost" className="gap-2">
                  View All Courses
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discountedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-6 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Start Learning?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of students already learning practical skills from local experts
            </p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
