"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { UserPlus, Calendar, Stethoscope, FileText } from "lucide-react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-white" />,
      title: "Create Your Account",
      description:
        "Sign up in minutes and complete your health profile with your medical history.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "Find Your Doctor",
      description:
        "Search for specialists or use our AI to recommend the right doctor for your symptoms.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Book Appointment",
      description:
        "Select a convenient time slot from your doctor's available schedule.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Manage Your Health",
      description:
        "Access your medical records, prescriptions, and upcoming appointments anytime.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden noise-bg"
      ref={ref}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,180,180,0.3),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(0,180,180,0.3),transparent_40%)]"></div>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="container px-4 md:px-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 mb-2 text-sm font-medium text-teal-700 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full shadow-sm">
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 animate-gradient-text">
              How e-Sihha Works
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Four simple steps to transform your healthcare experience
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Connection line with animated gradient */}

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={
                    isInView ? { scale: 1, rotateY: [0, 360] } : { scale: 0 }
                  }
                  transition={{
                    scale: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.3 + index * 0.1,
                    },
                    rotateY: { duration: 1.5, delay: 0.3 + index * 0.1 },
                  }}
                  className="relative"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 shadow-lg z-10 relative`}
                  >
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-teal-700 font-medium">
            Ready to get started? It only takes a few minutes!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Create Your Account</span>
            <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;
