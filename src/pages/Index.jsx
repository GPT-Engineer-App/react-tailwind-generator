import React from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Web App</h1>
        <p className="text-lg mb-6">This is a web application built with React, TypeScript, Vite, and Tailwind CSS.</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip example.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Index;