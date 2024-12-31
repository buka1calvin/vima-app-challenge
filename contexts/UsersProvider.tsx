"use client";

import { fetchUserById, fetchUsers } from "@/lib/requests"; 
import { createContext, useContext, ReactNode, useState } from "react";
import { useQuery } from "react-query";

interface UsersContextType {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  user: User | null;
  fetchUser: (id: number) => void;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(null);

  const { data: users = [], isLoading, isError } = useQuery("users", fetchUsers);

  const { data: user = null } = useQuery(
    ["user", userId],
    () => (userId ? fetchUserById(userId) : null),
    {
      enabled: !!userId,
    }
  );

  const fetchUser = (id: number) => {
    setUserId(id);
  };

  return (
    <UsersContext.Provider value={{ users, user, isLoading, isError, fetchUser }}>
      {children}
    </UsersContext.Provider>
  );
};
