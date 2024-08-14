'use client';
import { useState } from "react";
import Html5QrcodePlugin from "./components/Html5QrcodeScannerPlugin";

export default function ScanQrCodePage() {
  const [result, setResult] = useState<string | null>(null);
  
  return (
    <div className="w-full min-h-dvh flex flex-col items-center">
      <h1>Scan QR Code</h1>
      <div className="w-full aspect-square max-w-screen-md">
        <Html5QrcodePlugin
          fps={10}
          qrbox={{ width: 250, height: 250 }}
          qrCodeSuccessCallback={(decodedText) => setResult(decodedText)}
          qrCodeErrorCallback={() => {}}
          className='size-20'
        />
      </div>

      <div>{result}</div>
    </div>
  );
}