'use client';

import { useRouter } from "next/navigation";
import { ScanContext } from "../layout";
import { useContext } from "react";

export default function ScanResultPage() {
  const { result, setIsCheckingIn } = useContext(ScanContext);
  const { push } = useRouter();

  const handleCheck = (isIn: boolean) => () => {
    setIsCheckingIn(isIn);
    push('/scan/complete');
  };
  
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Scan Result</h1>

      <table className="table">
        <tbody>
          <tr>
            <th>Email</th>
            <td>{result?.email}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{result?.name}</td>
          </tr>
          <tr>
            <th>gender</th>
            <td>{result?.gender}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{result?.phone}</td>
          </tr>
          <tr>
            <th>Schedule Date</th>
            <td>{result?.scheduled}</td>
          </tr>
          <tr>
            <th>Last 4 digit in ID</th>
            <td>{result?.id}</td>
          </tr>
          <tr>
            <th>Visitor Count</th>
            <td>{result?.visitorCount}</td>
          </tr>
        </tbody>
      </table>

      <div className="flex gap-2">
        <button className="btn btn-success" onClick={handleCheck(true)}>Check in</button>
        <button className="btn btn-error" onClick={handleCheck(false)}>Check out</button>
      </div>
    </div>
  );
}
