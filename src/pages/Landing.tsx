import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, BookOpen, Heart, Users, Star, Sun, Leaf } from 'lucide-react';
import templeHero from '@/assets/temple-sunrise-hero.jpg';
import lotusImage from '@/assets/lotus-meditation.jpg';

const Landing = () => {
  const wisdomSteps = [
    {
      icon: BookOpen,
      title: 'Daily Shloka',
      description: 'Begin each day with a verse from the Bhagavad Gita and its profound meaning.',
    },
    {
      icon: Heart,
      title: 'Mindful Practice',
      description: 'Learn meditation and mindfulness techniques rooted in ancient wisdom.',
    },
    {
      icon: Leaf,
      title: 'Digital Detox',
      description: 'Gradually reduce screen dependency using Krishna\'s teachings on attachment.',
    },
  ];

  const pathSteps = [
    {
      step: '1',
      title: 'Awareness',
      description: 'Recognize your current relationship with technology and its impact on your dharma.',
    },
    {
      step: '2',
      title: 'Understanding',
      description: 'Study the Gita\'s teachings on attachment, desire, and the path to inner peace.',
    },
    {
      step: '3',
      title: 'Practice',
      description: 'Implement daily practices: meditation, mantra, and mindful technology use.',
    },
    {
      step: '4',
      title: 'Liberation',
      description: 'Experience freedom from digital bondage and discover your true Self.',
    },
  ];

  const todayShloka = {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    transliteration: "Karmanye vadhikaraste ma phaleshu kadachana",
    translation: "You have the right to perform your actions, but you are not entitled to the fruits of the action.",
    chapter: "Bhagavad Gita 2.47"
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${templeHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <Flower2 className="h-16 w-16 text-primary animate-pulse" />
              <h1 className="text-6xl sm:text-8xl font-spiritual font-bold bg-gradient-spiritual bg-clip-text text-transparent">
                SattvaPath
              </h1>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-sanskrit font-bold text-foreground leading-tight">
              A Journey Toward{' '}
              <span className="bg-gradient-spiritual bg-clip-text text-transparent">
                Clarity
              </span>{' '}
              through the Bhagavad Gita
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-spiritual">
              Break free from digital bondage and discover inner peace through the timeless 
              wisdom of Shree Krishna. Transform screen addiction into spiritual awakening.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link to="/login" className="btn-hero group">
                Begin Your Journey
                <Sun className="ml-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              </Link>
              <button className="text-secondary hover:text-secondary/80 font-spiritual font-semibold text-lg transition-colors">
                Read Today's Wisdom →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Gita Wisdom Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-sanskrit font-bold text-foreground mb-6">
              आज का श्लोक
            </h3>
            <p className="text-xl text-muted-foreground font-spiritual">
              Daily wisdom from the Bhagavad Gita to guide your path
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card-floating p-8 md:p-12 text-center bg-gradient-card border border-primary/20">
              <div className="mb-8">
                <p className="text-2xl md:text-3xl font-sanskrit text-accent font-bold mb-4 leading-relaxed">
                  {todayShloka.sanskrit}
                </p>
                <p className="text-lg md:text-xl font-spiritual italic text-muted-foreground mb-4">
                  {todayShloka.transliteration}
                </p>
              </div>
              
              <div className="border-t border-primary/20 pt-8">
                <p className="text-xl md:text-2xl font-spiritual text-foreground leading-relaxed mb-4">
                  "{todayShloka.translation}"
                </p>
                <p className="text-sm text-primary font-medium tracking-wide">
                  — {todayShloka.chapter}
                </p>
              </div>
              
              <div className="mt-8">
                <button className="btn-primary">
                  Learn Deeper Meaning
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Leave Screen Addiction Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl sm:text-5xl font-sanskrit font-bold text-foreground mb-8">
                The Path to{' '}
                <span className="bg-gradient-spiritual bg-clip-text text-transparent">
                  Digital Liberation
                </span>
              </h3>
              
              <div className="space-y-6 font-spiritual text-lg text-muted-foreground">
                <p>
                  In the Bhagavad Gita, Krishna teaches us about the dangers of attachment and desire. 
                  Modern screens create the same bondage our ancestors warned against.
                </p>
                <p>
                  Excessive screen time creates <strong className="text-accent">maya</strong> (illusion), 
                  pulling us away from our true Self and dharma. It fragments our awareness and 
                  disconnects us from the present moment.
                </p>
                <p>
                  Through the wisdom of the Gita, we can break free from this digital bondage and 
                  return to a life of purpose, peace, and spiritual fulfillment.
                </p>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-destructive font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Screen Addiction</p>
                    <p className="text-sm text-muted-foreground">Endless scrolling, mental fog, anxiety</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-success font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Digital Dharma</p>
                    <p className="text-sm text-muted-foreground">Mindful usage, inner peace, clarity</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={lotusImage} 
                alt="Peaceful lotus meditation" 
                className="rounded-2xl shadow-temple w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided Path Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-sanskrit font-bold text-foreground mb-6">
              Your Spiritual Journey
            </h3>
            <p className="text-xl text-muted-foreground font-spiritual max-w-3xl mx-auto">
              Follow Krishna's teachings through a structured path to overcome digital attachment 
              and discover your true nature.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {pathSteps.map((step, index) => (
              <div 
                key={step.step} 
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <span className="text-2xl font-bold text-white font-sanskrit">{step.step}</span>
                  </div>
                  {index < pathSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  )}
                </div>
                <h4 className="text-xl font-sanskrit font-bold text-foreground mb-3">
                  {step.title}
                </h4>
                <p className="text-muted-foreground font-spiritual">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {wisdomSteps.map((step, index) => (
              <div 
                key={step.title} 
                className="card-floating p-8 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-peace rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-sanskrit font-semibold text-foreground mb-3">
                  {step.title}
                </h4>
                <p className="text-muted-foreground font-spiritual leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-spiritual">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl sm:text-5xl font-sanskrit font-bold text-white mb-6">
            Ready to Begin Your Liberation?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-spiritual">
            Join thousands who have found peace through Krishna's wisdom. Your journey to 
            digital freedom and spiritual awakening starts today.
          </p>
          <Link to="/login" className="btn-hero bg-white text-primary hover:bg-white/90">
            Start Your SattvaPath Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Flower2 className="h-10 w-10 text-primary" />
                <span className="font-spiritual font-bold text-2xl">SattvaPath</span>
              </div>
              <p className="text-background/70 max-w-md font-spiritual leading-relaxed mb-6">
                Guiding souls toward digital liberation through the eternal wisdom of the 
                Bhagavad Gita. Transform your relationship with technology and discover inner peace.
              </p>
              <p className="text-primary/80 italic font-sanskrit text-sm">
                "योगस्थः कुरु कर्माणि" - Established in yoga, perform action
              </p>
            </div>
            <div>
              <h4 className="font-sanskrit font-semibold mb-4 text-lg">Wisdom</h4>
              <ul className="space-y-3 text-background/70 font-spiritual">
                <li><a href="#" className="hover:text-background transition-colors">Daily Shlokas</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Meditation Guide</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Digital Detox</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sanskrit font-semibold mb-4 text-lg">Connect</h4>
              <ul className="space-y-3 text-background/70 font-spiritual">
                <li><a href="mailto:guidance@sattvapath.com" className="hover:text-background transition-colors">guidance@sattvapath.com</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Spiritual Blog</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Yoga Sessions</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Satsang</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/70 font-spiritual">
              © 2024 SattvaPath. Spreading ancient wisdom for modern liberation. 
              <span className="text-primary/80"> ॐ शान्तिः शान्तिः शान्तिः</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;