"use client";

import { clerkAppearance } from "@/lib/clerk-appearance";
import { SignIn } from "@clerk/nextjs";

const LoginForm = () => {
  // const { user } = useUser();

  const signUpUrl = "/register";

  // const getRedirectUrl = () => {
  //   const userRole = user?.publicMetadata?.role as string;
  //   if (userRole === "doctor") {
  //     return "/doctor/dashboard";
  //   }
  //   return "/user/dashboard";
  // };

  return (
    <SignIn
      appearance={clerkAppearance}
      signUpUrl={signUpUrl}
      // forceRedirectUrl={getRedirectUrl()}
      routing="hash"
      afterSignOutUrl="/"
    />
  );
};

export default LoginForm;
