import {
  LabResultCard,
  ReadingItem,
  BloodPressureReading,
} from "./LabResultComponents";

export default function LabResults({ labResults }: LabResultsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Blood Pressure */}
      <LabResultCard title="Blood Pressure">
        {labResults.bloodPressure.map((reading, index) => (
          <BloodPressureReading key={index} reading={reading} />
        ))}
      </LabResultCard>

      {/* Cholesterol */}
      <LabResultCard title="Cholesterol">
        {labResults.cholesterol.map((reading, index) => (
          <ReadingItem key={index} date={reading.date}>
            <div className="text-xs text-muted-foreground mt-1">
              Total: {reading.total} • LDL: {reading.ldl} • HDL: {reading.hdl}
            </div>
          </ReadingItem>
        ))}
      </LabResultCard>

      {/* Blood Sugar */}
      <LabResultCard title="Blood Sugar">
        {labResults.bloodSugar.map((reading, index) => (
          <ReadingItem key={index} date={reading.date}>
            <div className="text-xs text-muted-foreground mt-1">
              Fasting: {reading.fasting} • HbA1c: {reading.hba1c}%
            </div>
          </ReadingItem>
        ))}
      </LabResultCard>
    </div>
  );
}
