import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Users,
  MessageSquare,
  Send,
  Calendar,
  Square,
} from "lucide-react";

const LiveStream = () => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [message, setMessage] = useState("");

  const participants = [
    { id: 1, name: "Sarah K.", avatar: "S" },
    { id: 2, name: "Ahmed R.", avatar: "A" },
    { id: 3, name: "Zarina M.", avatar: "Z" },
    { id: 4, name: "Rustam T.", avatar: "R" },
    { id: 5, name: "Dilnoza A.", avatar: "D" },
  ];

  const chatMessages = [
    { id: 1, user: "Sarah K.", message: "Great session!", time: "10:23" },
    { id: 2, user: "Ahmed R.", message: "Can you repeat the last part?", time: "10:24" },
    { id: 3, user: "Zarina M.", message: "Thanks for the explanation!", time: "10:25" },
    { id: 4, user: "Rustam T.", message: "This is very helpful 👍", time: "10:26" },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Stream Area */}
          <div className="lg:col-span-3">
            <Card className="mb-4">
              <CardContent className="p-0">
                {/* Stream Title */}
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl font-bold text-primary mb-1">
                        Advanced React Patterns - Live Workshop
                      </h1>
                      <div className="flex items-center gap-3 text-sm text-secondary">
                        <Badge variant="destructive" className="animate-pulse">
                          🔴 LIVE
                        </Badge>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          45 watching
                        </span>
                        <span>Started 15 minutes ago</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Set Reminder
                    </Button>
                  </div>
                </div>

                {/* Video Player */}
                <div className="bg-black aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-20 w-20 text-white/50 mx-auto mb-4" />
                    <p className="text-white/70">Live stream video would display here</p>
                  </div>
                </div>

                {/* Stream Controls */}
                <div className="p-4 bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant={isCameraOn ? "default" : "destructive"}
                        size="icon"
                        onClick={() => setIsCameraOn(!isCameraOn)}
                      >
                        {isCameraOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                      </Button>
                      <Button
                        variant={isMicOn ? "default" : "destructive"}
                        size="icon"
                        onClick={() => setIsMicOn(!isMicOn)}
                      >
                        {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                      </Button>
                    </div>
                    <Button variant="destructive">
                      <Square className="mr-2 h-4 w-4" />
                      End Stream
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participants Grid */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Participants ({participants.length})
                </h3>
                <div className="flex flex-wrap gap-3">
                  {participants.map((participant) => (
                    <div
                      key={participant.id}
                      className="flex flex-col items-center gap-2 p-3 bg-muted rounded-lg"
                    >
                      <Avatar>
                        <AvatarFallback>{participant.avatar}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-center">{participant.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-[calc(100vh-12rem)] flex flex-col">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Live Chat
                </h3>
              </div>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-3">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="flex gap-2">
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback className="text-xs">{msg.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm text-primary truncate">
                            {msg.user}
                          </span>
                          <span className="text-xs text-secondary">{msg.time}</span>
                        </div>
                        <p className="text-sm text-secondary break-words">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        setMessage("");
                      }
                    }}
                  />
                  <Button size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Stream Info */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-primary mb-2">About this stream</h3>
            <p className="text-secondary mb-4">
              Join us for an advanced React patterns workshop where we'll explore custom hooks,
              compound components, render props, and more. Perfect for intermediate to advanced
              React developers looking to level up their skills.
            </p>
            <div className="flex gap-2">
              <Button variant="outline">
                📁 Save to Course
              </Button>
              <Button variant="outline">
                📋 View Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default LiveStream;
