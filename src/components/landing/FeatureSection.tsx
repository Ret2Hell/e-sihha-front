"use client";

import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  User,
  Brain,
  Stethoscope,
  Map,
  Bell,
  Search,
} from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const FeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const patientFeatures = [
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "Easy Registration",
      description:
        "Create your profile in minutes and manage your personal health information securely.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Quick Appointments",
      description:
        "Book appointments with your preferred doctors in real-time with just a few clicks.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "Smart Health Assistant",
      description:
        "Our AI analyzes your symptoms and recommends the right specialists for your needs.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Find the Right Doctor",
      description:
        "Search for specialists by location, availability, and patient ratings.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Map className="h-6 w-6 text-white" />,
      title: "Clinic Navigation",
      description:
        "Get directions to your doctor's office with our integrated mapping feature.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const doctorFeatures = [
    {
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      title: "Professional Profile",
      description:
        "Showcase your expertise and build trust with a verified professional profile.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Smart Scheduling",
      description:
        "Manage your availability and patient appointments efficiently.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Bell className="h-6 w-6 text-white" />,
      title: "Instant Notifications",
      description:
        "Stay updated with real-time alerts for new appointments and patient messages.",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(0,180,180,0.4),transparent_40%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,180,180,0.4),transparent_40%)]"></div>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="container px-4 md:px-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 mb-2 text-sm font-medium text-teal-700 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full shadow-sm">
              Features
            </div>
            <h2 className="pb-1 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Everything You Need
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Designed for patients and doctors to make healthcare management
              simple and efficient
            </p>
          </div>
        </motion.div>

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8"
          >
            For Patients
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {patientFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="perspective-1000"
              >
                <motion.div
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.05,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="transform-style-3d"
                >
                  <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader>
                      <div
                        className={`mb-2 p-3 bg-gradient-to-r ${feature.color} rounded-xl w-12 h-12 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
                      >
                        {feature.icon}
                      </div>
                      <CardTitle className="pb-1 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8"
          >
            For Doctors
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {doctorFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="perspective-1000"
              >
                <motion.div
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.05,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="transform-style-3d"
                >
                  <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader>
                      <div
                        className={`mb-2 p-3 bg-gradient-to-r ${feature.color} rounded-xl w-12 h-12 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
                      >
                        {feature.icon}
                      </div>
                      <CardTitle className="pb-1 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;
