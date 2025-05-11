"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Clock, Shield, Heart, Zap, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Save Time",
      description:
        "No more waiting on hold or standing in line. Book appointments instantly and manage your healthcare on your schedule.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "Enhanced Privacy",
      description:
        "Your medical data is encrypted and secure, meeting the highest standards of data protection and privacy regulations.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Heart className="h-10 w-10 text-white" />,
      title: "Better Health Outcomes",
      description:
        "Our AI-powered recommendations help you find the right specialist faster, leading to more effective treatment.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Increased Efficiency",
      description:
        "Doctors can focus more on patient care with streamlined appointment management and record keeping.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(0,180,180,0.3),transparent_40%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,180,180,0.3),transparent_40%)]"></div>
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
              Why Choose e-Sihha
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Benefits That Make a Difference
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Experience the advantages of a modern healthcare platform designed
              with you in mind
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative mb-4">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

                <div
                  className={`p-4 bg-gradient-to-r ${benefit.color} rounded-full relative z-10`}
                >
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-teal-100 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
                Trusted by Healthcare Professionals
              </h3>
              <p className="text-gray-600">
                Join the growing community of doctors and patients who trust
                e-Sihha for their healthcare management needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span className="font-medium text-teal-700">
                  GDPR Compliant
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span className="font-medium text-teal-700">
                  Data Encrypted
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span className="font-medium text-teal-700">24/7 Support</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
