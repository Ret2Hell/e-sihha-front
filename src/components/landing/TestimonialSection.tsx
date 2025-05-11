"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

  const testimonials = [
    {
      quote:
        "e-Sihha has transformed how I manage my appointments. The AI symptom checker is incredibly accurate!",
      name: "Fatma M.",
      role: "Patient",
      avatar: "SM",
      color: "from-teal-500 to-cyan-500",
    },
    {
      quote:
        "As a doctor, I can now efficiently manage my schedule and access patient records securely from anywhere.",
      name: "Dr. Ahmed K.",
      role: "Cardiologist",
      avatar: "AK",
      color: "from-cyan-500 to-blue-500",
    },
    {
      quote:
        "The platform's intuitive design makes healthcare management seamless for both patients and providers.",
      name: "Mongi B.",
      role: "Healthcare Administrator",
      avatar: "LB",
      color: "from-blue-500 to-indigo-500",
    },
  ];

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

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
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
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 mb-2 text-sm font-medium text-teal-700 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full shadow-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              What People Are Saying
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Hear from our users about their experience with e-Sihha
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl overflow-hidden h-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={
                      isInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0.5, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="mb-4 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 font-serif"
                  ></motion.div>
                  <p className="mb-6 text-gray-600 italic">
                    {testimonial.quote}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                    <div className="flex items-center justify-center">
                      <div className="relative mr-4">
                        {/* Glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

                        <Avatar className="h-12 w-12 relative">
                          <AvatarFallback
                            className={`bg-gradient-to-r ${testimonial.color} text-white`}
                          >
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
