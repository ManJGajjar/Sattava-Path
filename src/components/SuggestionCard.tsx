import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface SuggestionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  onTryNow?: () => void;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({
  title,
  description,
  icon: Icon,
  category,
  onTryNow,
  difficulty = 'Easy',
}) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'bg-success/10 text-success border-success/20';
      case 'Medium':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'Hard':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div 
      className="card-floating p-6 group cursor-pointer hover:shadow-floating transition-shadow" 
      onClick={onTryNow}
      role="button"
      tabIndex={0}
      aria-label={`Try ${title} - ${difficulty} difficulty ${category} activity`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onTryNow?.();
        }
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gradient-primary rounded-xl text-white" aria-hidden="true">
          <Icon className="h-6 w-6" />
        </div>
        <span 
          className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(difficulty)}`}
          aria-label={`Difficulty: ${difficulty}`}
        >
          {difficulty}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {category}
          </span>
          <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex items-center text-primary font-medium text-sm pt-2 group-hover:translate-x-1 transition-transform" aria-hidden="true">
          <span>Try this today</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;