import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Code, Wrench, Scissors, ChefHat, Hammer, Palette, TrendingUp, Languages } from "lucide-react";

const InterestSelection = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    { id: "it", label: "IT & Programming", icon: Code },
    { id: "auto", label: "Auto Repair", icon: Wrench },
    { id: "sewing", label: "Sewing & Fashion", icon: Scissors },
    { id: "cooking", label: "Cooking", icon: ChefHat },
    { id: "carpentry", label: "Carpentry", icon: Hammer },
    { id: "design", label: "Design", icon: Palette },
    { id: "marketing", label: "Marketing", icon: TrendingUp },
    { id: "languages", label: "Languages", icon: Languages },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    navigate("/student-dashboard");
  };

  const handleSkip = () => {
    navigate("/student-dashboard");
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Choose Your Interests</h1>
          <p className="text-secondary">
            Select topics you're interested in to get personalized course recommendations
          </p>
          <div className="mt-4">
            <Progress value={(selectedInterests.length / interests.length) * 100} className="h-2" />
            <p className="text-sm text-secondary mt-2">
              {selectedInterests.length} of {interests.length} selected
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {interests.map((interest) => {
                const Icon = interest.icon;
                const isSelected = selectedInterests.includes(interest.id);

                return (
                  <button
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`relative p-6 rounded-lg border-2 transition-all hover:scale-105 ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                          isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-secondary"
                        }`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <p
                        className={`font-semibold ${
                          isSelected ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {interest.label}
                      </p>
                      {isSelected && (
                        <Badge className="absolute top-2 right-2" variant="default">
                          ✓
                        </Badge>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center">
              <Button variant="ghost" onClick={handleSkip}>
                Skip for now
              </Button>
              <Button
                onClick={handleContinue}
                disabled={selectedInterests.length === 0}
                size="lg"
              >
                Continue ({selectedInterests.length})
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterestSelection;
