"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import StatsSection from "@/components/landing/StatsSection";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoadingIndicator = () => (
  <div style={{ textAlign: "center", padding: "20px" }}>Loading section...</div>
);

const FeatureSection = dynamic(
  () => import("@/components/landing/FeatureSection"),
  { loading: () => <LoadingIndicator /> }
);
const HowItWorksSection = dynamic(
  () => import("@/components/landing/HowItWorksSection"),
  { loading: () => <LoadingIndicator /> }
);
const BenefitsSection = dynamic(
  () => import("@/components/landing/BenefitsSection"),
  { loading: () => <LoadingIndicator /> }
);
const TestimonialSection = dynamic(
  () => import("@/components/landing/TestimonialSection"),
  { loading: () => <LoadingIndicator /> }
);
const CTASection = dynamic(() => import("@/components/landing/CTASection"), {
  loading: () => <LoadingIndicator />,
});

const LandingPage = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const getRedirectUrl = () => {
        const userRole = user?.publicMetadata?.role as string;
        if (userRole === "doctor") {
          return "/doctor/dashboard";
        }
        return "/user/doctors";
      };
      router.push(getRedirectUrl());
    }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeatureSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
