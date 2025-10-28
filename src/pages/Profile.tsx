import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Camera, Award, BookOpen, Users, DollarSign } from "lucide-react";
import teacherAvatar1 from "@/assets/teacher-avatar-1.jpg";

const Profile = () => {
  const [selectedInterests, setSelectedInterests] = useState(["IT", "Design", "Marketing"]);

  const interests = [
    "IT", "Auto repair", "Sewing", "Cooking", "Carpentry", 
    "Design", "Marketing", "Languages", "Photography", "Music"
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Picture & Quick Stats */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <Avatar className="h-32 w-32">
                        <AvatarImage src={teacherAvatar1} />
                        <AvatarFallback>AK</AvatarFallback>
                      </Avatar>
                      <Button
                        size="icon"
                        className="absolute bottom-0 right-0 rounded-full h-10 w-10"
                      >
                        <Camera className="h-5 w-5" />
                      </Button>
                    </div>
                    <h3 className="font-bold text-xl text-primary mb-1">Aziz Karimov</h3>
                    <p className="text-secondary text-sm mb-4">Student</p>
                    <Button variant="outline" className="w-full mb-2">
                      Become a Teacher
                    </Button>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Courses
                      </span>
                      <span className="font-semibold text-primary">5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Certificates
                      </span>
                      <span className="font-semibold text-primary">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Followers
                      </span>
                      <span className="font-semibold text-primary">42</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Edit Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your profile details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Aziz" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Karimov" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="flex gap-2">
                        <Input id="phone" defaultValue="+998 90 123 45 67" />
                        <Button variant="outline">Change</Button>
                      </div>
                      <p className="text-xs text-secondary">
                        Changing your phone will require verification
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself..."
                        rows={4}
                        defaultValue="Passionate learner interested in web development and design."
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Interests</Label>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                          <Badge
                            key={interest}
                            variant={selectedInterests.includes(interest) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => toggleInterest(interest)}
                          >
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1">Save Changes</Button>
                      <Button variant="outline" className="flex-1">Cancel</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="flex items-center p-6">
                  <BookOpen className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <p className="text-2xl font-bold text-primary">5</p>
                    <p className="text-sm text-secondary">Enrolled Courses</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-6">
                  <Award className="h-8 w-8 text-accent mr-4" />
                  <div>
                    <p className="text-2xl font-bold text-primary">3</p>
                    <p className="text-sm text-secondary">Certificates Earned</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-6">
                  <DollarSign className="h-8 w-8 text-coral mr-4" />
                  <div>
                    <p className="text-2xl font-bold text-primary">45h</p>
                    <p className="text-sm text-secondary">Learning Time</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your course completion over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                  <p className="text-secondary">Progress chart would go here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your password and account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>

                <Button className="w-full md:w-auto">Update Password</Button>

                <div className="border-t pt-6 mt-6">
                  <h3 className="font-semibold text-primary mb-4">Danger Zone</h3>
                  <div className="flex items-center justify-between p-4 border border-coral/20 rounded-lg">
                    <div>
                      <p className="font-medium text-primary">Delete Account</p>
                      <p className="text-sm text-secondary">
                        Permanently delete your account and all data
                      </p>
                    </div>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline">Logout</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
