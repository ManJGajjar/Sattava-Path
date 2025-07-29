import React, { useState } from 'react';
import { Users, TrendingUp, MessageSquare, Settings, Send, Plus, BarChart3 } from 'lucide-react';
import StatCard from '@/components/StatCard';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [showMessageModal, setShowMessageModal] = useState(false);

  // Mock admin data
  const users = [
    { id: 1, name: 'Arjun Sharma', email: 'arjun@email.com', status: 'Active', checkins: 15, lastActive: '2 hours ago' },
    { id: 2, name: 'Kavya Iyer', email: 'kavya@email.com', status: 'Active', checkins: 22, lastActive: '1 day ago' },
    { id: 3, name: 'Ravi Gupta', email: 'ravi@email.com', status: 'Inactive', checkins: 5, lastActive: '5 days ago' },
    { id: 4, name: 'Meera Joshi', email: 'meera@email.com', status: 'Active', checkins: 31, lastActive: '3 hours ago' },
    { id: 5, name: 'Kiran Singh', email: 'kiran@email.com', status: 'Active', checkins: 18, lastActive: '1 hour ago' },
  ];

  const handleBroadcastMessage = () => {
    if (!broadcastMessage.trim()) {
      toast({
        title: 'Message required',
        description: 'Please enter a message to broadcast.',
        variant: 'destructive',
      });
      return;
    }

    // Simulate sending message
    setTimeout(() => {
      toast({
        title: 'Message sent successfully!',
        description: `Broadcast message sent to ${users.length} users.`,
      });
      setBroadcastMessage('');
      setShowMessageModal(false);
    }, 500);
  };

  const handleAddSuggestion = () => {
    toast({
      title: 'Feature coming soon!',
      description: 'The suggestion management feature is in development.',
    });
  };

  if (user?.role !== 'admin') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Admin Dashboard 👨‍💼
        </h1>
        <p className="text-muted-foreground">
          Monitor user engagement and manage the SocialSage platform
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value="2,547"
          subtitle="+12% this week"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          className="animate-slide-up"
        />
        <StatCard
          title="Avg Screen Time"
          value="2h 34m"
          subtitle="15% reduction"
          icon={TrendingUp}
          trend={{ value: -15, isPositive: true }}
          className="animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        />
        <StatCard
          title="Daily Check-ins"
          value="1,823"
          subtitle="Today's total"
          icon={MessageSquare}
          className="animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        />
        <StatCard
          title="Active Goals"
          value="8,456"
          subtitle="Currently set"
          icon={BarChart3}
          trend={{ value: 8, isPositive: true }}
          className="animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* User Management */}
        <div className="lg:col-span-2 space-y-8">
          {/* Users Table */}
          <div className="card-floating animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">User Management</h2>
                <button className="btn-secondary text-sm">
                  <Users className="h-4 w-4 mr-2" />
                  View All Users
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Check-ins</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Last Active</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-muted/20">
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-foreground">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          user.status === 'Active' 
                            ? 'bg-success/10 text-success' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-foreground">{user.checkins}</td>
                      <td className="p-4 text-sm text-muted-foreground">{user.lastActive}</td>
                      <td className="p-4">
                        <button className="text-primary hover:text-primary-hover text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analytics Chart Placeholder */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-xl font-semibold text-foreground mb-6">Usage Analytics</h2>
            <div className="bg-gradient-hero rounded-xl p-8 text-center">
              <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground mb-4">
                Detailed charts and insights coming soon. This will show user engagement trends, 
                goal completion rates, and platform usage statistics.
              </p>
              <button className="btn-primary">
                Configure Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Admin Actions Sidebar */}
        <div className="space-y-6">
          {/* Broadcast Message */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-primary" />
              Broadcast Message
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Send an announcement to all active users
            </p>
            <button
              onClick={() => setShowMessageModal(true)}
              className="btn-primary w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              Compose Message
            </button>
          </div>

          {/* Content Management */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Plus className="h-5 w-5 mr-2 text-primary" />
              Content Management
            </h3>
            <div className="space-y-3">
              <button
                onClick={handleAddSuggestion}
                className="w-full btn-secondary text-left"
              >
                Add New Suggestion
              </button>
              <button className="w-full btn-secondary text-left">
                Manage Activities
              </button>
              <button className="w-full btn-secondary text-left">
                Update App Database
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Today's Highlights</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">New Signups</span>
                <span className="text-sm font-medium text-success">+23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Goals Completed</span>
                <span className="text-sm font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Avg Session</span>
                <span className="text-sm font-medium">8m 42s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Support Tickets</span>
                <span className="text-sm font-medium">2</span>
              </div>
            </div>
          </div>

          {/* System Settings */}
          <div className="card-floating p-6 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              System Settings
            </h3>
            <div className="space-y-3">
              <button className="w-full btn-secondary text-left">
                Platform Settings
              </button>
              <button className="w-full btn-secondary text-left">
                Notification Config
              </button>
              <button className="w-full btn-secondary text-left">
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Broadcast Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-floating max-w-md w-full animate-bounce-in">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground">Broadcast Message</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message to all users
                </label>
                <textarea
                  value={broadcastMessage}
                  onChange={(e) => setBroadcastMessage(e.target.value)}
                  placeholder="Enter your announcement here..."
                  className="input-modern w-full h-32 resize-none"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleBroadcastMessage}
                  className="flex-1 btn-primary"
                >
                  Send to {users.length} Users
                </button>
                <button
                  onClick={() => setShowMessageModal(false)}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;