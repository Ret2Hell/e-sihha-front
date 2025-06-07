import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LabResultCard({ title, children }: LabResultCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">{children}</div>
      </CardContent>
    </Card>
  );
}

interface ReadingItemProps {
  date: string;
  children: React.ReactNode;
  className?: string;
}

export function ReadingItem({
  date,
  children,
  className = "",
}: ReadingItemProps) {
  return (
    <div className={`p-2 bg-gray-50 rounded ${className}`}>
      <div className="text-sm font-medium">
        {new Date(date).toLocaleDateString()}
      </div>
      {children}
    </div>
  );
}

interface BloodPressureReadingProps {
  reading: {
    date: string;
    systolic: number;
    diastolic: number;
  };
}

export function BloodPressureReading({ reading }: BloodPressureReadingProps) {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
      <span className="text-sm">
        {new Date(reading.date).toLocaleDateString()}
      </span>
      <span className="font-semibold">
        {reading.systolic}/{reading.diastolic}
      </span>
    </div>
  );
}
