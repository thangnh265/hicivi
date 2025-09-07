"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'admin' | 'editor' | 'viewer';
  tenantId?: string;
  tenantName?: string;
  tenantMode?: 'internal' | 'agency';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (data: SignupData) => Promise<boolean>;
}

interface SignupData {
  companyName: string;
  email: string;
  password: string;
  mode: 'internal' | 'agency';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for development
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@abc-corp.com',
    name: 'John Admin',
    role: 'admin',
    tenantId: 'abc-corp',
    tenantName: 'ABC Corp',
    tenantMode: 'internal'
  },
  {
    id: '2',
    email: 'hr@abc-corp.com',
    name: 'Jane HR',
    role: 'editor',
    tenantId: 'abc-corp',
    tenantName: 'ABC Corp',
    tenantMode: 'internal'
  },
  {
    id: '3',
    email: 'agency@talent-plus.com',
    name: 'Mike Agency',
    role: 'admin',
    tenantId: 'talent-plus',
    tenantName: 'Talent Plus Agency',
    tenantMode: 'agency'
  },
  {
    id: '999',
    email: 'super@hicivi.com',
    name: 'Super Admin',
    role: 'super_admin'
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('hicivi_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password') {
      setUser(foundUser);
      localStorage.setItem('hicivi_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hicivi_user');
  };

  const signup = async (data: SignupData): Promise<boolean> => {
    // Mock signup - create new tenant and user
    const tenantId = data.companyName.toLowerCase().replace(/\s+/g, '-');
    const newUser: User = {
      id: Date.now().toString(),
      email: data.email,
      name: data.email.split('@')[0],
      role: 'admin',
      tenantId,
      tenantName: data.companyName,
      tenantMode: data.mode
    };
    
    mockUsers.push(newUser);
    setUser(newUser);
    localStorage.setItem('hicivi_user', JSON.stringify(newUser));
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}