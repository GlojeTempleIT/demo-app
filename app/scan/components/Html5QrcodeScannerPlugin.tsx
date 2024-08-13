// file = Html5QrcodePlugin.jsx
import { Html5QrcodeScanner, Html5QrcodeCameraScanConfig } from 'html5-qrcode';
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
  const id = _id || qrcodeRegionId;
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
    html5QrcodeScanner.render(qrCodeSuccessCallback, qrCodeErrorCallback);
    scannerRef.current = html5QrcodeScanner;

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch(error => {
          console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, [config, id, qrCodeErrorCallback, qrCodeSuccessCallback, verbose]);

  return (
      <div id={qrcodeRegionId} />
  );
};

export default Html5QrcodePlugin;