export interface Fee {
  id: string;
  studentId: string;
  totalFees: number;
  amountPaid: number;
  outstandingBalance: number;
  paymentStatus: "paid" | "partial" | "unpaid";
}
