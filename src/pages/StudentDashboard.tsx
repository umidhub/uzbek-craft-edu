import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { Play, Clock, BookOpen, Award } from "lucide-react";
import courseIt from "@/assets/course-it.jpg";
import courseCooking from "@/assets/course-cooking.jpg";
import courseAuto from "@/assets/course-auto.jpg";

const StudentDashboard = () => {
  const continueLearning = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      image: courseIt,
      progress: 65,
      teacher: "Aziz Karimov",
      nextLesson: "React Hooks Deep Dive",
    },
    {
      id: 2,
      title: "Professional Cooking",
      image: courseCooking,
      progress: 40,
      teacher: "Malika Yusupova",
      nextLesson: "Traditional Uzbek Plov",
    },
  ];

  const recommendedCourses = [
    {
      id: "3",
      title: "Auto Mechanics Basics",
      teacher: "Rustam Alimov",
      price: 180000,
      rating: 4.9,
      students: 450,
      thumbnail: courseAuto,
      duration: "8 weeks",
      isNew: true,
    },
  ];

  const categories = ["IT", "Cooking", "Auto Repair", "Sewing", "Carpentry", "Design", "Marketing", "Languages"];

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Welcome back, Student!</h1>
          <p className="text-secondary">Continue your learning journey</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <BookOpen className="h-8 w-8 text-primary mr-4" />
              <div>
                <p className="text-2xl font-bold text-primary">5</p>
                <p className="text-sm text-secondary">Active Courses</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Clock className="h-8 w-8 text-accent mr-4" />
              <div>
                <p className="text-2xl font-bold text-primary">24h</p>
                <p className="text-sm text-secondary">Watch Time</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Award className="h-8 w-8 text-coral mr-4" />
              <div>
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-sm text-secondary">Certificates</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Play className="h-8 w-8 text-primary mr-4" />
              <div>
                <p className="text-2xl font-bold text-primary">120</p>
                <p className="text-sm text-secondary">Lessons Done</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Continue Learning */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Continue Learning</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {continueLearning.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex flex-col md:flex-row">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full md:w-48 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                  />
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{course.title}</h3>
                    <p className="text-sm text-secondary mb-3">by {course.teacher}</p>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-secondary">Progress</span>
                        <span className="text-primary font-semibold">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <p className="text-sm text-secondary mb-4">Next: {course.nextLesson}</p>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Continue Learning
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </section>

        {/* Recommended Courses */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>

        {/* My Courses Quick Access */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-primary">My Courses</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Web Development</CardTitle>
                <CardDescription>65% Complete</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={65} />
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Cooking Basics</CardTitle>
                <CardDescription>40% Complete</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={40} />
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Auto Repair</CardTitle>
                <CardDescription>20% Complete</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={20} />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
