import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Target, TrendingUp, Award, Star, Users, Shield } from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: Target,
      title: 'Track',
      description: 'Monitor your social media usage with detailed analytics and insights.',
    },
    {
      icon: TrendingUp,
      title: 'Transform',
      description: 'Build healthier digital habits with personalized goals and challenges.',
    },
    {
      icon: Award,
      title: 'Triumph',
      description: 'Celebrate your progress and unlock achievements as you grow.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'College Student',
      content: 'SocialSage helped me reduce my Instagram time by 70% and focus on my studies.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Graduate Student',
      content: 'The daily check-ins and suggestions really keep me motivated and accountable.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'High School Student',
      content: 'I love the chatbot feature - it feels like having a personal coach.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Brain className="h-16 w-16 text-primary" />
              <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SocialSage
              </h1>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              Master Your Screen Time,{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transform Your Life
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who have reclaimed their time and focus with our 
              intelligent social media management platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/login" className="btn-hero">
                Get Started Free
              </Link>
              <button className="text-primary hover:text-primary-hover font-semibold text-lg transition-colors">
                Watch Demo →
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Journey to Digital Wellness
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your relationship with social media through our proven three-step approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="card-floating p-8 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Students Say
            </h3>
            <p className="text-lg text-muted-foreground">
              Real stories from students who transformed their digital habits
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className="card-floating p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Take Control?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already started their journey to healthier 
            digital habits. Your future self will thank you.
          </p>
          <Link to="/login" className="btn-hero">
            Start Your Journey Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">SocialSage</span>
              </div>
              <p className="text-background/70 max-w-md">
                Empowering students to build healthier relationships with technology 
                and unlock their full potential.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">About</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 SocialSage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;