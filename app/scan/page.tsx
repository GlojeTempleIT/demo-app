'use client';

import { useContext } from "react";
import Html5QrcodePlugin from "./components/Html5QrcodeScannerPlugin";
import { useRouter } from "next/navigation";
import { ScanContext } from "./layout";
import { QrCodeData } from "../qrcode/page";

const decodeRawData = (rawData: string): QrCodeData | null => {
  try {
    return JSON.parse(rawData);
  } catch (error) {
    console.warn('Decode as csv');
    const [
      timestamp,
      email,
      name,
      gender,
      phone,
      idLast4,
      visitorCount,
      scheduledDate,
    ] = rawData.split(',');
    return {
      timestamp: new Date(timestamp).getTime(),
      email,
      name,
      gender,
      phone,
      id: idLast4,
      visitorCount: parseInt(visitorCount),
      scheduled: scheduledDate,
    };
  }
}

export default function ScanQrCodePage() {
  const { setResult } = useContext(ScanContext);
  const { push } = useRouter();

  return (
    <div className="w-full min-h-dvh flex flex-col items-center">
      <div className="w-full aspect-square max-w-screen-md">
        <Html5QrcodePlugin
          fps={10}
          qrbox={{ width: 250, height: 250 }}
          qrCodeSuccessCallback={(decodedText) => {
            console.log(decodedText);
            const data = decodeRawData(decodedText);
            if (!data) {
              alert('Invalid QR code');
              return;
            }
            setResult(data);
            push('/scan/result');
          }}
          qrCodeErrorCallback={() => {}}
          className='size-20'
        />
      </div>
    </div>
  );
}