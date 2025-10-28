import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Send, Paperclip, Search, MoreVertical } from "lucide-react";
import teacherAvatar1 from "@/assets/teacher-avatar-1.jpg";
import teacherAvatar2 from "@/assets/teacher-avatar-2.jpg";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Aziz Karimov",
      avatar: teacherAvatar1,
      lastMessage: "Thanks for the question! Let me explain...",
      time: "2 min ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Malika Yusupova",
      avatar: teacherAvatar2,
      lastMessage: "The next live session is scheduled for...",
      time: "1 hour ago",
      unread: 0,
      online: true,
    },
    {
      id: 3,
      name: "Rustam Alimov",
      avatar: "",
      lastMessage: "I've uploaded the new resources",
      time: "Yesterday",
      unread: 0,
      online: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Hello! I have a question about the latest lesson.",
      time: "10:23",
    },
    {
      id: 2,
      sender: "me",
      text: "Hi! Of course, what would you like to know?",
      time: "10:24",
    },
    {
      id: 3,
      sender: "them",
      text: "Can you explain the difference between useState and useReducer?",
      time: "10:25",
    },
    {
      id: 4,
      sender: "me",
      text: "Great question! useState is best for simple state, while useReducer is better for complex state logic...",
      time: "10:26",
    },
    {
      id: 5,
      sender: "them",
      text: "Thanks for the question! Let me explain...",
      time: "10:28",
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Messages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="lg:col-span-1 p-0 overflow-hidden">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </div>

            <ScrollArea className="h-[calc(100vh-20rem)]">
              <div className="divide-y">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                      selectedChat === conv.id ? "bg-muted" : ""
                    }`}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={conv.avatar} />
                        <AvatarFallback>{conv.name[0]}</AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold text-primary truncate">{conv.name}</p>
                        <span className="text-xs text-secondary whitespace-nowrap ml-2">
                          {conv.time}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-secondary truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <Badge variant="default" className="ml-2">
                            {conv.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 p-0 overflow-hidden flex flex-col h-[calc(100vh-16rem)]">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={conversations[0].avatar} />
                    <AvatarFallback>{conversations[0].name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="font-semibold text-primary">{conversations[0].name}</p>
                  <p className="text-xs text-secondary">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === "me"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm break-words">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "me" ? "text-primary-foreground/70" : "text-secondary"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setNewMessage("");
                    }
                  }}
                />
                <Button size="icon">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-secondary mt-2">
                Press Enter to send, Shift + Enter for new line
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Messages;
