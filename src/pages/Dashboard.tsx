import React, { useState } from 'react';
import { Clock, TrendingDown, Target, Brain, Calendar, CheckCircle } from 'lucide-react';
import StatCard from '@/components/StatCard';
import MoodModal from '@/components/MoodModal';
import SuggestionCard from '@/components/SuggestionCard';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const [showMoodModal, setShowMoodModal] = useState(false);
  const [todaysMood, setTodaysMood] = useState<number | null>(null);
  const { user } = useAuth();

  const handleMoodSubmit = (mood: number, notes?: string) => {
    setTodaysMood(mood);
    console.log('Mood submitted:', { mood, notes });
  };

  const suggestions = [
    {
      title: 'Take a 10-minute walk',
      description: 'Fresh air and movement can help reset your focus and reduce digital fatigue.',
      icon: Calendar,
      category: 'Mindfulness',
      difficulty: 'Easy' as const,
    },
    {
      title: 'Try the 20-20-20 rule',
      description: 'Every 20 minutes, look at something 20 feet away for 20 seconds.',
      icon: Target,
      category: 'Health',
      difficulty: 'Easy' as const,
    },
    {
      title: 'Practice deep breathing',
      description: 'Take 5 deep breaths to center yourself before checking your phone.',
      icon: Brain,
      category: 'Mindfulness',
      difficulty: 'Easy' as const,
    },
  ];

  const getMoodEmoji = (mood: number) => {
    const moods = ['😢', '😟', '😐', '😊', '🤩'];
    return moods[mood - 1];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, {user?.name?.split(' ')[0]}! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's how you're doing today. Keep up the great work!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Screen Time Today"
          value="2h 34m"
          subtitle="23% less than yesterday"
          icon={Clock}
          trend={{ value: -23, isPositive: true }}
          className="animate-slide-up"
        />
        <StatCard
          title="Apps Opened"
          value="18"
          subtitle="5 less than average"
          icon={TrendingDown}
          trend={{ value: -12, isPositive: true }}
          className="animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        />
        <StatCard
          title="Goals Met"
          value="3/4"
          subtitle="Instagram goal pending"
          icon={Target}
          className="animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        />
        <StatCard
          title="Streak"
          value="7 days"
          subtitle="Your longest streak!"
          icon={CheckCircle}
          trend={{ value: 15, isPositive: true }}
          className="animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Daily Progress */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl font-semibold text-foreground mb-6">Today's Progress</h2>
            
            <div className="space-y-6">
              {/* Instagram Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📸</div>
                    <div>
                      <h3 className="font-medium text-foreground">Instagram</h3>
                      <p className="text-sm text-muted-foreground">Goal: 1 hour</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-destructive">1h 15m</p>
                    <p className="text-xs text-muted-foreground">15m over limit</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-destructive h-2 rounded-full" style={{ width: '125%', maxWidth: '100%' }}></div>
                </div>
              </div>

              {/* YouTube Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📺</div>
                    <div>
                      <h3 className="font-medium text-foreground">YouTube</h3>
                      <p className="text-sm text-muted-foreground">Goal: 2 hours</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-success">45m</p>
                    <p className="text-xs text-muted-foreground">1h 15m remaining</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '37.5%' }}></div>
                </div>
              </div>

              {/* TikTok Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🎵</div>
                    <div>
                      <h3 className="font-medium text-foreground">TikTok</h3>
                      <p className="text-sm text-muted-foreground">Goal: 30 minutes</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">22m</p>
                    <p className="text-xs text-muted-foreground">8m remaining</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '73%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-xl font-semibold text-foreground mb-6">Suggestions for You</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {suggestions.map((suggestion, index) => (
                <SuggestionCard
                  key={suggestion.title}
                  {...suggestion}
                  onTryNow={() => console.log('Trying:', suggestion.title)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Mood Check-in */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              How are you feeling?
            </h3>
            
            {todaysMood ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-2">{getMoodEmoji(todaysMood)}</div>
                <p className="text-sm text-muted-foreground">
                  Thanks for checking in today!
                </p>
                <button
                  onClick={() => setShowMoodModal(true)}
                  className="text-primary text-sm mt-2 hover:text-primary-hover transition-colors"
                >
                  Update mood
                </button>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-muted-foreground mb-4 text-sm">
                  Take a moment to reflect on your current mood
                </p>
                <button
                  onClick={() => setShowMoodModal(true)}
                  className="btn-primary w-full"
                >
                  Check-in Now
                </button>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">This Week</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Avg Screen Time</span>
                <span className="text-sm font-medium">2h 45m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Best Day</span>
                <span className="text-sm font-medium text-success">Monday</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Goals Met</span>
                <span className="text-sm font-medium">18/20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Mood Average</span>
                <span className="text-sm font-medium">😊 Good</span>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full btn-secondary text-left">
                📱 Start Focus Session
              </button>
              <button className="w-full btn-secondary text-left">
                📊 View Weekly Report
              </button>
              <button className="w-full btn-secondary text-left">
                🎯 Update Goals
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mood Modal */}
      <MoodModal
        isOpen={showMoodModal}
        onClose={() => setShowMoodModal(false)}
        onSubmit={handleMoodSubmit}
      />
    </div>
  );
};

export default Dashboard;