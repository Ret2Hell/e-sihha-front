"use client";
import { useParams } from "next/navigation";
import { useGetDoctorByIdQuery } from "@/state/api";

import BackButton from "@/components/BackButton";
import DoctorAbout from "@/components/doctors/profile/DoctorAbout";
import DoctorQualifications from "@/components/doctors/profile/DoctorQualifications";
// import DoctorServices from "@/components/doctors/profile/DoctorServices";
import DoctorContact from "@/components/doctors/profile/DoctorContact";
import DoctorWorkingHours from "@/components/doctors/profile/DoctorWorkingHours";
import DoctorHeader from "@/components/doctors/profile/DoctorHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const DoctorProfilePage = () => {
  const params = useParams();
  const doctorId = params.id as string;
  const { data: doctor, isLoading, error } = useGetDoctorByIdQuery(doctorId);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <BackButton href="/user/doctors">Back to Doctors</BackButton>
        <Card>
          <CardContent className="p-12 text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-teal-600" />
            <p className="text-muted-foreground">Loading doctor profile...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="space-y-6">
        <BackButton href="/user/doctors">Back to Doctors</BackButton>
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-red-600 mb-4">Doctor not found</p>
            <p className="text-muted-foreground">
              The doctor you&apos;re looking for doesn&apos;t exist or has been
              removed
            </p>
          </CardContent>
        </Card>
      </div>
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
          {/* <DoctorServices services={doctor.services} /> */}
        </div>

        <div className="space-y-6">
          <DoctorContact
            contact={{ phone: doctor.phone, email: doctor.email }}
          />
          <DoctorWorkingHours />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
