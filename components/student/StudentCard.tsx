import { Student } from "@/types/student";
import StudentStatus from "./StudentStatus";

interface StudentCardProps {
  student: Student;
  isSelected: boolean;
  onClick: () => void;
}

export default function StudentCard({ student, isSelected, onClick }: StudentCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all ${
        isSelected
          ? "border-blue-600 bg-blue-50 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">
            {student.name}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{student.class}</p>
        </div>
        <StudentStatus status={student.status} />
      </div>
    </button>
  );
}
