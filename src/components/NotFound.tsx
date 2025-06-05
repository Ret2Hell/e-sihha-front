import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound: React.FC<NotFoundProps> = ({ title, message, backLink }) => {
  return (
    <div className="text-center py-12">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {message && <p className="text-muted-foreground mb-6">{message}</p>}
      <Button
        asChild
        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
      >
        <Link href={backLink.href}>{backLink.text}</Link>
      </Button>
    </div>
  );
};

export default NotFound;
