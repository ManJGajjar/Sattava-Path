import React, { useState } from 'react';
import { Save, Target, TrendingUp } from 'lucide-react';
import GoalCard from '@/components/GoalCard';
import { useToast } from '@/hooks/use-toast';

const Goals = () => {
  const { toast } = useToast();
  const [goals, setGoals] = useState([
    { id: 1, appName: 'Instagram', appIcon: '📸', limit: 60, enabled: true },
    { id: 2, appName: 'TikTok', appIcon: '🎵', limit: 30, enabled: true },
    { id: 3, appName: 'YouTube', appIcon: '📺', limit: 120, enabled: true },
    { id: 4, appName: 'Snapchat', appIcon: '👻', limit: 45, enabled: false },
    { id: 5, appName: 'Twitter/X', appIcon: '🐦', limit: 60, enabled: false },
    { id: 6, appName: 'Facebook', appIcon: '📘', limit: 90, enabled: false },
    { id: 7, appName: 'Reddit', appIcon: '🔶', limit: 75, enabled: false },
    { id: 8, appName: 'Discord', appIcon: '🎮', limit: 180, enabled: false },
  ]);

  const handleLimitChange = (id: number, newLimit: number) => {
    setGoals(prev => prev.map(goal => 
      goal.id === id ? { ...goal, limit: newLimit } : goal
    ));
  };

  const handleEnabledChange = (id: number, enabled: boolean) => {
    setGoals(prev => prev.map(goal => 
      goal.id === id ? { ...goal, enabled } : goal
    ));
  };

  const handleSaveGoals = () => {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Goals saved!',
        description: 'Your daily limits have been updated successfully.',
      });
    }, 500);
  };

  const activeGoals = goals.filter(goal => goal.enabled);
  const totalActiveTime = activeGoals.reduce((sum, goal) => sum + goal.limit, 0);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Set Your Daily Goals 🎯
        </h1>
        <p className="text-muted-foreground">
          Define healthy limits for your social media usage. You can always adjust these later.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Goals Grid */}
        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <div 
                key={goal.id} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GoalCard
                  appName={goal.appName}
                  appIcon={goal.appIcon}
                  initialLimit={goal.limit}
                  initialEnabled={goal.enabled}
                  onLimitChange={(limit) => handleLimitChange(goal.id, limit)}
                  onEnabledChange={(enabled) => handleEnabledChange(goal.id, enabled)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Summary Sidebar */}
        <div className="space-y-6">
          {/* Goals Summary */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-primary" />
              My Goals Summary
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-hero rounded-xl">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{activeGoals.length}</p>
                  <p className="text-sm text-muted-foreground">Active Apps</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Daily Limit</span>
                  <span className="text-sm font-medium">{formatTime(totalActiveTime)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Average per App</span>
                  <span className="text-sm font-medium">
                    {activeGoals.length > 0 ? formatTime(Math.round(totalActiveTime / activeGoals.length)) : '0m'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Strictest Limit</span>
                  <span className="text-sm font-medium">
                    {activeGoals.length > 0 ? formatTime(Math.min(...activeGoals.map(g => g.limit))) : '0m'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Goals List */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-success" />
              Active Goals
            </h3>
            
            {activeGoals.length > 0 ? (
              <div className="space-y-3">
                {activeGoals.map(goal => (
                  <div key={goal.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{goal.appIcon}</span>
                      <span className="text-sm font-medium">{goal.appName}</span>
                    </div>
                    <span className="text-xs text-primary font-medium">
                      {formatTime(goal.limit)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">
                No active goals yet. Enable some apps above to get started!
              </p>
            )}
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveGoals}
            className="w-full btn-success flex items-center justify-center space-x-2 animate-slide-up"
            style={{ animationDelay: '1s' }}
          >
            <Save className="h-5 w-5" />
            <span>Save Goals</span>
          </button>

          {/* Tips */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '1.1s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">💡 Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Start with realistic limits you can achieve</li>
              <li>• Gradually reduce time as you build better habits</li>
              <li>• Focus on 2-3 apps initially for better success</li>
              <li>• Remember: progress over perfection!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;