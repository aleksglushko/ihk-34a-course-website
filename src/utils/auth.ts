export interface User {
  id: string
  email: string
  name: string
  surname: string
  hasAccess: boolean
}

export const authUtils = {
  // Get current user from localStorage
  getCurrentUser(): User | null {
    try {
      const userData = localStorage.getItem('userData')
      return userData ? JSON.parse(userData) : null
    } catch {
      return null
    }
  },

  // Get JWT token from localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken')
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken() && !!this.getCurrentUser()
  },

  // Check if user has course access
  hasAccess(): boolean {
    const user = this.getCurrentUser()
    return user?.hasAccess || false
  },

  // Logout user
  logout(): void {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
  },

  // Update user data in localStorage
  updateUser(user: User): void {
    localStorage.setItem('userData', JSON.stringify(user))
  }
} 