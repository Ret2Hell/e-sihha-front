"use client";

import { useState, useEffect } from "react";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import NotificationDropdown from "./NotificationDropdown";

const AppNavbar: React.FC = () => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.role as "patient" | "doctor";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90  backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="h-16 px-4 md:px-6 flex items-center justify-end">
        <div className="flex items-center space-x-3">
          <NotificationDropdown />

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonOuterIdentifier: "!text-gray-700",
                  userPreviewMainIdentifierText: "!text-gray-700",
                  userButtonTrigger: "focus:!ring-0 ",
                  userButtonBox: "scale-90 sm:scale-100",
                  userButtonPopoverFooter: {
                    padding: "0rem 2.5rem",
                    "& > div > div:nth-child(1)": {
                      background: "#F7F7F7",
                    },
                  },
                },
              }}
              showName={true}
              userProfileMode="navigation"
              userProfileUrl={
                userRole === "doctor" ? "/doctor/profile" : "/user/profile"
              }
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default AppNavbar;
