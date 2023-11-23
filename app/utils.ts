import { useMemo } from "react";
import { useMatches } from "@remix-run/react";
import type { User } from "./models/user.server";

export function useMatchesData(id: string) {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );

  return route?.data;
}

export function isUser(user: User) {
  return user && typeof user === "object";
}

export function useOptionalUser() {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}

export function useUser() {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}

export function validateEmail(email: unknown): email is string {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

// should check against illegal SQL chars
export function validateName(firstName: unknown, lastName: unknown): firstName is string {
  return typeof firstName === "string" && typeof lastName === "string";
}

//ensure no one else has user name
// use an appropriate blacklist to eliminate bad words (maybe?)
export function validateUsername(username: unknown): username is string {
  return typeof username === "string";
}