export function calculateGrade(percentage: number): string {
  if (percentage >= 75) return "A1";
  if (percentage >= 65) return "B2";
  if (percentage >= 60) return "B3";
  if (percentage >= 55) return "C4";
  if (percentage >= 50) return "C5";
  if (percentage >= 45) return "C6";
  if (percentage >= 40) return "D7";
  if (percentage >= 35) return "E8";
  return "F9";
}

export function calculateRemark(grade: string): string {
  const remarks: Record<string, string> = {
    A1: "Excellent",
    B2: "Very Good",
    B3: "Good",
    C4: "Good",
    C5: "Credit",
    C6: "Credit",
    D7: "Pass",
    E8: "Pass",
    F9: "Fail",
  };
  return remarks[grade] || "N/A";
}

export function getGradeColor(grade: string): string {
  if (grade.startsWith("A")) return "text-green-600";
  if (grade.startsWith("B")) return "text-blue-600";
  if (grade.startsWith("C")) return "text-yellow-600";
  if (grade.startsWith("D")) return "text-orange-600";
  return "text-red-600";
}
