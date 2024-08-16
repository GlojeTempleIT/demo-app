'use client';

import Image from "next/image";
import { useEffect, useState } from "react"

export type QrCodeData = {
  timestamp: number;
  email: string;
  name: string;
  gender: string;
  phone: string;
  idLast4: string;
  visitorCount: number;
  scheduledDate: string;
}

const randomString = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const chooseRandom = <T extends unknown>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
}

export default function QrcodePage() {
  const [data, setData] = useState<QrCodeData>();
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!data) return;

    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${JSON.stringify(data)}`)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setUrl(url);
      });
  },[data]);

  const handleGenerateQrCode = () => {
    setData({
      timestamp: Date.now(),
      email: `${randomString(5)}@${randomString(5)}.com`,
      name: randomString(10),
      gender: Math.random() > 0.5 ? 'Male' : 'Female',
      phone: '09' + Math.random().toString().slice(2, 10),
      scheduledDate: new Date(Date.now() + Math.random() * 1000 * 60 * 60 * 24 * 7).toISOString(),
      visitorCount: Math.floor(Math.random() * 100),
      idLast4: Math.random().toString().slice(2, 6)
    });
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <h1>QR Code</h1>
      <button className="btn btn-sm" onClick={handleGenerateQrCode}>Generate random qr code</button>
      {url && <Image src={url} alt="qrcode" width={150} height={150} className="size-32" />}
    </div>
  )
}