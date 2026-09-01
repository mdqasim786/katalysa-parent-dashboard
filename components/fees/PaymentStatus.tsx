import Badge from "@/components/common/Badge";

interface PaymentStatusProps {
  status: "paid" | "partial" | "unpaid";
}

const statusLabels: Record<PaymentStatusProps["status"], string> = {
  paid: "Paid",
  partial: "Partial",
  unpaid: "Unpaid",
};

export default function PaymentStatus({ status }: PaymentStatusProps) {
  return <Badge variant={status}>{statusLabels[status]}</Badge>;
}
