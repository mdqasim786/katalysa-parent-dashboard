import { formatCurrency } from "@/utils/formatCurrency";

interface FeeCardProps {
  label: string;
  amount: number;
  icon: React.ReactNode;
}

export default function FeeCard({ label, amount, icon }: FeeCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <div>
          <p className="text-xs text-gray-500">{label}</p>
          <p className="text-base sm:text-lg font-bold text-gray-900">
            {formatCurrency(amount)}
          </p>
        </div>
      </div>
    </div>
  );
}
