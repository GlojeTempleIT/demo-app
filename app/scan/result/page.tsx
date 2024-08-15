'use client';

import { useRouter } from "next/navigation";
import { ScanContext } from "../layout";
import { useContext } from "react";

export default function ScanResultPage() {
  const { result } = useContext(ScanContext);
  const { push } = useRouter();

  const handleOnboard = () => {
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
            <th>Purpose</th>
            <td>{result?.purpose}</td>
          </tr>
          <tr>
            <th>Schedule Date</th>
            <td>{result?.scheduledDate}</td>
          </tr>
          <tr>
            <th>Last 4 digit in ID</th>
            <td>{result?.idLast4}</td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-success" onClick={handleOnboard}>onBoard</button>
    </div>
  );
}
