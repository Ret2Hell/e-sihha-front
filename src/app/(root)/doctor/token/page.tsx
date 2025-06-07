"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ClipboardCopy, AlertTriangle } from "lucide-react";

const TokenPage = () => {
  const { getToken } = useAuth();
  const [token, setToken] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      const currentToken = await getToken();
      setToken(currentToken);
    };
    fetchToken();
  }, [getToken]);

  const handleCopy = async () => {
    if (token) {
      try {
        await navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy token: ", err);
      }
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-6">
      {token ? (
        <div className="mt-8 p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Clerk Session Token:
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <pre className="p-2 border rounded bg-white text-sm text-gray-600 overflow-x-auto flex-grow">
              {token}
            </pre>
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopy}
              title="Copy token"
            >
              <ClipboardCopy className="h-5 w-5" />
            </Button>
          </div>
          {copied && (
            <p className="text-sm text-green-600">Token copied to clipboard!</p>
          )}
          <div className="mt-4 p-3 border border-yellow-300 bg-yellow-50 rounded-md flex items-start gap-2 animate-pulse">
            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> This token is for development and debugging
              purposes only. Do not share it or use it in production
              environments.
            </p>
          </div>
        </div>
      ) : (
        <p>Loading token...</p>
      )}
    </div>
  );
};

export default TokenPage;
