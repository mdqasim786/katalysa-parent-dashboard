import { SubjectResult } from "@/types/result";
import { getGradeColor } from "@/utils/calculateGrade";

interface ResultRowProps {
  subject: SubjectResult;
}

export default function ResultRow({ subject }: ResultRowProps) {
  const gradeColor = getGradeColor(subject.grade);

  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-2.5 sm:py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
        {subject.subject}
      </td>
      <td className="py-2.5 sm:py-3 text-sm text-gray-600 text-center">{subject.ca1}</td>
      <td className="py-2.5 sm:py-3 text-sm text-gray-600 text-center">{subject.ca2}</td>
      <td className="py-2.5 sm:py-3 text-sm text-gray-600 text-center">{subject.exam}</td>
      <td className="py-2.5 sm:py-3 text-sm font-medium text-gray-900 text-center">
        {subject.total}
      </td>
      <td className="py-2.5 sm:py-3 text-sm text-gray-600 text-center">{subject.percentage}%</td>
      <td className={`py-2.5 sm:py-3 text-sm font-semibold text-center ${gradeColor}`}>
        {subject.grade}
      </td>
      <td className="py-2.5 sm:py-3 text-sm text-gray-600 text-center hidden sm:table-cell">
        {subject.remark}
      </td>
    </tr>
  );
}
