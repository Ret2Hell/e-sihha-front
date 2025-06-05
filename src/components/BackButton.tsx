import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BackButton: React.FC<BackButtonProps> = ({ href, children }) => {
  return (
    <Button variant="ghost" asChild className="mb-4">
      <Link href={href}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        {children}
      </Link>
    </Button>
  );
};

export default BackButton;
