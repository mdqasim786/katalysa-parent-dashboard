import { Parent } from "@/types/parent";
import { Student } from "@/types/student";
import { Fee } from "@/types/fee";
import { StudentResult } from "@/types/result";

export const mockParent: Parent = {
  id: "parent-001",
  name: "Adewale Johnson",
  email: "adewale.johnson@email.com",
  phone: "+234 801 234 5678",
  children: ["student-001", "student-002"],
};

export const mockStudents: Student[] = [
  {
    id: "student-001",
    parentId: "parent-001",
    name: "Tunde Johnson",
    class: "JSS 2A",
    status: "active",
  },
  {
    id: "student-002",
    parentId: "parent-001",
    name: "Funke Johnson",
    class: "SS 1B",
    status: "active",
  },
];

export const mockFees: Record<string, Fee> = {
  "student-001": {
    id: "fee-001",
    studentId: "student-001",
    totalFees: 55000,
    amountPaid: 25000,
    outstandingBalance: 30000,
    paymentStatus: "partial",
  },
  "student-002": {
    id: "fee-002",
    studentId: "student-002",
    totalFees: 75000,
    amountPaid: 75000,
    outstandingBalance: 0,
    paymentStatus: "paid",
  },
};

export const mockResults: Record<string, StudentResult> = {
  "student-001": {
    studentId: "student-001",
    term: "First Term",
    session: "2025/2026",
    subjects: [
      {
        subject: "Mathematics",
        ca1: 18,
        ca2: 16,
        exam: 58,
        total: 92,
        percentage: 92,
        grade: "A1",
        remark: "Excellent",
      },
      {
        subject: "English Language",
        ca1: 15,
        ca2: 14,
        exam: 52,
        total: 81,
        percentage: 81,
        grade: "B2",
        remark: "Very Good",
      },
      {
        subject: "Basic Science",
        ca1: 12,
        ca2: 13,
        exam: 45,
        total: 70,
        percentage: 70,
        grade: "C4",
        remark: "Good",
      },
      {
        subject: "Social Studies",
        ca1: 14,
        ca2: 12,
        exam: 48,
        total: 74,
        percentage: 74,
        grade: "B3",
        remark: "Good",
      },
      {
        subject: "Computer Studies",
        ca1: 17,
        ca2: 15,
        exam: 55,
        total: 87,
        percentage: 87,
        grade: "A1",
        remark: "Excellent",
      },
    ],
    overallAverage: 80.8,
    classPosition: "3rd",
  },
  "student-002": {
    studentId: "student-002",
    term: "First Term",
    session: "2025/2026",
    subjects: [
      {
        subject: "Mathematics",
        ca1: 20,
        ca2: 18,
        exam: 60,
        total: 98,
        percentage: 98,
        grade: "A1",
        remark: "Excellent",
      },
      {
        subject: "English Language",
        ca1: 17,
        ca2: 16,
        exam: 55,
        total: 88,
        percentage: 88,
        grade: "A1",
        remark: "Excellent",
      },
      {
        subject: "Physics",
        ca1: 16,
        ca2: 15,
        exam: 52,
        total: 83,
        percentage: 83,
        grade: "B2",
        remark: "Very Good",
      },
      {
        subject: "Chemistry",
        ca1: 14,
        ca2: 13,
        exam: 48,
        total: 75,
        percentage: 75,
        grade: "B3",
        remark: "Good",
      },
      {
        subject: "Biology",
        ca1: 18,
        ca2: 17,
        exam: 56,
        total: 91,
        percentage: 91,
        grade: "A1",
        remark: "Excellent",
      },
    ],
    overallAverage: 87.0,
    classPosition: "1st",
  },
};
