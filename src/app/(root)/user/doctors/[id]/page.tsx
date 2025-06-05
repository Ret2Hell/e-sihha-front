"use client";
import { useParams } from "next/navigation";
import { useDoctor } from "@/hooks/use-doctor";

import BackButton from "@/components/BackButton";
import NotFound from "@/components/NotFound";
import DoctorAbout from "@/components/doctors/profile/DoctorAbout";
import DoctorQualifications from "@/components/doctors/profile/DoctorQualifications";
import DoctorServices from "@/components/doctors/profile/DoctorServices";
import DoctorContact from "@/components/doctors/profile/DoctorContact";
import DoctorWorkingHours from "@/components/doctors/profile/DoctorWorkingHours";
import DoctorHeader from "@/components/doctors/profile/DoctorHeader";

const DoctorProfilePage = () => {
  const params = useParams();
  const doctorId = params.id as string;
  const { doctor } = useDoctor(doctorId);

  if (!doctor) {
    return (
      <NotFound
        title="Doctor Not Found"
        backLink={{
          href: "/user/doctors",
          text: "Back to Doctors",
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <BackButton href="/user/doctors">Back to Doctors</BackButton>

      <DoctorHeader doctor={doctor} />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <DoctorAbout doctor={doctor} />
          <DoctorQualifications qualifications={doctor.qualifications} />
          <DoctorServices services={doctor.services} />
        </div>

        <div className="space-y-6">
          <DoctorContact contact={doctor.contact} />
          <DoctorWorkingHours workingHours={doctor.workingHours} />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
