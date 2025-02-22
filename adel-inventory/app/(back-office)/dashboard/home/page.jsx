"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Hourglass } from "lucide-react";
import React from "react";

const Page = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop(); // Récupère uniquement la dernière partie du chemin

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center opacity-70">
        <Home className="w-24 h-24 text-gray-400 opacity-50 mx-auto" />
        <h2 className="text-3xl font-semibold text-gray-600 mt-4">
          {lastSegment} arrive bientôt ⏳
        </h2>
        <p className="text-gray-500 mt-2 text-sm">Cette section sera bientôt disponible.</p>
       
      </div>
    </div>
  );
};

export default Page;
