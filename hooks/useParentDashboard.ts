"use client";

import { useEffect } from "react";
import { useParentStore } from "@/store/parentStore";

const PARENT_ID = "parent-001";

export function useParentDashboard() {
  const {
    parent,
    students,
    selectedStudentId,
    fees,
    results,
    loading,
    errors,
    fetchParent,
    fetchStudents,
    selectStudent,
  } = useParentStore();

  useEffect(() => {
    fetchParent(PARENT_ID);
    fetchStudents(PARENT_ID);
  }, [fetchParent, fetchStudents]);

  const selectedStudent = students.find((s) => s.id === selectedStudentId) || null;

  return {
    parent,
    students,
    selectedStudent,
    selectedStudentId,
    fees,
    results,
    loading,
    errors,
    selectStudent,
  };
}
