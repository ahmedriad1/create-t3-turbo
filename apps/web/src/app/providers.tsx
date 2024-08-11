"use client";

import { TRPCReactProvider } from "@/trpc/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <NextTopLoader />

      <TRPCReactProvider>{children}</TRPCReactProvider>
    </>
  );
}
