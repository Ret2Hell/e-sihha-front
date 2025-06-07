"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 to-white -z-10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,180,180,0.2),transparent_40%)]"></div>
          <div className="absolute top-1/3 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(0,180,180,0.2),transparent_40%)]"></div>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-teal-400 to-cyan-300"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-300"
        />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="container px-4 md:px-6 relative z-10"
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 mb-2 text-sm font-medium text-teal-700 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full shadow-sm"
              >
                Revolutionizing Healthcare
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  Healthcare
                </span>{" "}
                Reimagined
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="max-w-[600px] text-gray-600 md:text-xl"
              >
                e-Sihha connects patients with doctors, simplifies appointment
                booking, and securely manages your medical records in one place.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/register">
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-teal-500 text-teal-600 hover:bg-teal-50"
                  asChild
                >
                  <Link href="/apply-doctor">Apply as a Doctor</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex items-center gap-4 text-sm"
            >
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-teal-600" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-teal-600" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-teal-600" />
                <span>User-Friendly</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center lg:justify-end perspective-1000"
          >
            <div className="relative w-full max-w-[500px] h-[400px] rounded-2xl overflow-hidden transform-style-3d">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Glass card effect */}
              <motion.div
                initial={{ rotateY: 5 }}
                animate={{ rotateY: [-5, 5, -5] }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/30 border border-white/20 shadow-xl h-full transform-style-3d"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-full h-[400px]"
                >
                  <Image
                    src="/placeholder.jpeg"
                    alt="e-Sihha Platform Interface"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </motion.div>

                {/* Floating appointment card */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute top-4 left-4 bg-white/80 backdrop-blur-md p-3 rounded-lg shadow-lg z-20"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">
                        Appointment Confirmed
                      </div>
                      <div className="text-sm font-medium">
                        Dr. Ahmed • 2:30 PM
                      </div>
                    </div>
                  </div>
                </motion.div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
        >
          <path
            fill="#EFF6FF"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
