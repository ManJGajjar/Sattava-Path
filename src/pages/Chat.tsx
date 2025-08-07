import React, { useState, useEffect, useRef } from 'react';
import { Send, Brain, Sparkles } from 'lucide-react';
import ChatMessage from '@/components/ChatMessage';
import LoadingSkeleton from '@/components/LoadingSkeleton';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Namaste! I'm your personal SattvaPath guide. I'm here to help you build mindful digital habits through the wisdom of the Bhagavad Gita. What would you like to explore today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Help me stay focused while studying",
    "I'm scrolling too much at night",
    "Suggest a new hobby to try",
    "How do I resist social media urges?",
    "I feel anxious without my phone",
    "Tips for better sleep habits",
  ];

  const aiResponses = [
    "That's a great question! Let me share some proven strategies that have helped many students...",
    "I understand this can be challenging. Here's what I recommend based on your usage patterns...",
    "You're taking a positive step by asking! Let's work on some practical solutions together...",
    "Based on what successful users have shared, here are some effective approaches...",
    "This is actually quite common! Many students face similar challenges. Let's tackle this step by step...",
    "I love that you're being proactive about this! Here's my personalized advice for you...",
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateAIResponse = (userMessage: string): string => {
    const responses = {
      focus: "Great question about focus! Here are some strategies that work well: 1) Try the Pomodoro technique - 25 minutes focused work, 5 minute break. 2) Put your phone in another room or use app blockers during study time. 3) Create a dedicated study space that's phone-free. 4) Use the 'airplane mode' trick when you need deep focus. Would you like me to elaborate on any of these?",
      night: "Late night scrolling is super common! Here's what I recommend: 1) Set a 'digital sunset' - no social media 1-2 hours before bed. 2) Charge your phone outside your bedroom. 3) Use blue light filters after sunset. 4) Try reading or meditation instead. 5) Set up a relaxing bedtime routine. The key is replacing the habit, not just removing it. What time do you usually go to bed?",
      hobby: "I'd love to suggest some engaging hobbies! Based on what other students enjoy: 🎨 Creative: drawing, painting, photography, writing, music 🏃 Active: hiking, yoga, rock climbing, dancing, sports ⚡ Mental: reading, puzzles, learning languages, coding 🤝 Social: joining clubs, volunteering, cooking with friends. What kind of activities usually interest you? I can give more specific suggestions!",
      resist: "Resisting social media urges gets easier with practice! Try these techniques: 1) The '5-minute rule' - tell yourself you'll check in 5 minutes, often the urge passes. 2) Keep your hands busy with a fidget toy or stress ball. 3) Have a 'replacement activity' ready - like texting a friend or doing jumping jacks. 4) Use the 'STOP' method: Stop, Take a breath, Observe how you feel, Proceed mindfully. 5) Remember your goals - why are you limiting usage? What would you rather be doing?",
      anxiety: "Phone anxiety is really real and valid! Many people experience this. Here's what can help: 1) Start with short phone-free periods (15-30 minutes) and gradually increase. 2) Practice deep breathing when you feel anxious. 3) Remind yourself that most notifications aren't urgent. 4) Use a watch or physical alarm clock so you don't need your phone for time. 5) Talk to friends/family about your goals - they can support you. Remember, this feeling is temporary and gets easier with practice!",
      sleep: "Better sleep habits are so important! Here's my sleep optimization guide: 1) Consistent sleep schedule - same bedtime and wake time daily. 2) No screens 1 hour before bed (blue light disrupts melatonin). 3) Cool, dark room (65-68°F is ideal). 4) No caffeine after 2 PM. 5) Try relaxing activities: reading, gentle stretching, meditation. 6) If you can't sleep within 20 minutes, get up and do a quiet activity until sleepy. Your brain will thank you for the quality rest!",
    };

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('focus') || lowerMessage.includes('study')) {
      return responses.focus;
    } else if (lowerMessage.includes('night') || lowerMessage.includes('scroll') || lowerMessage.includes('evening')) {
      return responses.night;
    } else if (lowerMessage.includes('hobby') || lowerMessage.includes('activity')) {
      return responses.hobby;
    } else if (lowerMessage.includes('resist') || lowerMessage.includes('urge') || lowerMessage.includes('tempt')) {
      return responses.resist;
    } else if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety') || lowerMessage.includes('worry')) {
      return responses.anxiety;
    } else if (lowerMessage.includes('sleep') || lowerMessage.includes('bed')) {
      return responses.sleep;
    } else {
      return aiResponses[Math.floor(Math.random() * aiResponses.length)] + " Could you tell me more about what specific challenges you're facing? That way I can give you more targeted advice!";
    }
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputText.trim();
    if (!textToSend) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    // Add AI response
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: generateAIResponse(textToSend),
      isUser: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-spiritual rounded-2xl">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-spiritual font-bold text-foreground">
            SattvaPath Guide
          </h1>
        </div>
        <p className="text-muted-foreground">
          Your AI guide for mindful living and digital wisdom through ancient teachings
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Chat Area */}
        <div className="lg:col-span-3">
          <div className="card-floating">
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-6">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
              
              {isTyping && (
                <ChatMessage
                  message=""
                  isUser={false}
                  isTyping={true}
                />
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about digital wellness, habits, or staying focused..."
                    className="input-modern w-full h-20 resize-none"
                    disabled={isTyping}
                  />
                </div>
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim() || isTyping}
                  className={`btn-primary px-6 self-end ${
                    !inputText.trim() || isTyping ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Prompts */}
          <div className="card-floating p-6 animate-slide-up">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              Quick Topics
            </h3>
            <div className="space-y-2">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isTyping}
                  className="w-full text-left p-3 text-sm bg-muted/50 hover:bg-muted rounded-lg transition-colors hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Tips */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">💡 Chat Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Be specific about your challenges</li>
              <li>• Ask for practical strategies</li>
              <li>• Share what you've already tried</li>
              <li>• I can help with motivation and accountability</li>
              <li>• All conversations are private</li>
            </ul>
          </div>

          {/* Your Progress */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Your Progress</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Chat Sessions</span>
                <span className="text-sm font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Goals Discussed</span>
                <span className="text-sm font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Strategies Shared</span>
                <span className="text-sm font-medium">25</span>
              </div>
            </div>
          </div>

          {/* Recent Topics */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Topics</h3>
            <div className="space-y-2">
              {[
                '📱 Late night scrolling',
                '📚 Study focus tips',
                '😴 Better sleep habits',
                '🎯 Setting boundaries',
              ].map((topic, index) => (
                <div key={index} className="text-sm text-muted-foreground p-2 bg-muted/30 rounded-lg">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;