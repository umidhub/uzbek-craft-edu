import { Star, BookOpen, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface TeacherCardProps {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
  rating: number;
  coursesCount: number;
  studentsCount: number;
}

export const TeacherCard = ({
  id,
  name,
  avatar,
  specialization,
  rating,
  coursesCount,
  studentsCount
}: TeacherCardProps) => {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-all">
      <Link to={`/teacher/${id}`} className="block">
        <Avatar className="h-20 w-20 mx-auto mb-4 ring-2 ring-primary/10">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-primary text-primary-foreground text-xl">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{specialization}</p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-4 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>{coursesCount}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{studentsCount}</span>
          </div>
        </div>
      </Link>

      <Button variant="outline" className="w-full">
        View Profile
      </Button>
    </Card>
  );
};
