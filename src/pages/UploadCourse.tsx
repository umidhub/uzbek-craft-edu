import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Upload, X, FileVideo, Check, ChevronRight, Edit, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const UploadCourse = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedLessons, setUploadedLessons] = useState([
    { id: 1, title: "Introduction", file: "intro.mp4", size: "45 MB" },
  ]);

  const steps = [
    { number: 1, title: "Course Info", description: "Basic details" },
    { number: 2, title: "Pricing", description: "Set your price" },
    { number: 3, title: "Upload Lessons", description: "Add video content" },
    { number: 4, title: "Review & Publish", description: "Final check" },
  ];

  const categories = ["IT", "Auto Repair", "Sewing", "Cooking", "Carpentry", "Design", "Marketing", "Languages"];

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Create New Course</h1>
          <p className="text-secondary">Share your knowledge with students</p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step.number
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-secondary"
                    }`}
                  >
                    {currentStep > step.number ? <Check className="h-5 w-5" /> : step.number}
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-sm font-semibold text-primary">{step.title}</p>
                    <p className="text-xs text-secondary">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 bg-muted mx-4 mt-[-2rem]">
                    <div
                      className={`h-full ${
                        currentStep > step.number ? "bg-primary" : "bg-muted"
                      } transition-all duration-300`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Course Info */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
              <CardDescription>Tell students what your course is about</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title *</Label>
                <Input id="title" placeholder="e.g., Complete Web Development Bootcamp 2025" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what students will learn..."
                  rows={5}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Level *</Label>
                  <Select>
                    <SelectTrigger id="level">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Course Thumbnail</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <p className="text-sm text-secondary mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-secondary">PNG, JPG up to 5MB (recommended: 1280x720)</p>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Save Draft</Button>
                <Button onClick={() => setCurrentStep(2)}>
                  Next Step
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Pricing */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
              <CardDescription>Set your course pricing options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="monthlyPrice">Monthly Price (UZS) *</Label>
                  <Input id="monthlyPrice" type="number" placeholder="180000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yearlyPrice">Yearly Price (UZS) *</Label>
                  <Input id="yearlyPrice" type="number" placeholder="1800000" />
                  <p className="text-xs text-secondary">Recommended: 10-20% discount</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="promo">Promo Discount (%)</Label>
                <Input id="promo" type="number" placeholder="15" />
                <p className="text-xs text-secondary">Optional launch discount</p>
              </div>

              <div className="border rounded-lg p-4 bg-muted/50">
                <h4 className="font-semibold text-primary mb-2">Price Preview</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary">Monthly:</span>
                    <span className="font-semibold text-primary">180,000 UZS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Yearly:</span>
                    <span className="font-semibold text-primary">1,800,000 UZS</span>
                  </div>
                  <div className="flex justify-between text-coral">
                    <span>With 15% discount:</span>
                    <span className="font-semibold">1,530,000 UZS</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Previous
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline">Save Draft</Button>
                  <Button onClick={() => setCurrentStep(3)}>
                    Next Step
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Upload Lessons */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Upload Lessons</CardTitle>
              <CardDescription>Add video content to your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <FileVideo className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <p className="text-sm text-secondary mb-1">Drag and drop video files here</p>
                <p className="text-xs text-secondary mb-4">or click to browse</p>
                <Button>Choose Files</Button>
                <p className="text-xs text-secondary mt-4">
                  Accepted: MP4, MOV, AVI • Max size: 2GB per file
                </p>
              </div>

              {uploadedLessons.length > 0 && (
                <div>
                  <h4 className="font-semibold text-primary mb-3">Uploaded Lessons</h4>
                  <div className="space-y-3">
                    {uploadedLessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <FileVideo className="h-8 w-8 text-primary" />
                          <div className="flex-1">
                            <p className="font-medium text-primary">{lesson.title}</p>
                            <p className="text-sm text-secondary">
                              {lesson.file} • {lesson.size}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-coral" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  Previous
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline">Save Draft</Button>
                  <Button onClick={() => setCurrentStep(4)}>
                    Next Step
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Review & Publish */}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Review & Publish</CardTitle>
              <CardDescription>Final check before publishing your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-1">Course Title</h4>
                  <p className="text-secondary">Complete Web Development Bootcamp 2025</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-1">Category & Level</h4>
                  <div className="flex gap-2">
                    <Badge>IT</Badge>
                    <Badge variant="outline">Beginner</Badge>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-1">Pricing</h4>
                  <p className="text-secondary">
                    Monthly: 180,000 UZS • Yearly: 1,800,000 UZS (15% off)
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-1">Content</h4>
                  <p className="text-secondary">1 lesson uploaded • Total duration: ~10 minutes</p>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent rounded-lg p-4">
                <p className="text-sm text-primary">
                  ✓ Once published, your course will be visible to all students
                </p>
                <p className="text-sm text-secondary mt-1">
                  You can edit and add more content anytime
                </p>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(3)}>
                  Previous
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline">Save as Draft</Button>
                  <Button
                    onClick={() => {
                      toast({
                        title: "Course Published!",
                        description: "Your course is now live and visible to students.",
                      });
                    }}
                  >
                    Publish Course
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default UploadCourse;
