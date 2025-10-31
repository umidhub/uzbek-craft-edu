import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [step, setStep] = useState<"phone" | "verification">("phone");
  const [countdown, setCountdown] = useState(0);

  const handleSendCode = () => {
    setStep("verification");
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    toast.success("Verification code sent to your phone");
  };

  const handleLogin = () => {
    toast.success("Successfully logged in!");
    if (role === "student") {
      window.location.href = "/student-dashboard";
    } else {
      window.location.href = "/teacher-dashboard";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-6 bg-muted/30">
        <Card className="w-full max-w-md p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to continue your learning journey
            </p>
          </div>

          {/* Role Toggle */}
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={role === "student" ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setRole("student")}
            >
              Student
            </Button>
            <Button
              variant={role === "teacher" ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setRole("teacher")}
            >
              Teacher
            </Button>
          </div>

          {step === "phone" ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2">
                  <Input 
                    id="prefix" 
                    defaultValue="+998" 
                    className="w-20"
                    disabled 
                  />
                  <Input 
                    id="phone" 
                    placeholder="90 123 45 67" 
                    className="flex-1"
                  />
                </div>
              </div>

              <Button className="w-full" onClick={handleSendCode}>
                Send Verification Code
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Verification Code</Label>
                <p className="text-sm text-muted-foreground">
                  Enter the 6-digit code sent to your phone
                </p>
                <Input 
                  id="code" 
                  placeholder="000000" 
                  maxLength={6}
                  className="text-center text-2xl tracking-widest"
                />
              </div>

              <Button className="w-full" onClick={handleLogin}>
                Login
              </Button>

              <div className="text-center">
                {countdown > 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Resend code in {countdown}s
                  </p>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleSendCode}
                  >
                    Resend Code
                  </Button>
                )}
              </div>

              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setStep("phone")}
              >
                Back
              </Button>
            </div>
          )}

          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>

          <Button variant="outline" className="w-full" asChild>
            <Link to="/">Continue as Guest</Link>
          </Button>
        </Card>
      </main>
    </div>
  );
}
