import { createContext } from 'react';
import type { Id } from '../../convex/_generated/dataModel';

interface User {
  _id: Id<'users'>;
  email: string;
  name: string;
  hasAccess: boolean;
  paymentStatus: 'pending' | 'completed' | 'failed';
  paymentId?: string;
  purchaseDate?: number;
  lastLogin?: number;
}

interface LoginResult {
  user: {
    id: string;
    email: string;
    name: string;
    surname: string;
    hasAccess: boolean;
  };
  token: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => void;
  register: (userData: {
    email: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    address?: string;
    promoCode?: string;
  }) => Promise<LoginResult>;
  isAuthenticated: boolean;
  hasAccess: boolean;
  completePayment: (paypalOrderId: string, paypalPaymentId?: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export type { User, AuthContextType, LoginResult }; 