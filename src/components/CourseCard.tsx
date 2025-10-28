import { Star, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  teacher: string;
  thumbnail: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  duration: string;
  isNew?: boolean;
  isTop?: boolean;
}

export const CourseCard = ({ 
  id, 
  title, 
  teacher, 
  thumbnail, 
  price, 
  originalPrice,
  rating, 
  students,
  duration,
  isNew,
  isTop
}: CourseCardProps) => {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <Link to={`/course/${id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex gap-2">
            {isTop && (
              <Badge className="bg-secondary text-secondary-foreground">
                Top
              </Badge>
            )}
            {isNew && (
              <Badge className="bg-primary text-primary-foreground">
                New
              </Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-destructive text-destructive-foreground">
                -{discount}%
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground">{teacher}</p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{students}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 pt-2 border-t">
            <span className="text-xl font-bold text-foreground">
              {price.toLocaleString()} so'm
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice.toLocaleString()} so'm
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};
