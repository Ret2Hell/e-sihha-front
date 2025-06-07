import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function ApplicationSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <div className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="h-8 w-8 text-teal-600 dark:text-teal-400" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Application Submitted Successfully!
      </h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
        Thank you for applying to join e-Sihha as a healthcare provider.
        We&apos;ve received your application and will review it shortly.
      </p>

      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 max-w-md mx-auto">
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">
            What happens next?
          </h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>Our team will review your application (3-5 business days)</li>
            <li>
              We&apos;ll schedule a video interview if your application meets
              our criteria
            </li>
            <li>
              Upon approval, you&apos;ll receive access to set up your doctor
              profile
            </li>
            <li>Start accepting appointments on the e-Sihha platform</li>
          </ol>
        </div>

        <Button
          asChild
          className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
        >
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </motion.div>
  );
}
