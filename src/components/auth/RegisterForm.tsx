"use client";

import { clerkAppearance } from "@/lib/clerk-appearance";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const RegisterForm = () => {
  const signInUrl = "/login";

  return (
    <SignUp
      appearance={clerkAppearance}
      signInUrl={signInUrl}
      routing="hash"
      afterSignOutUrl="/"
    />
  );
};

export default RegisterForm;
