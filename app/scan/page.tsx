'use client';

import { useContext } from "react";
import Html5QrcodePlugin from "./components/Html5QrcodeScannerPlugin";
import { useRouter } from "next/navigation";
import { ScanContext } from "./layout";

export default function ScanQrCodePage() {
  const { setResult } = useContext(ScanContext);
  const { push } = useRouter();

  
  return (
    <div className="w-full min-h-dvh flex flex-col items-center">
      <h1>Scan QR Code</h1>
      <div className="w-full aspect-square max-w-screen-md">
        <Html5QrcodePlugin
          fps={10}
          qrbox={{ width: 250, height: 250 }}
          qrCodeSuccessCallback={(decodedText) => {
            try {
              const data = JSON.parse(decodedText);
              setResult(data);
              push('/scan/result');
            } catch (error) {
              alert('Invalid QR code');
            }
          }}
          qrCodeErrorCallback={() => {}}
          className='size-20'
        />
      </div>
    </div>
  );
}