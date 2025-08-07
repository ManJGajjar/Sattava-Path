import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('sattvapath_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo credentials
    if (email === 'seeker@sattvapath.com' && password === 'seeker123') {
      const seekerUser: User = {
        id: '1',
        name: 'Arjun Sharma',
        email: 'seeker@sattvapath.com',
        role: 'admin',
        avatar: '🧘‍♂️'
      };
      setUser(seekerUser);
      localStorage.setItem('sattvapath_user', JSON.stringify(seekerUser));
      setIsLoading(false);
      return true;
    } else if (email === 'student@sattvapath.com' && password === 'student123') {
      const studentUser: User = {
        id: '2',
        name: 'Priya Patel',
        email: 'student@sattvapath.com',
        role: 'user',
        avatar: '🌸'
      };
      setUser(studentUser);
      localStorage.setItem('sattvapath_user', JSON.stringify(studentUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate Google OAuth
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const googleUser: User = {
      id: '3',
      name: 'Rohit Kumar',
      email: 'user@gmail.com',
      role: 'user',
      avatar: '🕉️'
    };
    
    setUser(googleUser);
    localStorage.setItem('sattvapath_user', JSON.stringify(googleUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sattvapath_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        loginWithGoogle,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};