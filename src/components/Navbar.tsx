import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const { user, logout, isLoggedIn } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Set Goals', href: '/goals' },
    { name: 'Check-in', href: '/checkin' },
    { name: 'Chat', href: '/chat' },
    { name: 'Explore', href: '/explore' },
    ...(user?.role === 'admin' ? [{ name: 'Admin', href: '/admin' }] : []),
  ];

  if (!isLoggedIn) {
    return (
      <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-primary" />
              <span className="font-spiritual font-bold text-xl bg-gradient-spiritual bg-clip-text text-transparent">
                SattvaPath
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="btn-primary">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-primary" />
            <span className="font-spiritual font-bold text-xl bg-gradient-spiritual bg-clip-text text-transparent">
              SattvaPath
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary hover:text-secondary-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Profile Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 p-2 rounded-xl hover:bg-secondary transition-colors"
              >
                <span className="text-2xl">{user?.avatar || '👤'}</span>
                <span className="text-sm font-medium">{user?.name}</span>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-floating border border-border py-2">
                  <div className="px-4 py-2 border-b border-border">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setShowProfileMenu(false);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-destructive hover:bg-destructive/10 w-full"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary hover:text-secondary-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex items-center space-x-3 px-3 py-2">
                  <span className="text-2xl">{user?.avatar || '👤'}</span>
                  <div>
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 w-full mt-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;