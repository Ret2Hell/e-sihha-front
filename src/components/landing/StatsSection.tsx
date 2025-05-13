"use client";

import { useEffect, useRef, memo } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import { Users, Calendar, Award, Building } from "lucide-react";

const AnimatedNumberDisplay = memo(function AnimatedNumberDisplay({
  targetValue,
  duration = 2,
  startAnimation,
}: {
  targetValue: number;
  duration?: number;
  startAnimation: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (startAnimation) {
      const node = ref.current;
      if (node) {
        const currentValue = parseFloat(
          node.textContent?.replace(/,/g, "") || "0"
        );
        const controls = animate(currentValue, targetValue, {
          duration: duration,
          onUpdate(value) {
            node.textContent = Math.floor(value).toLocaleString();
          },
        });
        return () => controls.stop();
      }
    } else {
      if (ref.current) {
        ref.current.textContent = "0";
      }
    }
  }, [targetValue, duration, startAnimation]);

  return <span ref={ref}>0</span>;
});

const statsData = [
  {
    icon: <Users className="h-8 w-8 text-white" />,
    value: 10000,
    label: "Active Users",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    value: 50000,
    label: "Appointments Booked",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Award className="h-8 w-8 text-white" />,
    value: 500,
    label: "Verified Doctors",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Building className="h-8 w-8 text-white" />,
    value: 20,
    label: "Partner Hospitals",
    color: "from-indigo-500 to-purple-500",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section className="py-16 bg-blue-50 relative overflow-hidden" ref={ref}>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(0,180,180,0.3),transparent_30%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_80%,rgba(0,180,180,0.3),transparent_30%)]"></div>
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="container px-4 md:px-6 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg transform transition-transform hover:scale-105 duration-300`}
              >
                {stat.icon}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-1">
                  <AnimatedNumberDisplay
                    targetValue={stat.value}
                    startAnimation={isInView}
                  />
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
