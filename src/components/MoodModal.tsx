import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface MoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (mood: number, notes?: string) => void;
}

const MoodModal: React.FC<MoodModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const moods = [
    { value: 1, emoji: '😢', label: 'Very Bad' },
    { value: 2, emoji: '😟', label: 'Bad' },
    { value: 3, emoji: '😐', label: 'Okay' },
    { value: 4, emoji: '😊', label: 'Good' },
    { value: 5, emoji: '🤩', label: 'Amazing' },
  ];

  const handleSubmit = () => {
    if (selectedMood !== null) {
      onSubmit?.(selectedMood, notes);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setSelectedMood(null);
        setNotes('');
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-floating max-w-md w-full animate-bounce-in">
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Thanks for checking in!
            </h3>
            <p className="text-muted-foreground">
              Your mood has been recorded. Keep up the great work! 🌟
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                How are you feeling today?
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-5 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.value)}
                    className={`p-4 rounded-xl text-center transition-all duration-200 hover:scale-105 ${
                      selectedMood === mood.value
                        ? 'bg-primary/10 ring-2 ring-primary'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <div className="text-3xl mb-2">{mood.emoji}</div>
                    <div className="text-xs font-medium text-muted-foreground">
                      {mood.label}
                    </div>
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Any thoughts? (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="How was your day? What made you feel this way?"
                  className="input-modern w-full h-24 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={selectedMood === null}
                className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedMood !== null
                    ? 'btn-primary'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                Submit Check-in
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MoodModal;