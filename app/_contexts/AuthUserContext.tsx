"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

// Bentuk data user di state kita
interface AppUser {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
}

// Context
const UserContext = createContext<{
  user: AppUser | null;
  loading: boolean;
}>({
  user: null,
  loading: true,
});

// Provider
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoaded } = useUser();
  const createUser = useMutation(api.users.createNewUser);

  const [appUser, setAppUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !user) {
        setLoading(false);
        return;
      }

      try {
        const userId = await createUser({
          name: user.fullName || "No name",
          email: user.primaryEmailAddress?.emailAddress || "",
          imageUrl: user.imageUrl,
        });

        setAppUser({
          id: userId,
          name: user.fullName || "No name",
          email: user.primaryEmailAddress?.emailAddress || "",
          imageUrl: user.imageUrl,
        });
      } catch (err) {
        console.error("Error syncing user with Convex:", err);
      } finally {
        setLoading(false);
      }
    };

    syncUser();
  }, [isLoaded, user, createUser]);

  return (
    <UserContext.Provider value={{ user: appUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook supaya gampang dipakai
export const useAppUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAppUser must be used within a UserProvider");
  }

  return context;
};
