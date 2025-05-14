"use client";

import { clerkAppearance } from "@/lib/clerk-appearance";
import { SignIn } from "@clerk/nextjs";

const LoginForm = () => {
  const signUpUrl = "/register";

  return (
    <SignIn
      appearance={clerkAppearance}
      signUpUrl={signUpUrl}
      routing="hash"
      afterSignOutUrl="/"
    />
  );
};

export default LoginForm;
