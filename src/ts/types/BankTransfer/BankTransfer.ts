export type BankTransferBody = {
      beneficiary: string;
      code: string;
      currency: string;
      amount: number;
      description: string;
      country: string;
}