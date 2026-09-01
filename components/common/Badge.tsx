interface BadgeProps {
  variant: "paid" | "partial" | "unpaid" | "active" | "inactive" | "graduated" | "transferred";
  children: React.ReactNode;
}

const variantStyles: Record<BadgeProps["variant"], string> = {
  paid: "bg-green-100 text-green-800",
  partial: "bg-yellow-100 text-yellow-800",
  unpaid: "bg-red-100 text-red-800",
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-100 text-gray-800",
  graduated: "bg-blue-100 text-blue-800",
  transferred: "bg-purple-100 text-purple-800",
};

export default function Badge({ variant, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
