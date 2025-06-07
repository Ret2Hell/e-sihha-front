import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Calendar, FileText } from "lucide-react";

export function InsuranceCard({ insurance }: InsuranceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Insurance Information</CardTitle>
      </CardHeader>
      <CardContent>
        {insurance ? (
          <div className="space-y-2">
            <div className="font-semibold">{insurance.provider}</div>
            <div className="text-sm text-muted-foreground">
              Policy: {insurance.policyNumber}
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="text-muted-foreground mb-2">
              No insurance information available
            </div>
            <Button variant="outline" size="sm">
              Add Insurance
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function QuickActionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="outline" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Follow-up
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Activity className="mr-2 h-4 w-4" />
          Order Lab Tests
        </Button>
      </CardContent>
    </Card>
  );
}
