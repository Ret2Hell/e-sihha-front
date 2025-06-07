import { Calendar, Users, DollarSign, Star } from "lucide-react";
import DashboardStatsCard from "./DashboardStatsCard";
import { formatCurrency } from "@/lib/utils";
import React from "react";

export default function DashboardStats({ stats }: DashboardStatsProps) {
  const statsConfig = [
    {
      title: "Today's Appointments",
      value: stats.todayAppointments,
      subtitle: `${stats.completedToday} completed, ${stats.pendingAppointments} pending`,
      icon: <Calendar className="h-4 w-4" />,
      colorClass: "text-blue-600",
      delay: 0,
    },
    {
      title: "Total Patients",
      value: stats.totalPatients,
      subtitle: "+12 new this month",
      icon: <Users className="h-4 w-4" />,
      colorClass: "text-green-600",
      delay: 0.1,
    },
    {
      title: "Monthly Revenue",
      value: formatCurrency(stats.monthlyRevenue),
      subtitle: "+8% from last month",
      icon: <DollarSign className="h-4 w-4" />,
      colorClass: "text-teal-600",
      delay: 0.2,
    },
    {
      title: "Average Rating",
      value: stats.averageRating,
      subtitle: "Based on 127 reviews",
      icon: <Star className="h-4 w-4" />,
      colorClass: "text-yellow-600",
      delay: 0.3,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsConfig.map((stat, index) => (
        <DashboardStatsCard key={index} {...stat} />
      ))}
    </div>
  );
}
