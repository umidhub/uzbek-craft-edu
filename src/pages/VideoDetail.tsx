import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Play, Share2, Bookmark, Clock, Users, Star, ChevronDown, MessageSquare } from "lucide-react";
import teacherAvatar1 from "@/assets/teacher-avatar-1.jpg";

const VideoDetail = () => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const lessons = [
    { id: 1, title: "Introduction to the Course", duration: "10:25", completed: true },
    { id: 2, title: "Setting Up Your Environment", duration: "15:30", completed: true },
    { id: 3, title: "Basic Concepts", duration: "22:45", completed: false, current: true },
    { id: 4, title: "Advanced Techniques", duration: "18:20", completed: false, locked: true },
    { id: 5, title: "Project Setup", duration: "25:10", completed: false, locked: true },
  ];

  const comments = [
    {
      id: 1,
      author: "Sarah K.",
      avatar: "S",
      time: "2 hours ago",
      text: "Great explanation! This really helped me understand the concepts better.",
      likes: 12,
    },
    {
      id: 2,
      author: "Ahmed R.",
      avatar: "A",
      time: "5 hours ago",
      text: "Could you make a video about advanced patterns next?",
      likes: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden mb-6 aspect-video flex items-center justify-center">
              <Play className="h-20 w-20 text-white opacity-50" />
            </div>

            {/* Video Info */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="default">Web Development</Badge>
                <Badge variant="secondary">Beginner Friendly</Badge>
              </div>
              <h1 className="text-3xl font-bold text-primary mb-3">
                Complete Web Development Bootcamp 2025
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-secondary mb-4">
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  1,234 students
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  45 hours total
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  4.8 (456 ratings)
                </span>
              </div>

              {/* Teacher Info */}
              <div className="flex items-center gap-3 mb-4 p-4 border rounded-lg">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={teacherAvatar1} />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-primary">Aziz Karimov</p>
                  <p className="text-sm text-secondary">Senior Web Developer</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Follow</Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-primary mb-2">About this course</h3>
                <p className={`text-secondary ${!isDescriptionExpanded && "line-clamp-3"}`}>
                  Learn web development from scratch with this comprehensive bootcamp. Master HTML, CSS, 
                  JavaScript, React, Node.js, and deploy your projects. Perfect for beginners who want to 
                  become full-stack developers. This course includes hands-on projects, real-world examples, 
                  and lifetime access to all materials. You'll build a portfolio of 10+ projects by the end 
                  of this course.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                >
                  {isDescriptionExpanded ? "Show less" : "Show more"}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDescriptionExpanded && "rotate-180"}`} />
                </Button>
              </div>
            </div>

            {/* Tabs for Comments and Resources */}
            <Tabs defaultValue="comments" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="comments" className="flex-1">Comments</TabsTrigger>
                <TabsTrigger value="resources" className="flex-1">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="comments" className="mt-6">
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3 p-4 border rounded-lg">
                      <Avatar>
                        <AvatarFallback>{comment.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold text-primary">{comment.author}</p>
                            <p className="text-xs text-secondary">{comment.time}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            ❤️ {comment.likes}
                          </Button>
                        </div>
                        <p className="text-secondary">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-secondary">Course resources and downloadable materials will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Purchase Card */}
            <Card className="sticky top-4 mb-6">
              <CardHeader>
                <CardTitle className="text-2xl">Course Access</CardTitle>
                <CardDescription>Get lifetime access to all lessons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">180,000 UZS</span>
                    <span className="text-sm text-secondary">/month</span>
                  </div>
                  <div className="text-secondary text-sm">
                    or <span className="font-semibold text-primary">1,800,000 UZS</span> /year (Save 17%)
                  </div>
                </div>
                <Button className="w-full mb-3" size="lg">
                  Buy Now
                </Button>
                <Button variant="outline" className="w-full mb-3">
                  <Play className="mr-2 h-4 w-4" />
                  Preview Course
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="flex-1">
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="flex-1">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Lessons List */}
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <CardDescription>25 lessons • 45 hours</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                        lesson.current ? "bg-primary/5" : ""
                      } ${lesson.locked ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {lesson.completed ? (
                            <span className="text-primary">✓</span>
                          ) : lesson.locked ? (
                            <span>🔒</span>
                          ) : (
                            <Play className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${lesson.current ? "text-primary" : ""}`}>
                            {lesson.title}
                          </p>
                          <p className="text-xs text-secondary">{lesson.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Courses */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">You may also like</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded transition-colors">
                    <div className="w-20 h-14 bg-muted rounded flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-primary line-clamp-2">
                        Advanced React Patterns
                      </p>
                      <p className="text-xs text-secondary">Malika Yusupova</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VideoDetail;
