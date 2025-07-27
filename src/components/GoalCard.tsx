import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

interface GoalCardProps {
  appName: string;
  appIcon: string;
  initialLimit: number;
  initialEnabled: boolean;
  onLimitChange?: (limit: number) => void;
  onEnabledChange?: (enabled: boolean) => void;
}

const GoalCard: React.FC<GoalCardProps> = ({
  appName,
  appIcon,
  initialLimit,
  initialEnabled,
  onLimitChange,
  onEnabledChange,
}) => {
  const [limit, setLimit] = useState(initialLimit);
  const [enabled, setEnabled] = useState(initialEnabled);

  const handleLimitChange = (newLimit: number[]) => {
    const limitValue = newLimit[0];
    setLimit(limitValue);
    onLimitChange?.(limitValue);
  };

  const handleEnabledChange = (newEnabled: boolean) => {
    setEnabled(newEnabled);
    onEnabledChange?.(newEnabled);
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  return (
    <div className={`card-gradient p-6 transition-all duration-300 ${
      enabled ? 'ring-2 ring-primary/20' : 'opacity-60'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{appIcon}</div>
          <div>
            <h3 className="font-semibold text-foreground">{appName}</h3>
            <p className="text-sm text-muted-foreground">
              Daily limit: {formatTime(limit)}
            </p>
          </div>
        </div>
        <Switch
          checked={enabled}
          onCheckedChange={handleEnabledChange}
        />
      </div>

      {enabled && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Time limit</span>
            <span className="font-medium text-primary">{formatTime(limit)}</span>
          </div>
          
          <Slider
            value={[limit]}
            onValueChange={handleLimitChange}
            max={480} // 8 hours
            min={15}
            step={15}
            className="w-full"
          />
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>15m</span>
            <span>8h</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalCard;