'use client';

import { useState } from 'react';
import { decodeTransactionData } from '../utils/decoder';

export default function TransactionDecoder() {
  const [txData, setTxData] = useState('');
  const [decodedData, setDecodedData] = useState<{
    success: boolean;
    function?: string;
    args?: Record<string, unknown>;
    error?: string;
  } | null>(null);

  const handleDecode = () => {
    const decoded = decodeTransactionData(txData);
    setDecodedData(decoded);
  };

  return (
    <div className="space-y-4 w-full max-w-2xl">
      <div>
        <label className="block text-sm font-medium mb-2">
          Transaction Data
        </label>
        <textarea
          className="w-full p-2 border rounded-md"
          rows={4}
          value={txData}
          onChange={(e) => setTxData(e.target.value)}
          placeholder="Paste transaction data here (0x...)"
        />
      </div>

      <button
        onClick={handleDecode}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Decode
      </button>

      {decodedData && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-bold">Decoded Data:</h3>
          {decodedData.success ? (
            <div>
              <p>Function: {decodedData.function}</p>
              <pre className="mt-2 whitespace-pre-wrap">
                {JSON.stringify(decodedData.args, null, 2)}
              </pre>
            </div>
          ) : (
            <p className="text-red-500">{decodedData.error}</p>
          )}
        </div>
      )}
    </div>
  );
}