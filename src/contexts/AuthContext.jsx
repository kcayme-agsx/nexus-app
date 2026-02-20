import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock "true" login credentials
const MOCK_USER = {
  fullName: 'Juan Dela Cruz',
  email: 'name@example.com',
  password: 'password123',
  phone: '0917 123 4567'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const savedUsers = localStorage.getItem('registeredUsers');
    return savedUsers ? JSON.parse(savedUsers) : [MOCK_USER];
  });

  const login = (email, password) => {
    const foundUser = registeredUsers.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const userData = {
        fullName: foundUser.fullName,
        email: foundUser.email,
        phone: foundUser.phone,
        initials: foundUser.fullName.split(' ').map(n => n[0]).join('')
      };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, message: 'Invalid email or password' };
  };

  const register = (userData) => {
    // Add to registered users list
    const newUser = {
      ...userData,
      password: userData.password || 'password123', // Default if not provided
      initials: userData.fullName.split(' ').map(n => n[0]).join('')
    };

    const updatedUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

    // Also set as current user
    const publicUser = {
      fullName: newUser.fullName,
      email: newUser.email,
      phone: newUser.phone,
      initials: newUser.initials
    };
    setUser(publicUser);
    localStorage.setItem('currentUser', JSON.stringify(publicUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
