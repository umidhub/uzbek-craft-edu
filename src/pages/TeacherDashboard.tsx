import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Upload, Video, MessageSquare, DollarSign, Users, Eye, Calendar, TrendingUp } from "lucide-react";

const TeacherDashboard = () => {
  const upcomingStreams = [
    {
      id: 1,
      title: "Advanced React Patterns",
      date: "2025-11-01",
      time: "18:00",
      participants: 45,
    },
    {
      id: 2,
      title: "Database Design Workshop",
      date: "2025-11-03",
      time: "20:00",
      participants: 32,
    },
  ];

  const recentVideos = [
    { id: 1, title: "Introduction to TypeScript", views: 1250, likes: 234 },
    { id: 2, title: "React Hooks Tutorial", views: 980, likes: 189 },
    { id: 3, title: "CSS Grid Layout", views: 756, likes: 145 },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Teacher Dashboard</h1>
          <p className="text-secondary">Manage your courses and connect with students</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Upload Video</CardTitle>
              <CardDescription>Add new lesson content</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Upload Now</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-coral">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center">
                <Video className="h-8 w-8 text-coral" />
              </div>
              <CardTitle>Start Live Stream</CardTitle>
              <CardDescription>Go live with your students</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" className="w-full">Start Live</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-accent">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <CardTitle>Messages</CardTitle>
              <CardDescription>3 unread messages</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">View Messages</Button>
            </CardContent>
          </Card>
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <DollarSign className="h-8 w-8 text-accent mr-4" />
              <div>
                <p className="text-2xl font-bold text-primary">$2,450</p>
                <p className="text-sm text-secondary">This Month</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Users className="h-8 w-8 text-primary mr-4" />
              <div>
                <p className="text-2xl font-bold text-primary">324</p>
                <p className="text-sm text-secondary">Total Students</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Eye className="h-8 w-8 text-coral mr-4" />
              <div>
                <p className="text-2xl font-bold text-primary">12.5K</p>
                <p className="text-sm text-secondary">Total Views</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <TrendingUp className="h-8 w-8 text-primary mr-4" />
              <div>
                <p className="text-2xl font-bold text-primary">+15%</p>
                <p className="text-sm text-secondary">Growth Rate</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Upcoming Streams */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Live Sessions
                  </CardTitle>
                  <CardDescription>Your scheduled streams</CardDescription>
                </div>
                <Button variant="outline" size="sm">Schedule New</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingStreams.map((stream) => (
                  <div key={stream.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-1">{stream.title}</h4>
                      <p className="text-sm text-secondary mb-2">
                        {stream.date} at {stream.time}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        <Users className="h-3 w-3 mr-1" />
                        {stream.participants} registered
                      </Badge>
                    </div>
                    <Button size="sm" variant="ghost">Remind</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Videos */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    Recent Videos
                  </CardTitle>
                  <CardDescription>Your latest uploads</CardDescription>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentVideos.map((video) => (
                  <div key={video.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">{video.title}</h4>
                      <div className="flex gap-4 text-sm text-secondary">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {video.views}
                        </span>
                        <span>❤️ {video.likes}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">Edit</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Earnings Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Earnings Overview
            </CardTitle>
            <CardDescription>Your income over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <p className="text-secondary">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        {/* Student Activity Feed */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Recent Student Activity
            </CardTitle>
            <CardDescription>Latest interactions from your students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Sarah K.", action: "completed", course: "Web Development Bootcamp" },
                { name: "Ahmed R.", action: "enrolled in", course: "Advanced React Patterns" },
                { name: "Zarina M.", action: "commented on", course: "TypeScript Tutorial" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border-b last:border-b-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                    {activity.name[0]}
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold text-primary">{activity.name}</span>
                    <span className="text-secondary"> {activity.action} </span>
                    <span className="font-medium text-primary">{activity.course}</span>
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default TeacherDashboard;
