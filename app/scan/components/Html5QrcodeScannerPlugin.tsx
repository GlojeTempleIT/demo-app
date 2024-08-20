// file = Html5QrcodePlugin.jsx
import { Html5QrcodeScanner, Html5QrcodeCameraScanConfig, Html5Qrcode } from 'html5-qrcode';
import { useEffect, useRef } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

type Props = Html5QrcodeCameraScanConfig & {
    id?: string;
    verbose?: boolean;
    qrCodeSuccessCallback: (decodedText: string) => void;
    qrCodeErrorCallback: (errorMessage: string) => void;
    className?: string;
};

const Html5QrcodePlugin = ({ id: _id, verbose = false, qrCodeSuccessCallback, qrCodeErrorCallback, className, ...config }: Props) => {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (!scannerRef.current) {
      const html5QrCode = new Html5Qrcode(qrcodeRegionId);
      const config = { fps: 10, qrbox: { width: 250, height: 250 } };
  
      // If you want to prefer back camera
      html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback, qrCodeErrorCallback);
      
      scannerRef.current = html5QrCode;
  
      return () => {
        if (html5QrCode.isScanning) {
          html5QrCode.stop().then(() => {
            console.log('Stopped');
          }).catch((error) => {
            console.error('Failed to stop', error);
          });
        }
      }
    }
  }, [config, qrCodeErrorCallback, qrCodeSuccessCallback, verbose]);

  return (
      <div id={qrcodeRegionId} />
  );
};

export default Html5QrcodePlugin;