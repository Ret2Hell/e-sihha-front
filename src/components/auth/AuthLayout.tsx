"use client";

import type React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/"
          className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center text-sm font-medium text-teal-600 hover:text-teal-500 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
          className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-teal-600 to-cyan-600">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_40%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.3),transparent_40%)]"></div>
            </div>
          </div>

          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src="/white-logo.png"
              alt="e-Sihha Logo"
              width={40}
              height={40}
              className="mb-1 mr-1 h-8 w-8 rounded-full"
            />
            e-Sihha
          </div>

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &quot;e-Sihha has transformed how I manage my healthcare
                appointments. The platform is intuitive and makes booking
                appointments with specialists incredibly simple.&quot;
              </p>
              <footer className="text-sm">Sarah Ahmed</footer>
            </blockquote>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:p-8 w-full"
        >
          <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px] md:w-[450px]">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
