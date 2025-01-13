'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from an API route
    fetch('/api/auth/user')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Failed to fetch user:', err));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);