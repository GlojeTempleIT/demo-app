'use client';

import { useContext } from "react";
import { ScanContext } from "../layout";
import { useRouter } from "next/navigation";

export default function ScanCompletePage() {
  const { result, isCheckingIn } = useContext(ScanContext);
  const { push } = useRouter();
  
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>{ result?.name} has checked {isCheckingIn ? 'in' : 'out'}</h1>

      <button className="btn btn-primary" onClick={() => push('/scan')}>Scan another</button>
    </div>
  );
}