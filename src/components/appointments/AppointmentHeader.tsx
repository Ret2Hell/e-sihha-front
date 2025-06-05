import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AppointmentHeader() {
  return (
    <Header
      title="My Appointments"
      description="Manage your healthcare appointments and consultations"
    >
      <Button
        asChild
        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
      >
        <Link href="/user/doctors">
          <Plus className="mr-2 h-4 w-4" />
          Book New Appointment
        </Link>
      </Button>
    </Header>
  );
}
