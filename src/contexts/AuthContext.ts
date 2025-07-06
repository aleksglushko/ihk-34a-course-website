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

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  hasAccess: boolean;
  completePayment: (paypalOrderId: string, paypalPaymentId?: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export type { User, AuthContextType }; 