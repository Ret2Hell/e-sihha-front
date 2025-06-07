import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function DoctorAppointmentHeader({
  title,
  description,
}: DoctorAppointmentHeaderProps) {
  return (
    <Header title={title} description={description}>
      <Button
        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
        asChild
      >
        <Link href={"/doctor/appointments/new"}>
          <Plus className="mr-2 h-4 w-4" />
          Add Appointment
        </Link>
      </Button>
    </Header>
  );
}
