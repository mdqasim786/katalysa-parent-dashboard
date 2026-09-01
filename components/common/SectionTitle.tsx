interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`text-lg font-semibold text-gray-900 mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}
