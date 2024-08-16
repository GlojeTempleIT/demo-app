'use client';

import { createContext, PropsWithChildren, useState } from "react";
import { QrCodeData } from "../qrcode/page";

type ScanContextType = {
  result: QrCodeData | null;
  setResult: (result: QrCodeData | null) => void;
  isCheckingIn: boolean;
  setIsCheckingIn: (isCheckingIn: boolean) => void;
}
export const ScanContext = createContext<ScanContextType>({
  result: null,
  isCheckingIn: false,
  setResult: () => {},
  setIsCheckingIn: () => {},
});

export default function ScanLayout({ children }: PropsWithChildren) {
  const [result, setResult] = useState<QrCodeData | null>(null);
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  
  return (
    <ScanContext.Provider value={{ result, setResult, isCheckingIn, setIsCheckingIn }}>
      {children}
    </ScanContext.Provider>
  )
}