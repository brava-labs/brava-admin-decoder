import { ethers } from 'ethers';
import { ADMIN_VAULT_ABI } from '../constants/contracts';

const adminVaultInterface = new ethers.Interface(ADMIN_VAULT_ABI);

export function decodeTransactionData(txData: string) {
  try {
    const decodedData = adminVaultInterface.parseTransaction({ data: txData });
    if (!decodedData) {
      return {
        success: false,
        error: 'Failed to decode transaction data',
      };
    }
    return {
      success: true,
      function: decodedData.name,
      args: Object.fromEntries(
        decodedData.fragment.inputs.map((input, i) => [
          input.name,
          decodedData.args[i]
        ])
      ),
    };
  } catch {
    return {
      success: false,
      error: 'Failed to decode transaction data',
    };
  }
}