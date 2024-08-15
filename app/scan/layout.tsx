'use client';

import { createContext, PropsWithChildren, useState } from "react";
import { QrCodeData } from "../qrcode/page";

type ScanContextType = {
  result: QrCodeData | null;
  setResult: (result: QrCodeData | null) => void;
}
export const ScanContext = createContext<ScanContextType>({
  result: null,
  setResult: () => {}
});

export default function ScanLayout({ children }: PropsWithChildren) {
  const [result, setResult] = useState<QrCodeData | null>(null);
  
  return (
    <ScanContext.Provider value={{ result, setResult }}>
      {children}
    </ScanContext.Provider>
  )
}