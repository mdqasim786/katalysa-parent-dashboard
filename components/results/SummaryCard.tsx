interface SummaryCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function SummaryCard({ label, value, icon }: SummaryCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <div>
          <p className="text-xs text-gray-500">{label}</p>
          <p className="text-base sm:text-lg font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
