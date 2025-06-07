import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { Header } from "../Header";

export default function DashboardHeader({ doctorName }: DashboardHeaderProps) {
  return (
    <Header
      title={`Good morning, ${doctorName}`}
      description="Here's what's happening with your practice today"
    >
      <Button
        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
        asChild
      >
        <Link href="/doctor/appointments">
          <CalendarDays className="mr-2 h-4 w-4" />
          View Schedule
        </Link>
      </Button>
    </Header>
  );
}
