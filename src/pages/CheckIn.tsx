import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, Send, TrendingUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';

const CheckIn = () => {
  const [mood, setMood] = useState<number | null>(null);
  const [screenTime, setScreenTime] = useState([180]); // 3 hours default
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const moods = [
    { value: 1, emoji: '😢', label: 'Very Bad', color: 'text-red-500' },
    { value: 2, emoji: '😟', label: 'Bad', color: 'text-orange-500' },
    { value: 3, emoji: '😐', label: 'Okay', color: 'text-yellow-500' },
    { value: 4, emoji: '😊', label: 'Good', color: 'text-green-500' },
    { value: 5, emoji: '🤩', label: 'Amazing', color: 'text-emerald-500' },
  ];

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mood === null) {
      toast({
        title: 'Please select your mood',
        description: 'We need to know how you\'re feeling today.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Check-in completed! 🎉',
      description: 'Thank you for sharing how your day went. Keep up the great work!',
    });

    // Reset form
    setMood(null);
    setScreenTime([180]);
    setNotes('');
    setIsSubmitting(false);
  };

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Daily Check-In 📝
        </h1>
        <p className="text-muted-foreground mb-4">
          Take a moment to reflect on your day and track your progress
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{today}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Mood Selection */}
            <div className="card-floating p-6 animate-slide-up">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                How are you feeling today?
              </h2>
              <p className="text-muted-foreground mb-6">
                Your mood affects your digital habits. Let's track how you're doing.
              </p>
              
              <div className="grid grid-cols-5 gap-4">
                {moods.map((moodOption) => (
                  <button
                    key={moodOption.value}
                    type="button"
                    onClick={() => setMood(moodOption.value)}
                    className={`p-4 rounded-xl text-center transition-all duration-200 hover:scale-105 ${
                      mood === moodOption.value
                        ? 'bg-primary/10 ring-2 ring-primary scale-105'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <div className="text-4xl mb-2">{moodOption.emoji}</div>
                    <div className={`text-xs font-medium ${
                      mood === moodOption.value ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {moodOption.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Screen Time */}
            <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                How much time did you spend on social media today?
              </h2>
              <p className="text-muted-foreground mb-6">
                Be honest - this helps us understand your patterns better.
              </p>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatTime(screenTime[0])}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estimated total screen time
                  </p>
                </div>

                <Slider
                  value={screenTime}
                  onValueChange={setScreenTime}
                  max={720} // 12 hours
                  min={0}
                  step={15}
                  className="w-full"
                />
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0m</span>
                  <span>6h</span>
                  <span>12h</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                How was your day? (Optional)
              </h2>
              <p className="text-muted-foreground mb-4">
                Share any thoughts, challenges, or wins from today.
              </p>
              
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Today I felt... I struggled with... I'm proud that I..."
                className="input-modern w-full h-32 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={mood === null || isSubmitting}
              className={`w-full btn-success flex items-center justify-center space-x-2 ${
                mood === null || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              } animate-slide-up`}
              style={{ animationDelay: '0.3s' }}
            >
              <Send className="h-5 w-5" />
              <span>{isSubmitting ? 'Submitting...' : 'Complete Check-In'}</span>
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Today's Progress */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-success" />
              Today's Progress
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Goals Met</span>
                <span className="text-sm font-medium text-success">3/4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Actual vs Target</span>
                <span className="text-sm font-medium">{formatTime(screenTime[0])} / 2h 30m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Streak</span>
                <span className="text-sm font-medium text-primary">7 days</span>
              </div>
            </div>
          </div>

          {/* Recent Check-ins */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Check-ins</h3>
            
            <div className="space-y-3">
              {[
                { date: 'Yesterday', mood: '😊', time: '2h 15m' },
                { date: 'Dec 23', mood: '😐', time: '3h 45m' },
                { date: 'Dec 22', mood: '🤩', time: '1h 30m' },
              ].map((checkin, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{checkin.mood}</span>
                    <span className="text-sm text-muted-foreground">{checkin.date}</span>
                  </div>
                  <span className="text-xs font-medium">{checkin.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Encouragement */}
          <div className="card-floating p-6 bg-gradient-hero animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-3">💪 Keep Going!</h3>
            <p className="text-sm text-muted-foreground">
              Regular check-ins help you stay aware of your patterns and make positive changes. 
              You're doing great by taking time to reflect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;