import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { AuthContext, type User, type AuthContextType } from './AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);

  const createUser = useMutation(api.users.createUser);
  const updatePaymentStatus = useMutation(api.payments.updatePaymentStatus);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('courseUser');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setCurrentUserEmail(userData.email);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('courseUser');
      }
    }
  }, []);

  // Query user data if we have an email
  const userData = useQuery(
    api.users.getUserByEmail,
    currentUserEmail ? { email: currentUserEmail } : 'skip'
  );

  // Update user state when userData changes
  useEffect(() => {
    if (userData) {
      setUser(userData as User);
      // Update localStorage with fresh data
      localStorage.setItem('courseUser', JSON.stringify({
        email: userData.email,
        name: userData.name,
      }));
    }
  }, [userData]);

  const login = async (email: string, name: string) => {
    setIsLoading(true);
    try {
      await createUser({ email, name });
      setCurrentUserEmail(email);
      
      // Save to localStorage
      localStorage.setItem('courseUser', JSON.stringify({
        email: email,
        name: name,
      }));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setCurrentUserEmail(null);
    localStorage.removeItem('courseUser');
  };

  const completePayment = async (paypalOrderId: string, paypalPaymentId?: string) => {
    try {
      await updatePaymentStatus({
        paypalOrderId,
        paypalPaymentId,
        status: 'completed',
      });
      
      // The user data will be updated automatically via the query
    } catch (error) {
      console.error('Payment completion failed:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    isLoading: isLoading || (!!currentUserEmail && !userData),
    login,
    logout,
    isAuthenticated: !!user,
    hasAccess: user?.hasAccess ?? false,
    completePayment,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 