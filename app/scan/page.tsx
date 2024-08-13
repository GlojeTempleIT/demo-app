'use client';
import { useState } from "react";
import Html5QrcodePlugin from "./components/Html5QrcodeScannerPlugin";

export default function ScanQrCodePage() {
  const [result, setResult] = useState<string | null>(null);
  
  return (
    <div>
      <h1>Scan QR Code</h1>
      <div className="size-[200px]">
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