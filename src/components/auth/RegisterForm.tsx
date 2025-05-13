"use client";

import { clerkAppearance } from "@/lib/clerk-appearance";
import { SignUp, useUser } from "@clerk/nextjs";
import React from "react";

const RegisterForm = () => {
  const { user } = useUser();

  const signInUrl = "/login";

  const getRedirectUrl = () => {
    const userRole = user?.publicMetadata?.role as string;
    if (userRole === "doctor") {
      return "/doctor/dashboard";
    }
    return "/user/dashboard";
  };

  return (
    <SignUp
      appearance={clerkAppearance}
      signInUrl={signInUrl}
      forceRedirectUrl={getRedirectUrl()}
      routing="hash"
      afterSignOutUrl="/"
    />
  );
};

export default RegisterForm;
