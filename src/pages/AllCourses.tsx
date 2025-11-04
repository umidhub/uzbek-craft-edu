import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import courseIT from "@/assets/course-it.jpg";
import courseCooking from "@/assets/course-cooking.jpg";
import courseAuto from "@/assets/course-auto.jpg";
import courseSewing from "@/assets/course-sewing.jpg";
import courseCarpentry from "@/assets/course-carpentry.jpg";

export default function AllCourses() {
  const allCourses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp 2025",
      teacher: "Aziz Rahimov",
      thumbnail: courseIT,
      price: 199000,
      originalPrice: 399000,
      rating: 4.9,
      students: 2400,
      duration: "24 hours",
      isTop: true
    },
    {
      id: "2",
      title: "Professional Auto Mechanics Course",
      teacher: "Jamshid Alimov",
      thumbnail: courseAuto,
      price: 299000,
      originalPrice: 499000,
      rating: 4.8,
      students: 1800,
      duration: "32 hours"
    },
    {
      id: "3",
      title: "Modern Sewing & Fashion Design",
      teacher: "Malika Yusupova",
      thumbnail: courseSewing,
      price: 149000,
      originalPrice: 299000,
      rating: 4.7,
      students: 1200,
      duration: "18 hours",
      isNew: true
    },
    {
      id: "4",
      title: "Culinary Arts Masterclass",
      teacher: "Nodira Karimova",
      thumbnail: courseCooking,
      price: 179000,
      rating: 4.8,
      students: 950,
      duration: "20 hours",
      isNew: true
    },
    {
      id: "5",
      title: "Carpentry & Woodworking Essentials",
      teacher: "Rustam Sultonov",
      thumbnail: courseCarpentry,
      price: 249000,
      originalPrice: 399000,
      rating: 4.9,
      students: 1650,
      duration: "28 hours",
      isTop: true
    },
    {
      id: "6",
      title: "Advanced Mobile App Development",
      teacher: "Aziz Rahimov",
      thumbnail: courseIT,
      price: 349000,
      rating: 4.9,
      students: 1890,
      duration: "40 hours"
    },
    {
      id: "7",
      title: "Electric Vehicle Maintenance",
      teacher: "Jamshid Alimov",
      thumbnail: courseAuto,
      price: 399000,
      rating: 4.8,
      students: 780,
      duration: "24 hours",
      isNew: true
    },
    {
      id: "8",
      title: "Traditional Uzbek Cooking",
      teacher: "Nodira Karimova",
      thumbnail: courseCooking,
      price: 129000,
      rating: 4.9,
      students: 2100,
      duration: "16 hours",
      isTop: true
    },
    {
      id: "9",
      title: "Interior Carpentry Projects",
      teacher: "Rustam Sultonov",
      thumbnail: courseCarpentry,
      price: 199000,
      rating: 4.7,
      students: 890,
      duration: "22 hours"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header showAuth={true} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 border-b">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Explore All Courses
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover hundreds of courses taught by local experts. Learn practical skills that matter.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 border-b bg-card">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses by title, teacher, or skill..."
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="it">IT & Programming</SelectItem>
                  <SelectItem value="auto">Auto Repair</SelectItem>
                  <SelectItem value="cooking">Cooking</SelectItem>
                  <SelectItem value="sewing">Sewing & Fashion</SelectItem>
                  <SelectItem value="carpentry">Carpentry</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select defaultValue="popular">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              {/* More Filters */}
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Active filters / Results count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {allCourses.length} courses
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Load More Courses
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
