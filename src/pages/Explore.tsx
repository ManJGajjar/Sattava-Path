import React, { useState } from 'react';
import { Search, Filter, BookOpen, Dumbbell, Brain, Users, Music, Palette } from 'lucide-react';
import SuggestionCard from '@/components/SuggestionCard';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Filter, count: 24 },
    { name: 'Learning', icon: BookOpen, count: 8 },
    { name: 'Fitness', icon: Dumbbell, count: 6 },
    { name: 'Mindfulness', icon: Brain, count: 5 },
    { name: 'Social', icon: Users, count: 3 },
    { name: 'Creative', icon: Palette, count: 2 },
  ];

  const activities = [
    {
      title: '10-Minute Morning Meditation',
      description: 'Start your day with mindfulness and intention. A simple practice that reduces the urge to immediately check your phone.',
      icon: Brain,
      category: 'Mindfulness',
      difficulty: 'Easy' as const,
    },
    {
      title: 'Learn a New Language',
      description: 'Duolingo, Babbel, or language exchange apps can replace mindless scrolling with productive learning.',
      icon: BookOpen,
      category: 'Learning',
      difficulty: 'Medium' as const,
    },
    {
      title: '15-Minute Home Workout',
      description: 'Quick bodyweight exercises that boost energy and mood. Perfect for breaking the screen time cycle.',
      icon: Dumbbell,
      category: 'Fitness',
      difficulty: 'Easy' as const,
    },
    {
      title: 'Digital Art Creation',
      description: 'Channel your creativity into digital art or design. Use apps like Procreate or Adobe Creative Suite.',
      icon: Palette,
      category: 'Creative',
      difficulty: 'Medium' as const,
    },
    {
      title: 'Read for 20 Minutes',
      description: 'Dive into a good book, article, or audiobook. Choose topics that genuinely interest you.',
      icon: BookOpen,
      category: 'Learning',
      difficulty: 'Easy' as const,
    },
    {
      title: 'Call a Friend or Family',
      description: 'Real human connection beats digital interactions. Strengthen your relationships with a meaningful conversation.',
      icon: Users,
      category: 'Social',
      difficulty: 'Easy' as const,
    },
    {
      title: 'Coding Practice Session',
      description: 'Learn programming through interactive platforms like Codecademy, freeCodeCamp, or LeetCode.',
      icon: BookOpen,
      category: 'Learning',
      difficulty: 'Hard' as const,
    },
    {
      title: 'Nature Walk & Photography',
      description: 'Combine physical activity with creative expression. Leave your phone on airplane mode and focus on the present.',
      icon: Dumbbell,
      category: 'Fitness',
      difficulty: 'Easy' as const,
    },
    {
      title: 'Journal Writing',
      description: 'Reflect on your thoughts and goals. A powerful way to process emotions and track personal growth.',
      icon: BookOpen,
      category: 'Mindfulness',
      difficulty: 'Easy' as const,
    },
    {
      title: 'Learn an Instrument',
      description: 'Guitar, piano, ukulele, or any instrument you find interesting. YouTube has great free tutorials.',
      icon: Music,
      category: 'Creative',
      difficulty: 'Medium' as const,
    },
    {
      title: 'Cooking a New Recipe',
      description: 'Challenge yourself with a new cuisine or technique. Cooking is both creative and rewarding.',
      icon: Palette,
      category: 'Learning',
      difficulty: 'Medium' as const,
    },
    {
      title: 'Yoga Flow Practice',
      description: 'Connect mind and body with gentle yoga movements. Great for flexibility and mental clarity.',
      icon: Brain,
      category: 'Mindfulness',
      difficulty: 'Easy' as const,
    },
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || activity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTryActivity = (title: string) => {
    console.log('Trying activity:', title);
    // In a real app, this could track engagement, save to user's activity list, etc.
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Explore Healthy Activities 🌟
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover engaging alternatives to social media. Build new skills, improve your wellbeing, and find activities you actually enjoy.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4 animate-slide-up">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-modern pl-10 w-full"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.name
                  ? 'bg-primary text-primary-foreground scale-105'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
              <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Activity Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredActivities.map((activity, index) => (
          <div
            key={activity.title}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <SuggestionCard
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
              category={activity.category}
              difficulty={activity.difficulty}
              onTryNow={() => handleTryActivity(activity.title)}
            />
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredActivities.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No activities found
          </h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search terms or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="btn-primary"
          >
            View All Activities
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="card-floating p-8 text-center bg-gradient-hero animate-slide-up">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Create Your Own Challenge
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't see something you're interested in? Create a personalized challenge that matches your goals and interests. 
          Small, consistent actions lead to big changes!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Suggest New Activity
          </button>
          <button className="btn-secondary">
            Create Personal Challenge
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card-floating p-6 text-center animate-slide-up">
          <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
          <p className="text-sm text-muted-foreground">Students engaged</p>
        </div>
        <div className="card-floating p-6 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="text-3xl font-bold text-success mb-2">89%</div>
          <p className="text-sm text-muted-foreground">Found new hobbies</p>
        </div>
        <div className="card-floating p-6 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-3xl font-bold text-accent mb-2">4.8★</div>
          <p className="text-sm text-muted-foreground">Average rating</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;