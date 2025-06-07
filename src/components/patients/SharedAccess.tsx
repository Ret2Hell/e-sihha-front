import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function SharedAccess({ sharedWithDoctors }: SharedAccessProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shared Access</CardTitle>
        <CardDescription>Doctors with access to this record</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {sharedWithDoctors.map((doctorId, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 bg-gray-50 rounded"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback>Dr</AvatarFallback>
              </Avatar>
              <span className="text-sm">Doctor {doctorId}</span>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full mt-3">
          <Plus className="h-4 w-4 mr-2" />
          Share with Doctor
        </Button>
      </CardContent>
    </Card>
  );
}
