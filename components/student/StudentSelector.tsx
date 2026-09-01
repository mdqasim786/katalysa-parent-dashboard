"use client";

import { Student } from "@/types/student";
import StudentCard from "./StudentCard";

interface StudentSelectorProps {
  students: Student[];
  selectedStudentId: string | null;
  onSelect: (studentId: string) => void;
}

export default function StudentSelector({
  students,
  selectedStudentId,
  onSelect,
}: StudentSelectorProps) {
  if (students.length === 0) return null;

  return (
    <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
      {students.map((student) => (
        <div key={student.id} className="min-w-[200px] sm:min-w-0 sm:flex-1">
          <StudentCard
            student={student}
            isSelected={student.id === selectedStudentId}
            onClick={() => onSelect(student.id)}
          />
        </div>
      ))}
    </div>
  );
}
