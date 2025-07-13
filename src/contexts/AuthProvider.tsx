import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { AuthContext, type User, type AuthContextType } from './AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentToken, setCurrentToken] = useState<string | null>(null);

  const loginUser = useMutation(api.auth.loginUser);
  const registerUser = useMutation(api.auth.registerUser);
  const updatePaymentStatus = useMutation(api.payments.updatePaymentStatus);

  // Query to verify token
  const tokenVerification = useQuery(
    api.auth.verifyToken,
    currentToken ? { token: currentToken } : 'skip'
  );

  // Load token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      setCurrentToken(savedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  // Update user state when token verification changes
  useEffect(() => {
    if (tokenVerification !== undefined) {
      setIsLoading(false);
      if (tokenVerification.valid && tokenVerification.user) {
        setUser({
          _id: tokenVerification.user.id,
          email: tokenVerification.user.email,
          name: tokenVerification.user.name,
          surname: tokenVerification.user.surname,
          hasAccess: tokenVerification.user.hasAccess,
          paymentStatus: 'completed', // Assuming if they have access, payment is completed
        } as User);
        
        // Update localStorage with fresh user data
        localStorage.setItem('userData', JSON.stringify(tokenVerification.user));
      } else {
        // Token is invalid or expired, clear everything
        setUser(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        setCurrentToken(null);
      }
    }
  }, [tokenVerification]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await loginUser({ email, password });
      
      // Store JWT token and user data
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('userData', JSON.stringify(result.user));
      setCurrentToken(result.token);
      
      return result;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: {
    email: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    address?: string;
    promoCode?: string;
  }) => {
    setIsLoading(true);
    try {
      const result = await registerUser(userData);
      
      // Store JWT token and user data
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('userData', JSON.stringify(result.user));
      setCurrentToken(result.token);
      
      return result;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setCurrentToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('courseUser'); // Remove old storage key too
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
    isLoading,
    login,
    logout,
    register,
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